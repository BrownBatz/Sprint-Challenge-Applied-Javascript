// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( (response) => {
        console.log(response.data);
        response.data.articles.javascript.forEach(createCard);
    })
    .catch( (err) => {
        console.log('There was an error: ', err);
    });

// You get an array of objects back, it looks like you can do response.data.javascript to get the array and then you can use object properties from there

function createCard(object){
    let card = document.createElement('div');
    card.classList.add('card');

    let headline = document.createElement('headline');
    headline.classList.add('headline');
    headline.textContent = object['headline'];
    card.appendChild(headline);

    let author = document.createElement('div');
    author.classList.add('author');
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
            let img = document.createElement('img');
            img.setAttribute('src', object['authorPhoto']);
            imgContainer.appendChild(img);
        author.appendChild(imgContainer);
    card.appendChild(author);

    let authorName = document.createElement('span');
    authorName.classList.textContent = `By ${object['authorName']}`;
    card.appendChild(authorName);

    let cardsContainer = document.querySelector('.cards-container');
    cardsContainer.appendChild(card);
}
