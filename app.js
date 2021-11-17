


var body = document.getElementsByTagName('body')[0];
const bookButton = document.getElementById('bookbutton');
const booktable = document.createElement('table');
const tablebody = document.createElement('tbody');
const displayButton = document.getElementById('displaybooksbutton');
booktable.style.width = '100%';
booktable.setAttribute = ('border', '1');
booktable.textContent = "tester";
const Title = document.getElementById('title');
const Author = document.getElementById('author');
const Pages = document.getElementById('pages');
const haveRead = document.getElementById('haveread');



/*
const powerOfNow = new Book('The Power of Now', 'Eckhart Tolle', 453, true);
const pelicanBrief = new Book('The Pelican Brief', 'John Grisham', 632, true);
*/

let myLibrary = [];
function Book (title, author, pages, hasread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasread = hasread;
}

const PelicanBrief = new Book ('Pelican Brief', 'Grisham', 600, true);
const MindIlluminated = new Book('Mind Illuminated', 'Culidasa', 500, false);

myLibrary.push(PelicanBrief);
myLibrary.push(MindIlluminated);
setStorage(myLibrary);
  
let count = 1
bookButton.addEventListener('click', () => {
  let buttonlibrary = getStorage();
  var obj
  = new Book;
  obj.title = Title.value;
   obj.author = Author.value;
   obj.pages = Pages.value;
   obj.hasread = haveRead.value;
   buttonlibrary.push(obj);
 console.log(buttonlibrary);
 setStorage(buttonlibrary);

});


displayButton.addEventListener('click', () => {
  let displaylibrary = getStorage();
  tablebody.innerHTML = '';
  loopArray(displaylibrary);
 // myChart.data.datasets[0].data = arrayPages
  // chart.update();

}); 



function addBookToLibrary () {   
 
 
    
}
function loopArray (array)  {
  for (let i=0; i<array.length; i++) {
    var row = document.createElement('tr');
    var cellbutton = document.createElement('button');
    cellbutton.style.width = '100px';
    cellbutton.style.height = '50px';
    cellbutton.innerHTML = 'Remove Book';
    
    cellbutton.addEventListener('click', () => {
     tablebody.removeChild(tablebody.children[i]);
    });

      
    

    for(let key in array[i]) {
      if (array[i].hasOwnProperty(key)) {
        var cell = document.createElement('td');
        
        
        let value = array[i][key];
        cell.textContent = value;

        console.log(key, value);
      }
     
    
    row.appendChild(cell);
   
    
   
    row.appendChild(cellbutton);
    
    }
    
    tablebody.appendChild(row);
    booktable.appendChild(tablebody);
    body.appendChild(booktable);
  }
  
  

}

function setStorage (libArray) {
  let stringLibrary = JSON.stringify(libArray);
  localStorage.setItem('LIBRARY', stringLibrary);
}

function getStorage() {
  let stringL = localStorage.getItem('LIBRARY');
  return JSON.parse(stringL);
}


function arrayAuthor() {
let authorlibrary = getStorage();
return authorlibrary.map(function(a) {return a.author;});
}


function arrayPages () {
let pageslibrary = getStorage();
return pageslibrary.map(function(a) {return a.pages;});
}

const chartButton = document.getElementById('chartbutton');
const ctx = document.getElementById('myChart');
let x = 2;
chartButton.addEventListener('click', () => {
  if(x===1) {
  const myChart = new Chart(ctx, { type: 'bar',
  data: { 
      labels: arrayAuthor(),
      datasets: [{
          label: 'Authors',
       //   fillColor : "#48A497",
			//strokeColor : "#48A4D1",
          data: arrayPages(),
          backgroundColor: [
              
              'brown'
              
          ],
          borderWidth: 2
  
      }]
  },
  options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
          },
          title: {
              display: true,
              text: 'Graph by pages'
          }
      }
  },
  });
}
else {
  const something = ctx.getContext('2d');
  something.fillRect(25,25,100,100);
  
}

});



//create button that when clicked shows form. do it using show, hide

// a few ways to do this, both using iteration. Make a table that for each book creates 
//corresponding rows for author, pages, hasbeenread

//for each book you create a row with three table data in that row
//for author , pages, hasbeenread using DOM
//do this using iteration
//first create a table in html
//for each i, doc.createelement tr with four td's within that tr.
//tds will be title, author, pages, hasbeenread
// you can create the table using doc.createelement or create it in html
//and append the rows and td to it