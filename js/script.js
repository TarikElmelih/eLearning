// moaz
// variables for element slider and width & number
let coursesCarousel = document.querySelector(".courses .courses-wrapper .courses-carousel")
let coursesCarouselCard = document.querySelectorAll(".courses .courses-wrapper .courses-carousel .box")
let btnNext = document.querySelector(".courses .courses-wrapper .next-btn")
let btnPrev = document.querySelector(".courses .courses-wrapper .prev-btn")
let coursesCounter = 0;
let coursesCard = coursesCarouselCard.length;
let conterBox;
let elementWidth;


// set some variables for slider
function setcoursesCard() {
  elementWidth = coursesCarouselCard[0].clientWidth + 15;
  let countenarWidth = coursesCarousel.clientWidth;
  conterBox = countenarWidth / elementWidth;
  return coursesCard -= conterBox;
}
setcoursesCard()

// show and hide next or brev button
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

// Move slider right or left
function moveSlider(movedBoxes, status) {
  if (!movedBoxes) {
    if (status == "next" && coursesCounter < coursesCard) {
      coursesCounter++;
    } else if (status == "prev" && coursesCounter > 0) {
      coursesCounter--;
    }
  } else if(movedBoxes) {
    if (status == "next") {
      let numberMove = movedBoxes;
      for (let i = 1;i <= numberMove; i++) {
        if (coursesCounter < coursesCard) {
          coursesCounter++
        }
      }
    } else if (status == "prev") {
      let numberMove = -movedBoxes;
      for (let i = 1;i <= numberMove; i++) {
        if (coursesCounter > 0) {
          coursesCounter--
        }
      }
    } 
  }
  coursesCarousel.style.transform = `translateX(${coursesCounter * (100 / conterBox)}%)`;
  showAndHideButton();
}

btnNext.addEventListener("click", () => {
  moveSlider(undefined,"next")
})

btnPrev.addEventListener("click", () => {
  moveSlider(undefined,"prev")
})

// variables for  slider moved
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

// set function
// mose and touch start
function mouseDown(e, status) {
  e.preventDefault();
  isDragging = true;
  if (status == "mobile") {
    startPosition = e.touches[0].clientX;
  } else if(status == "desk") {
    startPosition = e.clientX;
  }
  coursesCarousel.classList.add('grabbing');
}

// mose and touch move
function mouseMove(e, status)  {
  if (isDragging) {
    if (status == "mobile") {
      let currentPosition = e.touches[0].clientX;
      currentTranslate = prevTranslate - (startPosition - e.changedTouches[0].clientX);
    } else if(status == "desk") {
      let currentPosition = e.clientX;
      currentTranslate = prevTranslate - (startPosition - currentPosition);
    }
  }
}

// mose and touch end
let mouseUp = () => {
  isDragging = false;
  coursesCarousel.classList.remove('grabbing');
  let movedBoxes = Math.round(currentTranslate / elementWidth);
    if (movedBoxes <= 0) {
    moveSlider(movedBoxes,"prev")
  } else if (movedBoxes >= 0) {
    moveSlider(movedBoxes,"next")
  }
}

// mose and touch end
let mouseLeave = () => {
  isDragging = false;
  coursesCarousel.classList.remove('grabbing');
}

// add event
coursesCarousel.addEventListener("mousedown", e => {
  mouseDown(e, "desk")
});
coursesCarousel.addEventListener("touchstart",  e => {
  mouseDown(e, "mobile")
});

coursesCarousel.addEventListener('mousemove', e => {
  mouseMove(e, "desk")
});
coursesCarousel.addEventListener('touchmove', e => {
  mouseMove(e, "mobile")
});

coursesCarousel.addEventListener('mouseup', mouseUp);
coursesCarousel.addEventListener('mouseleave', mouseLeave);
coursesCarousel.addEventListener('touchend', mouseUp);

// move slider in click kebord ArrowRight or ArrowLeft
document.addEventListener("keyup", e => {
  if (scrollY >= document.querySelector(".courses").offsetTop - 550) {
    if (e.code == "ArrowRight") {
      moveSlider(undefined,"prev")
    } else if (e.code == "ArrowLeft") {
      moveSlider(undefined,"next")
    }
  } 
  console.log(` ${e.code}`);
});
// end moaz 

