
  const carousel = document.getElementById('carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  let currentIndex = 0;

  function moveCarousel(direction) {
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % totalItems;
    } else {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }
    const offset = -currentIndex * carouselItems[3].offsetWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  // Move to the next slide
  document.getElementById('next-btn').addEventListener('click', () => {
    moveCarousel('next');
  });

  // Move to the previous slide
  document.getElementById('prev-btn').addEventListener('click', () => {
    moveCarousel('prev');
  });

  // Move to the next slide every 3 seconds
  setInterval(() => moveCarousel('next'), 3000);