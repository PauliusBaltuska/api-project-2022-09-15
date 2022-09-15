let postsList = document.querySelector('#posts-list');

fetch('https://jsonplaceholder.typicode.com/posts?_limit=2')
  .then(res => res.json())
  .then(posts => {
    posts.map(post => {
      let title = post.title;
      let body = post.body;
      let userId = post.userId;

      fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(res => res.json())
        .then(user => {
          let name = user.name;

          let postItem = document.createElement('div');
          postItem.classList.add('post-item');
          postsList.append(postItem);

          postItem.innerHTML = `<h3>Post title: ${title}</h3>
                                <span>Author: <a href="./user.html?user_id=${userId}">${name}</a></span>
                                <p>${body}</p>`;

          fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(res => res.json())
            .then(comments => {

              let commentsWrapper = document.createElement('div');
              commentsWrapper.classList.add('comments-wrapper');
              postItem.append(commentsWrapper);

              comments.map(comment => {
                let commentItem = document.createElement('div');
                commentItem.classList.add('comment-item');

                commentItem.innerHTML = `<h4>${comment.name}</h4>
                                         <span>Commented by: ${comment.email}</span>
                                         <p>${comment.body}</p>`;
                commentsWrapper.append(commentItem);
              })
            })
        })
    })
  })

fetch('https://jsonplaceholder.typicode.com/albums?_limit=15&_expand=user&_embed=photos')
  .then(res => res.json())
  .then(albums => {
    console.log(albums);
    let albumsList = document.querySelector('#albums-list');

    albums.map(album => {
      let albumId = album.id;
      let title = album.title;
      let userName = album.user.name;
      let userId = album.user.id;
      let firstPhoto = album.photos[0];

      let albumItem = document.createElement('div');
      albumItem.classList.add('album-item');
      albumsList.append(albumItem);

      albumItem.innerHTML = `<h3><a href="./album.html?album_id=${albumId}">${title}</a></h3>
                             <div>Album author: <a href="./user.html?user_id=${userId}">${userName}</a></div>
                             <img src="${firstPhoto.url}">`;
    })
  })