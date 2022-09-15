// 8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.
//   8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.
async function getUsers() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    let users = await res.json();
    let usersList = document.querySelector('#users-list');
    let usersPageTitle = document.querySelector('#users-page-title');
    if(!res.ok || users.length === 0) {
        usersPageTitle.textContent = `No users found`;
        return 
    }
    usersPageTitle.textContent = `All users (${users.length}):`
    users.map(user => {
        let name = user.name;
        let userName = user.username;
        let userId = user.id;
        async function getComments() {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            let comments = await res.json();
            console.log(comments.length);
            let commentsCount = comments.length;
            let userItem = document.createElement('ul');
        userItem.innerHTML = `<li><a href="./user.html?user_id=${userId}
        ">${userName} (${name})</a>, number of posts: ${commentsCount}</li>`
        usersList.append(userItem);
    }
    getComments();
    })
    };
    getUsers();