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
const form = document.getElementById('contactForm');

if(form){
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent default submit
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent successfully!');
                form.reset();
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        })
        .catch(() => {
            alert('Oops! There was a problem submitting your form.');
        });
    });
}
