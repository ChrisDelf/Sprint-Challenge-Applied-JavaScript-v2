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
const cards = document.querySelector('.cards-container')





axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {

    const impArticles = res.data.articles
    for (topic in impArticles) {
      console.log(impArticles)
      impArticles[topic].forEach(article => {
      cards.appendChild(createArticles(article))

      })




    }

    })



//------------------------ old code
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//   .then(data => {
//     console.log("Success", data.data.articles)
//     const impBootstrap = data.data.articles.bootstrap
//     console.log(impBootstrap)
//     impBootstrap.forEach(bootstrap => {
//     cards.appendChild(createArticles(bootstrap))
//
//
//     })
//
//   })
//
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//
//   .then(data => {
//     console.log("Success", data)
//     const impJavaScript = data.data.articles.javascript
//     console.log(impJavaScript)
//     impJavaScript.forEach(javaScript => {
//     cards.appendChild(createArticles(javaScript))
//
//     })
//
//   })
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//
//   .then(data => {
//     console.log("Success", data)
//     const impTech = data.data.articles.technology
//     console.log(impTech)
//     impTech.forEach(tech => {
//     cards.appendChild(createArticles(tech))
//
//     })
//
//   })
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//
//   .then(data => {
//     console.log("Success ", data)
//     const impJquery = data.data.articles.jquery
//     impJquery.forEach(jquery => {
//     cards.appendChild(createArticles(jquery))
//
//     })
//
//   })
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//
//   .then(data => {
//     console.log("Success ", data)
//     const impNode = data.data.articles.node
//     impNode.forEach(node => {
//     cards.appendChild(createArticles(node))
//
//     })
//
//   })



 .catch(error => {
  console.log("An error as occurred with herokuapp", error)


 })


function createArticles(articles) {
 //creating elements
  const cardDiv = document.createElement('card')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const authorName = document.createElement('span')
  const imageCon = document.createElement('div')
  const image = document.createElement('img')

  //setting up classes
  cardDiv.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imageCon.classList.add('img-container')


  //appending
  cardDiv.appendChild(headline)
  cardDiv.appendChild(author)
  author.appendChild(imageCon)
  author.appendChild(authorName)
  imageCon.appendChild(image)

  //adding the content
  headline.textContent = articles.headline
  image.src = articles.authorPhoto
  authorName.textContent = articles.authorName













    return cardDiv

}
