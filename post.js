let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let postId = urlParams.get('post_id');

// fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
//   .then(res => res.json())
//   .then(post => {
//     let userId = post.userId;

//     fetch('https://jsonplaceholder.typicode.com/users/' + userId)
//       .then(res => res.json())
//       .then(user => {
//         let title = post.title;
//         let body = post.body;
//         let name = user.name;
    
//         let postInfo = document.querySelector('#post-info');
//         postInfo.innerHTML = `<h1>${title}</h1>
//                               <span>Author: <a href="./user.html?user_id=${userId}">${name}</a></span>
//                               <p>${body}</p>`;
//       })
//   })

// function getSinglePost() {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`)
//     .then(res => res.json())
//     .then(post => {
//       let title = post.title;
//       let body = post.body;
//       let name = post.user.name;
//       let userId = post.userId;
//       let comments = post.comments;

//       let postInfo = document.querySelector('#post-info');
//       postInfo.innerHTML = `<h1>${title}</h1>
//                             <span>Author: <a href="./user.html?user_id=${userId}">${name}</a></span>
//                             <p>${body}</p>`;
      
//       let commentsWrapper = document.querySelector('.comments-wrapper');

//       comments.map(comment => {
//         let commentItem = document.createElement('div');
//         commentItem.classList.add('comment-item');

//         commentItem.innerHTML = `<h4>${comment.name}</h4>
//                                 <span>Commented by: ${comment.email}</span>
//                                 <p>${comment.body}</p>`;
//         commentsWrapper.append(commentItem);

//       })
//     })
// }

async function getSinglePost() {
  // let res = await fetch(`https://jsonplaceholder.typicode.com/pts/${postId}?_expand=user&_embed=comments`);
  // let post = await res.json();
  
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`);
  
  if (res.ok === false) {
    let errorParagraph = document.createElement('p');
    document.body.prepend(errorParagraph);
    errorParagraph.textContent = 'Error';
    return;
  }

  let post = await res.json();

  let title = post.title;
  let body = post.body;
  let name = post.user.name;
  let userId = post.userId;
  let comments = post.comments;

  let postInfo = document.querySelector('#post-info');
  postInfo.innerHTML = `<h1>${title}</h1>
                        <span>Author: <a href="./user.html?user_id=${userId}">${name}</a></span>
                        <p>${body}</p>`;
  
  let commentsWrapper = document.querySelector('.comments-wrapper');

  comments.map(comment => {
    let commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');

    commentItem.innerHTML = `<h4>${comment.name}</h4>
                            <span>Commented by: ${comment.email}</span>
                            <p>${comment.body}</p>`;
    commentsWrapper.append(commentItem);

  })
}

getSinglePost();