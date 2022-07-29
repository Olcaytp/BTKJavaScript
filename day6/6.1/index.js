'use strict'

//değişkenler

const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () =>{
    activeSlide++

    if(activeSlide > slides.length -1){
        activeSlide = 0;
    }
    console.log("aktif slide: " + activeSlide);

    setBgToBody();
    setActiveSlide();
})

leftBtn.addEventListener('click', () =>{
    activeSlide--

    if(activeSlide < 0){
        activeSlide = slides.length -1;
    }
    console.log("aktif slide: " + activeSlide);
    setBgToBody()
    setActiveSlide()
})

setBgToBody();

function setBgToBody (){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach(slide => {
        slide.classList.remove('active')
    });

    slides[activeSlide].classList.add('active');
    console.log( activeSlide + ".slide situation: " + slides[activeSlide].classList);
}