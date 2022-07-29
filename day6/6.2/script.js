'use strict'

//değişkenler
const links = document.querySelectorAll('.nav-list li a')


//for...of ifadesi, yinelenebilir nesneler üzerinde yinelenen bir döngü oluşturur
for(let link of links){
    link.addEventListener('click', smoothScroll)
}

function smoothScroll(e){
    e.preventDefault();

    const href = this.getAttribute("href");
    //scrollIntoView() yöntemi, bir öğeyi tarayıcı penceresinin görünür alanına kaydırır.
    document.querySelector(href).scrollIntoView({
        block: "end",
        behavior: "smooth",
        inline: "center"
    });
}

//---sticky header---

//global window'a event ekle => scrollY. Scroll event'i başlar başlamaz tetikle => scrollY > 0
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

})

// Scroll Indicator JS
window.onscroll = () => scrollProgress();

function scrollProgress() {
  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;

  const progressBar = document.querySelector(".progress");

  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercentage + "%";

  // Newletter JS
  const newsLetter = document.querySelector(".newsletter");

  if (scrollPercentage > 80) {
    newsLetter.style.transform = "translateX(0)";
  } else {
    newsLetter.style.transform = "translateX(-100%)";
  }

  document.querySelector(".fa-times").addEventListener("click", () => {
    newsLetter.style.transform = "translateX(-100%)";
  });
}