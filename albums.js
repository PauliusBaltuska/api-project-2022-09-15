// 9. Tokiu pačiu principu, kaip ir vartotojų puslapį, sukurti puslapį albumams (albums.html).
//   9.1. Prie kiekvieno albumo turi būti:
//     9.1.1. Parašytas jo pavadinimas.
//     9.1.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//     9.1.3. Albume esančių nuotraukų skaičius.
//     9.1.4. Viena nuotrauka


async function getAlbums() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=20&_embed=photos&_expand=user`);
    let albums = await res.json();
    let albumsList = document.querySelector('#albums-list');
    let albumsPageTitle = document.querySelector('#albums-page-title');
    if(!res.ok || albums.length === 0) {
        albumsPageTitle.textContent = `No albums found`;
        return 
    }
    albumsPageTitle.textContent = `All albums (${albums.length}):`
    albums.map(album => {
        let photosCount = album.photos.length;
        let photosTitle = album.photos[0].title;
        let albumTitle = album.title;
        let userId = album.userId;
        let albumId = album.id;
        let userName = album.user.name;
        let photoUrl = album.photos[0].url;
        let albumElement = document.createElement('div');
        console.log(album.photos);
        albumElement.classList.add('single-album');
        albumsList.append(albumElement);
        albumElement.innerHTML = `<h3>Album title: <a href="./album.html?album_id=${albumId}">${albumTitle}</a></h3>
                              <span><strong>Author: <a href="./user.html?user_id=${userId}
                              ">${userName}</a></strong></span><br>
                              <span>Number of photos: ${photosCount}</span><div><img src="${photoUrl}" alt="${photosTitle}"></img></div>`;

    })
  }
getAlbums();