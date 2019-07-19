// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(data => {
    console.log("Success", data.data.topics)
    const dataArray = data.data.topics
    dataArray.forEach(topic => {
    topics.appendChild(createTopics(topic))



    })






  })
// handles Errors
  .catch(error => {
    console.log('We ran into and error', error)



  })


function createTopics (topics) {
  const topicDiv = document.createElement('div')

  //setting the class

  topicDiv.classList.add('tab')

  // adding the text

  topicDiv.textContent = topics




return topicDiv


}
