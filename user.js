let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');

fetch('https://jsonplaceholder.typicode.com/users/' + userId)
  .then(res => res.json())
  .then(user => {
    let userInfo = document.querySelector('#user-info');

    userInfo.innerHTML = `<h2>${user.username} (${user.name})</h2>
                          <ul>
                            <li><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></li>
                            <li><strong>Phone:</strong> <a href="tel:${user.phone}">${user.phone}</a></li>
                            <li><strong>Address:</strong> <a href="https://www.google.com/maps/@${user.address.geo.lat},${user.address.geo.lng},14z" target="_blank">${user.address.street} ${user.address.suite}, ${user.address.city} (zipcode: ${user.address.zipcode})</a></li>
                            <li><strong>Website:</strong> <a href="https://${user.website}" target="_blank">${user.website}</a></li>
                            <li><strong>Work:</strong> ${user.company.name}</li>
                          </ul>`;
  })

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  .then(res => res.json())
  .then(posts => {
    let userPosts = document.querySelector('#user-posts');

    let postsTitle = document.createElement('h2');
    postsTitle.textContent = 'Posts:';

    let postsWrapper = document.createElement('div');
    postsWrapper.classList.add('posts-wrapper');

    userPosts.append(postsTitle, postsWrapper);

    posts.map(post => {
      let postItem = document.createElement('div');
      postItem.classList.add('post-item');
      postsWrapper.append(postItem);

      postItem.innerHTML = `<h3><a href="./post.html?post_id=${post.id}">${post.title}</a></h3>
                            <p>${post.body}</p>`;
    })
  })