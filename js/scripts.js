// ====================
// Carousel Functionality
// ====================
const track = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

function updateCarousel() {
  const width = items[0].getBoundingClientRect().width + 32; // includes gap
  track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

// ====================
// Form Submission Feedback
// ====================
document.addEventListener("DOMContentLoaded", function() {
    const formMessage = document.getElementById("form-message");

    if(formMessage && formMessage.dataset.message){
        // Set text and class
        formMessage.textContent = formMessage.dataset.message;
        formMessage.className = formMessage.dataset.class;
    }
});
