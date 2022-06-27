document.addEventListener("DOMContentLoaded", () => {
  getPosts();
})

function getPosts() {
  fetch('http://localhost:1000/api/all')
    .then(res => {
      return res.json();
    })
    .then(json => {
      let postElements = "";
      let posts = JSON.parse(json);
      posts.forEach(post => {
        let postElement = `<div class="card" id=${post.id}>
                            <div class="card-header bg-primary">
                              <h5 class="card-title text-light">${post.title}</h5>
                            </div>
                            <div class="card-body">
                              <div class="card-text">${post.description}</div>
                            </div>
                          </div>`;

        postElements += postElement;
      });
      document.getElementById("posts").innerHTML = postElements;
    });
}