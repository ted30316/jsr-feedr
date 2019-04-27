/*
  Please add all Javascript code to this file.
*/

const API_KEY = 'd07d1182ccdb4852aa8e83f3bdad064d';
let url1 = 'https://newsapi.org/v2/top-headlines?apiKey=040f1f79da244fbbadac58b17faa81d7&sources=bleacher-report'
let url2 = 'https://newsapi.org/v2/top-headlines?apiKey=040f1f79da244fbbadac58b17faa81d7&sources=engadget'
let url3 = 'https://newsapi.org/v2/top-headlines?apiKey=040f1f79da244fbbadac58b17faa81d7&sources=ign'
let url4 = 'https://newsapi.org/v2/top-headlines?apiKey=040f1f79da244fbbadac58b17faa81d7&sources=msnbc'

let output = ''

//Navigation & Search 
//const dropdownButton = document.getElementById = ('.dropdown-button');
//const dropdownMenu = document.getElementById = ('.dropdown-menu');


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

//Trigger pop up on articles


//Toggle search field on click


//Toggle search click on enter


//Loader
$(() => {
  document.getElementById("popUp").classList.remove("hidden");
  const closePopUp = document.querySelector(".closePopUp");
  closePopUp.addEventListener("click", e => {
    document.getElementById("popUp").classList.add("hidden");
    e.preventDefault();
  });


  document.getElementById('bleacherreport').addEventListener('click', bleacherReport)

  function bleacherReport() {

    xhr = new XMLHttpRequest()
    console.log(xhr);

    // open function
    xhr.open('GET', url1, true)

    xhr.onload = function () {
      if (this.status == 200) {

        var responseText = JSON.parse(xhr.responseText)

        for (var i = 0; i < responseText.articles.length; i++) {
          console.log(responseText.articles[i].title);

          output += ` <li><a href='${responseText.articles[i].url}'>${responseText.articles[i].title} </li> `
        }
        document.getElementById('bleacherreportContent').innerHTML = output

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

  const searchBleacherReport = document.getElementById("bleacherReport");

  document.getElementById('engadget').addEventListener('click', engadget)

  function engadget() {
    xhr = new XMLHttpRequest()
    console.log(xhr);

    // open function
    xhr.open('GET', url2, true)

    xhr.onload = function () {
      if (this.status == 200) {

        var responseText = JSON.parse(xhr.responseText)

        for (var i = 0; i < responseText.articles.length; i++) {
          console.log(responseText.articles[i].title);

          output += ` <li><a href='${responseText.articles[i].url}'>${responseText.articles[i].title} </li> `
        }
        document.getElementById('engadgetContent').innerHTML = output

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

  document.getElementById('ign').addEventListener('click', ign)

  function ign() {
    xhr = new XMLHttpRequest()
    console.log(xhr);

    // open function
    xhr.open('GET', url3, true)

    xhr.onload = function () {
      if (this.status == 200) {

        var responseText = JSON.parse(xhr.responseText)

        for (var i = 0; i < responseText.articles.length; i++) {
          console.log(responseText.articles[i].title);

          output += ` <li><a href='${responseText.articles[i].url}'>${responseText.articles[i].title} </li> `
        }
        document.getElementById('ignContent').innerHTML = output

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

  document.getElementById('msnbc').addEventListener('click', msnbc)

  function msnbc() {
    xhr = new XMLHttpRequest()
    console.log(xhr);

    // open function
    xhr.open('GET', url4, true)

    xhr.onload = function () {
      if (this.status == 200) {

        var responseText = JSON.parse(xhr.responseText)

        for (var i = 0; i < responseText.articles.length; i++) {
          console.log(responseText.articles[i].title);

          output += ` <li><a href='${responseText.articles[i].url}'>${responseText.articles[i].title} </li> `
        }
        document.getElementById('msnbcContent').innerHTML = output

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

});
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