async function init() {
let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let albumId = urlParams.get('album_id');
let res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`);
let album = await res.json();
let title = album.title;
let name = album.user.name;
let userId = album.userId;
let albumPhotos = album.photos;
let albumWrapper = document.querySelector('#album-wrapper');
let albumItem = document.createElement('div');
let albumAllPhotos = document.createElement('div');
albumAllPhotos.classList.add('gallery');
albumWrapper.append(albumItem, albumAllPhotos);
albumItem.innerHTML = `<div><h3>Album title: ${title}</h3><br>
                        <span>Album author: <a href="./user.html?user_id=${userId}">${name}</a></span></div>`;
albumPhotos.map(photo =>{
let photoUrl = photo.url;
let photoTitle = photo.title;
let singlePhoto = document.createElement('IMG');
singlePhoto.src = `${photoUrl}`;
singlePhoto.alt = `${photoTitle}`;
albumAllPhotos.append(singlePhoto);
});





}
init();