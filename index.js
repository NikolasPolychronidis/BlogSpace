fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    const postArray = data.slice(0, 5);
    const html = postArray
      .map(post => `<h3>${post.title}</h3><p>${post.body}</p><hr/>`)
      .join('');
    document.getElementById('blog-list').innerHTML = html;
  });

const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const postTitle = document.getElementById('post-title').value;
  const postBody = document.getElementById('post-body').value;
  const data = {
    title: postTitle,
    body: postBody,
  };
  console.log(data);
});
