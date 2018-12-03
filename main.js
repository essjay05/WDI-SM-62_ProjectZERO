// --- SKILLS slideshow /carousel --- //
var slideIndex = 0;
showSlides();
var slides, dots;

    function showSlides() {
        var i;
        slides = document.getElementsByClassName("mySlides");
        dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display="none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i=0; i< dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000); //Change image every 3 seconds
    }


    // ============= DOES NOT WORK  :( ================== //
    // ============= DOES NOT WORK  :( ================== //
        // Next/previous controls
        function plusSlides(position) {
            slideIndex += position;
            if (slideIndex > slides.length) {slideIndex = 1}
            else if (slideIndex < 1){slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }   
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
            }
    
        // Thumbnail image controls
        function currentSlide(index) {
            if (index > slides.length) {index = 1}
            else if (index <1){index = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides [i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            // dots[slideIndex-1].className += " active";
            }
    


// ---- CAROUSEL SLIDE CONTROLS --- // (My attempt at creating from scratch)
// DOTS and corresponding slides //

// var dot1 = document.getElementsByClassName(".dot1");
// var dot2 = document.getElementsByClassName(".dot2");
// var dot3 = document.getElementsByClassName(".dot3");
// var dots = [dot1, dot2, dot3]
// console.log(dots);



// var ctrlDot = {
//     dot1: heroSlides[0],
//     dot2: heroSlides[1],
//     dot3: heroSlides[2]
// };

// var switchSlide = function () {
//     for (var i = 0; i < dots.length; i++)
//     dots[i].click(function() {
//         $(this).css("background-image", heroSlides[i]);
//     });
// }
      
//     for (var i = 0; i < dots.length; i++) {
//         setInterval(function swapSlide(i){
//             swapSlide = heroBG.css({bgImg: newSlideUrl});
// }
// }

// DEFINING VARIABLES FOR CAROUSEL //
//     var heroBG = document.getElementsByTagName("slide");
//         console.log(heroBG);

//     var heroSlides = ["https://i.imgur.com/k5aEq1W.png", "https://i.imgur.com/CP1dNow.jpg", "https://i.imgur.com/DOQpTGX.jpg"];
//         console.log(heroSlides);
//         console.log(heroSlides[0]);

//     var bgImg = "background-image";
//         console.log(bgImg);

//     var i = 0;
//         console.log(i);

//     var newSlideUrl = ("url(" + heroSlides[i]+")");
//         console.log(newSlideUrl);

//         function showSlides(n) {
//             var i;
//             var slides = document.getElementsByClassName("tagLine");
//             var slides = ["https://i.imgur.com/k5aEq1W.png", "https://i.imgur.com/CP1dNow.jpg", "https://i.imgur.com/DOQpTGX.jpg"];
//             $("h1").css({"background-image": "url( + heroImages[index])"});
//             if (n > slides.length) {slideIndex = 1}
//             if (n < 1) {slideIndex = slides.length}
//             for (var i = 0; i < slides.length; i++) {
//                 dots[i].click(function swapSlide(i) {
//                     setInterval(function swapSlide(i){
//                         swapSlide = heroBG.css({bgImg: newSlideUrl[i]});
//                         if (i === heroSlides[0]) {
//                             heroBG.css(bgImg: newSlideUrl[0])
//                         } else if (i === heroSlides[1]) {
//                             heroBG.css(bgImg: newSlideUrl[1])
//                         } else {
//                             heroBG.css(bgImg: newSlideUrl[2]);
//                     console.log("it's working up to here");
//                 };
                
//             }   



// ----- QUOTE BOX MECHANICS ---- //
// ----- QUOTE BOX MECHANICS ---- //
// ----- QUOTE BOX MECHANICS ---- //

// $(document).ready(function() WORKING!!! DO NOT TOUCH!! {

// Testimonial/Quotes function
var quotes = ["Multi-talented creative with top-notch organization skills! Joy exhibits a strong drive to produce top-level work and a diverse skill set that would benefit any employer.",
"Invention, my dear friends, is 93% perspiration, 6% electricity, 4% evaporation, and 2% butterscotch ripple.",
"Greetings, programs!"];

var i = 0;

var insQte = $(".quote")

function rotQte() {
    insQte.text(quotes[i % 3]).fadeIn(3000).delay(3000).fadeOut(3000)
    i++
};

rotQte();
setInterval(rotQte, 9000)

var refs =["-- Flynn (TRON)","--Geri Carillo","- Willy Wonka (Willy Wonka & the Chocolate Factory)"];

    // Authors fade in/out function (similar to quotes)
var insRef = $(".ref")

function rotRef() {
    insRef.text(refs[i % 3]).fadeIn(1000).delay(4000).fadeOut(1000)
    i++
};
rotRef();
setInterval(rotRef, 6000)

// setInterval(function() { 
//     debugger        // console.log($('#slideshow > div:first')[0])
//         var $quoteBox = $('#quoteBox > section')
//         console.log($quoteBox[0])
//         $('#quoteBox > section:first')
//         .fadeOut(1000)
//         .next()
//         .fadeIn(1000)
//         .end()
//         .appendTo('#quoteBox');
// },  8000);





