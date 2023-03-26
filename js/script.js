// moaz
let coursesCarousel = document.querySelector(".courses .courses-wrapper .courses-carousel")
let coursesCarouselCard = document.querySelectorAll(".courses .courses-wrapper .courses-carousel .box")
let btnNext = document.querySelector(".courses .courses-wrapper .next-btn")
let btnPrev = document.querySelector(".courses .courses-wrapper .prev-btn")
let coursesCounter = 0;
let coursesCard = coursesCarouselCard.length;
let conterBox;



function setcoursesCard() {
  let elementWidth = coursesCarouselCard[0].clientWidth + 15;
  let countenarWidth = coursesCarousel.clientWidth;
  conterBox = countenarWidth / elementWidth;
  return coursesCard -= conterBox;
}
setcoursesCard()
function showAndHideButton() {
  if (coursesCounter <= 0) {
    btnPrev.style.cssText ="opacity: 0.3; cursor: not-allowed;";
  } else if (coursesCounter > 0) {
    btnPrev.style.cssText ="opacity: 1; cursor: pointer;";
  }
  if (coursesCounter >= coursesCard) {
    btnNext.style.cssText ="opacity: 0.3; cursor: not-allowed;";
  } else if (coursesCounter < coursesCard) {
    btnNext.style.cssText ="opacity: 1; cursor: pointer;";
  }

}

showAndHideButton()

btnNext.addEventListener("click", () => {
  if (coursesCounter < coursesCard) {
    coursesCounter++;
    coursesCarousel.style.transform = `translateX(${coursesCounter * (100 / conterBox)}%)`
    showAndHideButton()
    console.log(coursesCounter >= coursesCard)
    console.log(coursesCard, coursesCounter)
  }
})

btnPrev.addEventListener("click", () => {
  if (coursesCounter > 0) {
    coursesCounter--;
    coursesCarousel.style.transform = `translateX(${coursesCounter * (100 / conterBox)}%)`
    showAndHideButton()
  }
})
// end moaz 

