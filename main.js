
// ---- CAROUSEL SLIDE CONTROLS --- //

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex +=n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex =n);
}

function showSlides(n) {
    var i;
    // var slides = document.getElementsByClassName("tagLine");
    var slides = ["https://i.imgur.com/k5aEq1W.png", "https://i.imgur.com/CP1dNow.jpg", "https://i.imgur.com/DOQpTGX.jpg"];
    // $("h1").css({"background-image": "url( + heroImages[index])"});
    // if (n > slides.length) {slideIndex = 1}
    // if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
            setInterval(function(){
                $("#heroImg").css({"background-image": "url(" + heroImages[index]+")"});
                
                if (index === heroImages.length) {
                    index = 0;
                } else {
                    index=+ 1;
                }
            }, 2000)
        };
        // slides[i].style.display = "none";
    }   
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace("active", "");
    // }
    slides[slideIndex-1].style.display = "" ;
    // dots[slideIndex-1].className =+ " active";

console.log(heroBG);


// if (index === heroImages.length) {
//     index = 0;
// } else {
//     index=+ 1;
// }
// }, 2000)
// };



// ----- QUOTE BOX MECHANICS ---- //
// ----- QUOTE BOX MECHANICS ---- //
// ----- QUOTE BOX MECHANICS ---- //

// $(document).ready(function() {


setInterval(function() { 
        // console.log($('#slideshow > div:first')[0])
        var $quoteBox = $('#quoteBox > section')
        console.log($quoteBox[0])
        $('#quoteBox > section:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#quoteBox');
},  5000);



// TESTING SLIDESHOW REPLACE BACKGROUND URL for header
var heroBG = document.getElementsByClassName("tagLine");
console.log(heroBG);

var heroImages = ["https://i.imgur.com/k5aEq1W.png", "https://i.imgur.com/CP1dNow.jpg", "https://i.imgur.com/DOQpTGX.jpg"];

var i = 0;
function swapHeroBG() {
    setInterval(function(){
        $("h1").css({"background-image": "url( + heroImages[index])"});
        
        if (index === heroImages.length) {
            index = 0;
        } else {
            index=+ 1;
        }
    }, 2000)
};