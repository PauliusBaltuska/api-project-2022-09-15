let url = window.location.href;
let home = url.search('index.html');
let users = url.search('users.html');
let albums = url.search('albums.html');
let posts = url.search('posts.html');
let navElement = document.createElement('nav');
let homeNav = document.createElement('button');
let usersNav = document.createElement('button');
let albumsNav = document.createElement('button');
let postsNav = document.createElement('button');
if(home > -1){
    homeNav.classList.add('nav-current');
    homeNav.innerHTML = 'Main';}
    else{
homeNav.innerHTML = '<a href="./index.html">Home</a>';}
if(users > -1){
    usersNav.classList.add('nav-current');
    usersNav.innerHTML = 'Users';}
    else{
usersNav.innerHTML = '<a href="./users.html">Users</a>';}
if(albums > -1){
    albumsNav.classList.add('nav-current');
    albumsNav.innerHTML = 'Albums';}
    else{
albumsNav.innerHTML = '<a href="./albums.html">Albums</a>';}if(posts > -1){
    postsNav.classList.add('nav-current');
    postsNav.innerHTML = 'Posts';}
    else{
postsNav.innerHTML = '<a href="./posts.html">Posts</a>';}
navElement.append(homeNav, usersNav, albumsNav, postsNav);
document.body.prepend(navElement);