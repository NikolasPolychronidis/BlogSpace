let postsArray = [];
function renderPosts() {
  let html = postsArray
    .map(post => `<h3>${post.title}</h3><p>${post.body}</p><hr/>`)
    .join('');
  document.getElementById('blog-list').innerHTML = html;
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    postsArray = data.slice(0, 5);
    renderPosts();
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
  fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(post => {
      postsArray.unshift(post);
      renderPosts();
    });
});
