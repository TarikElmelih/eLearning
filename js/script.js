const slidePoints = document.querySelectorAll('.slide-point');
const cards = document.querySelectorAll('.card-content');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // remove active class from all cards and slide points
    cards.forEach(card => {
      card.classList.remove('active-card');
    });
    slidePoints.forEach(slidePoint => {
      slidePoint.classList.remove('active-slide');
    });

    // add active class to clicked card and slide point
    card.classList.add('active-card');
    slidePoints[index].classList.add('active-slide');
  });
});

slidePoints.forEach((point, index) => {
  point.addEventListener('click', () => {
    // trigger click event on corresponding card
    cards[index].click();
  });
});
