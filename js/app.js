/*
  Please add all Javascript code to this file.
*/

const API_KEY = 'd07d1182ccdb4852aa8e83f3bdad064d';
let url1 = 'https://newsapi.org/v2/top-headlines?apiKey=040f1f79da244fbbadac58b17faa81d7&sources=bleacher-report'
let url2 = 'https://newsapi.org/v2/top-headlines?apiKey=040f1f79da244fbbadac58b17faa81d7&sources=engadget'

// console.log(xhr);
// let url = 'https://newsapi.org/v2/top-headlines?apiKey=040f1f79da244fbbadac58b17faa81d7&sources=bleacher-report'
// //when clicking on feedr logo, show main view
// $logo.click(function () {
//   searchAll();
// })

// function getBleacherReport() {
//   xhr.open('GET', 'https://newsapi.org/v2/top-headlines?apiKey=040f1f79da244fbbadac58b17faa81d7&sources=bleacher-report', true);
//   xhr.send();
//   xhr.onload = onSuccess;
//   xhr.onerror = onError;
// }

// function onSuccess() {
//   console.log('connected');
// }

// function onError() {
//   console.log('error');
// }
// getBleacherReport();


// function searchAll() {
//   $popUp.removeClass("hidden");
//   searchBleacherReport();
//   searchEngadget();
//   searchIGN();
//   searchMSNBC();
//}

document.getElementById('bleacherreport').addEventListener('click', bleacherReport)

function bleacherReport() {
  xhr = new XMLHttpRequest()
  console.log(xhr);

  //xhr.open('GET', url1, true)

  // open function
  xhr.open('GET', url1, true)

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else if (this.status == 404) {
      document.getElementById("text").innerHTML = "NOT FOUND"
    }
  }
  xhr.onerror = function () {
    console.log("request errors");
    document.getElementById("response").innerHTML = this.responseText

  }
  //sends request
  xhr.send()

}


document.getElementById('engadget').addEventListener('click', engadget)

function engadget() {
  xhr = new XMLHttpRequest()
  console.log(xhr);

  //xhr.open('GET', url2, true)

  // open function
  xhr.open('GET', url2, true)

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else if (this.status == 404) {
      document.getElementById("text").innerHTML = "NOT FOUND"
    }
  }
  xhr.onerror = function () {
    console.log("request errors");
    document.getElementById("response").innerHTML = this.responseText

  }
  //sends request
  xhr.send()

}
//console.log(onclick);

//search functionality 






//search Bleacher Report








//search Engadget






//search IGN





//search MSNBC


//error functionality 


// function loadText() {

//   //create xhr obj
//   var xhr = new XMLHttpRequest()
//   console.log(xhr);

//   //OPTIONAL - used for loaders the loader thingi loading.....
//   xhr.onprogress = function () {
//     console.log(xhr.readyState)
//   }

//   // open function
//   url = 'https://newsapi.org/v2/sources?apiKey=d07d1182ccdb4852aa8e83f3bdad064d&category=sports&country=us'
//   xhr.open('GET', url, true)

//   xhr.onload = function () {
//     if (this.status == 200) {
//       console.log(this.responseText);
//     } else if (this.status == 404) {
//       document.getElementById("text").innerHTML = "NOT FOUND"
//     }
//   }
//   xhr.onerror = function () {
//     console.log("request errors");
//     document.getElementById("text").innerHTML = this.responseText

//   }
//   //sends request
//   xhr.send()


// }