// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerCon = document.querySelector('.header-container')

headerCon.appendChild(Header())



function Header() {
  //createing the elements
  const headerDiv = document.createElement('div')
  const dateDiv = document.createElement('span')
  const lambdaTimes = document.createElement('h1')
  const temp =document.createElement('span')
  //setting the styling

  headerDiv.classList.add('header')
  dateDiv.classList.add('date')
  temp.classList.add('temp')

  //adding the content
  dateDiv.textContent = 'SMARCH 28, 2019'
  lambdaTimes.textContent = 'Lambda Times'
  temp.textContent = '98°'



  //
headerDiv.appendChild(dateDiv)
headerDiv.appendChild(lambdaTimes)
headerDiv.appendChild(temp)


return headerDiv

}
