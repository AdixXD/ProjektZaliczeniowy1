function changeContentBasedOnActiveSlide(){

    var slide1 = document.getElementById("first").className;
    var one = document.getElementById("first1");
    var slide2 = document.getElementById("second").className;
    var two = document.getElementById("second2");
    var slide3 = document.getElementById("third").className;
    var three = document.getElementById("third3");
    var slide4 = document.getElementById("fourth").className;
    var four = document.getElementById("fourth4");
    var slide5 = document.getElementById("fifth").className;
    var five = document.getElementById("fifth5");
    var slide6 = document.getElementById("sixth").className;
    var six = document.getElementById("sixth6");
    var slide7 = document.getElementById("seventh").className;
    var seven = document.getElementById("seventh7");
    var slide8 = document.getElementById("eighth").className;
    var eight = document.getElementById("eighth8");


    if(slide1.localeCompare("carousel-item active") === 0)
        one.style.background = "#8B008B";
        else
        one.style.background = "#0069d9";
    if(slide2.localeCompare("carousel-item active") === 0)
        two.style.background = "#8B008B";
        else
        two.style.background = "#0069d9";
    if(slide3.localeCompare("carousel-item active") === 0)
        three.style.background = "#8B008B";
        else
        three.style.background = "#0069d9";
    if(slide4.localeCompare("carousel-item active") === 0)
        four.style.background = "#8B008B";
        else
        four.style.background = "#0069d9";
     if(slide5.localeCompare("carousel-item active") === 0)
        five.style.background = "#8B008B";
        else
        five.style.background = "#0069d9";
     if(slide6.localeCompare("carousel-item active") === 0)
        six.style.background = "#8B008B";
        else
        six.style.background = "#0069d9";
     if(slide7.localeCompare("carousel-item active") === 0)
        seven.style.background = "#8B008B";
        else
        seven.style.background = "#0069d9";
     if(slide8.localeCompare("carousel-item active") === 0)
        eight.style.background = "#8B008B";
        else
        eight.style.background = "#0069d9";
        
    changeContentBasedOnActiveSlide();
    }
    
    const time = setInterval(function() {
    changeContentBasedOnActiveSlide();
}, 400);