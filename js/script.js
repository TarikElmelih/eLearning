
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
      console.log(movedBoxes);
      coursesCounter--;
    }
  } else if(movedBoxes) {
    if (status == "next") {
      let numberMove = movedBoxes;
      for (let i = 1;i <= numberMove; i++) {
        if (coursesCounter < coursesCard) {
          console.log(i)
          coursesCounter++
        }
      }
    } else if (status == "prev") {
      let numberMove = -movedBoxes;
      for (let i = 1;i <= numberMove; i++) {
        if (coursesCounter > 0) {
          console.log(i)
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
  // console.log("totsh", e)
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
// end moaz 

// =======
window.onload = () => {
    document.onwheel = customScrollFunction;

    function customScrollFunction(event){

let deltaY = event.deltaY;
let deltaYSign = Math.sign(deltaY);

if(deltaYSign==-1){
    document.getElementById("scrl1").scrollBy({
        top: 0,
        left: -169,
        behavior: 'auto'
});

}else{ 
    document.getElementById("scrl1").scrollBy({
        top: 0,
        left: 169,
        behavior: 'auto'
    });
}

}
}

