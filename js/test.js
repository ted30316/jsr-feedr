document.getElementById('bleacherreport').addEventListener('click', bleacherReport)
let url1 = 'https://newsapi.org/v2/top-headlines?apiKey=040f1f79da244fbbadac58b17faa81d7&sources=bleacher-report'

function bleacherReport() {
    console.log('hello');

    xhr = new XMLHttpRequest()
    console.log(xhr);


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

$(document).ready(function () {
    url1();

    $("newsSource li").click(function () {
        $(".loader").removeClass("hidden");
        var newsSource = ($(this).find('a.value').text());
        $('#sourceName').text(newsSource);
        $('title').html("Feedr: " + newsSource);
        $('.contentsTitle').html(newsSource);
        $(".article").remove();

        switch (newsSource) {
            case "Bleacher Report":
                url1;
                break;
        }
    });
});

//functions below

// function buildHtml() {
//     $("<article>", {
//         class: "article"
//     }).append(
//         $("<section>", {
//             class: "impressions"
//         }).append(impresType),
//         $("<section>", {
//             class: "featuredImage"
//         }).append(
//             $("<img src = " + image + " alt = ''>")
//         ),
//         $("<section>", {
//             class: "articleContent"
//         }).append(
//             $("<a href =" + link + ">").append(
//                 $("<h3>").text(title),
//                 $("<h6>").text(channel)
//             )
//         ),
//         $("<section>", {
//             class: "impressions"
//         }).append(impressions),
//         $("<div>", {
//             class: "clearfix"
//         })
//     ).appendTo("#main")
//     $(".loader").addClass("hidden");
// }

// function bleacherAjax() {
//     $.ajax({
//         type: "GET",
//         url: "https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=7767c5512ac3478ab4cbb281d64f75bd",
//         dataType: 'json',
//         success: function (result) {
//             for (var i = 0; i < 4; i++) {
//                 image = result.articles[i].urlToImage;
//                 title = result.articles[i].title;
//                 link = result.articles[i].url;
//                 channel = "Sports";
//                 impressions = null;
//                 impresType = null;
//                 buildHtml();
//             }
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             alert("Status: " + textStatus);
//             alert("Error: " + errorThrown);
//             location.reload(true);
//         }
//     });
// }