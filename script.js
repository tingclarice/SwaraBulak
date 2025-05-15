let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + totalSlides) % totalSlides; // wrap around
    slides[currentIndex].classList.add('active');
}

// Optional: Auto-slide
// setInterval(() => showSlide(currentIndex + 1), 3000);
