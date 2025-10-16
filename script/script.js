// Menu Button Effect
menuBtn = document.querySelector(".mobile-menu")
closeBtn = document.querySelector(".close-menu")
navBar = document.querySelector(".nav-bar")

menuBtn.addEventListener("click", () => {
    navBar.classList.add("show-hide")
})
closeBtn.addEventListener("click", () => {
    navBar.classList.remove("show-hide")
})




// Sliding Effect
slide1 = document.querySelector(".slide1")
slide2 = document.querySelector(".slide2")
const slideArr = [slide1, slide2]

let i = 0
let lastScrollTop = 0
let scrollDirection = 0
window.addEventListener("scroll", () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(currentScrollTop < lastScrollTop) {
        if (i > 0) {
            scrollDirection = "up"
            slideArr[i].classList.add("hide-slide")
            i = i-1
            slideArr[i].classList.remove("hide-slide")
            console.log("slide up", slideArr[i])
        }
    }
    else {
        scrollDirection = "down"
        if(i < slideArr.length-1) {
            slideArr[i].classList.add("hide-slide")
            i = i+1
            slideArr[i].classList.remove("hide-slide")
            console.log("slide down", slideArr[i])
        }
    }
    lastScrollTop = currentScrollTop
})




// Slide3 Animations
// (1) statistic animation
statistic = document.querySelector(".slide3 .statistic p")
let arr = ["31,529","31,530",
"31,531","31,532","31,533","31,534","31,535","31,536","31,537",
"31,538","31,539","31,540","31,541","31,542","31,543","31,544"]
let j = 0
function myLoop() {
    setTimeout(() => {
        statistic.innerText = arr[j]
        j++
        if(j < arr.length) {
            myLoop();
        }
        
        // (2) background animation
        wheat = document.querySelector(".slide3 .wheat")
        if(j == arr.length) {
            wheat.style.animation = "circle-change 1s alternate 2"                
        }
    }, 100)
    wheat.style.animation = "none"                
}

slide3Main = document.querySelector(".slide3 main")
let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("slide3 is in viewport")
            // apply myLoop when [slide3Main] in viewport
            myLoop();
        }
        else {
            j = 0
        }
    })
}, {})
observer.observe(slide3Main)




// Form toggle effect
toggle = document.querySelector(".slide4 .toggle")
dot = document.querySelector(".slide4 .dot")
subLeft = document.querySelector(".slide4 .subscription h5:nth-of-type(1)")
subRight = document.querySelector(".slide4 .subscription h5:nth-of-type(2)")
c = 0
toggle.addEventListener("click", () => {
    dot.classList.toggle("move-dot")
    if(c==0) {
        subLeft.style.color = "grey"
        subRight.style.color = "black"
        c=1
    }
    else {
        subLeft.style.color = "black"
        subRight.style.color = "grey"
        c=0
    }
})



// card image effect
childImgAll = document.querySelectorAll(".slide5 .card img")
childInfoAll = document.querySelectorAll(".slide5 .card .info")
cardAll = document.querySelectorAll(".slide5 .card")

cardSlider = document.querySelector(".slide5 .card-slider")
sliderTransformValues = [
    "calc(-7em + 50%)",
    "calc(-7em + 50% - 1em - 14em)",
    "calc(-7em + 50% - 2em - 28em)",
    "calc(-7em + 50% - 3em - 42em)"
]


for(let i=0; i<cardAll.length; i++) {
    childImgAll[i].addEventListener("mouseenter", () => {
        childImgAll[i].style.filter = "none";
        childInfoAll[i].style.animation = "card-info 1s forwards";
        cardAll[i].style.animation = "card 1s forwards";
        cardSlider.style.transform = "translateX("+sliderTransformValues[i]+")";
    })
    childImgAll[i].addEventListener("mouseleave", () => {
        childImgAll[i].style.filter = "grayscale(100%)";
        childInfoAll[i].style.animation = "card-info-reverse 1s forwards";
        cardAll[i].style.animation = "card-reverse 1s forwards";
    })
}
