let currentSlide = 1;
const totalSlides = 4;

function nextSlide() {
    // Hide current slide
    const current = document.querySelector(`.slide[data-slide="${currentSlide}"]`);
    current.classList.remove('active');
    current.classList.add('prev');

    // Move to next slide
    currentSlide++;
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }

    // Show next slide
    const next = document.querySelector(`.slide[data-slide="${currentSlide}"]`);
    next.classList.remove('prev');
    next.classList.add('active');

    // Reset other slides
    setTimeout(() => {
        document.querySelectorAll('.slide').forEach(slide => {
            if (!slide.classList.contains('active')) {
                slide.classList.remove('prev');
            }
        });
    }, 500);
}

function skipToSignup() {
    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active', 'prev');
    });

    // Show signup slide
    currentSlide = 4;
    const signupSlide = document.querySelector(`.slide[data-slide="${currentSlide}"]`);
    signupSlide.classList.add('active');
}

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Welcome! Your account has been created successfully.');

    // Reset form
    this.reset();

    // Go back to first slide
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    currentSlide = 1;
    document.querySelector(`.slide[data-slide="${currentSlide}"]`).classList.add('active');
});

// Add click handlers for skip buttons
document.querySelectorAll('.skip-text').forEach(skip => {
    skip.addEventListener('click', skipToSignup);
});

// Auto slide functionality
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (currentSlide < 3) { // Only auto-advance through first 3 slides
            nextSlide();
        }
    }, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start auto slide
startAutoSlide();

// Stop auto slide when user interacts
document.addEventListener('click', () => {
    stopAutoSlide();
});

// Touch/swipe support
let startX = null;
let startY = null;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    if (startX === null || startY === null) return;

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const diffX = startX - endX;
    const diffY = startY - endY;

    // Only respond to horizontal swipes
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
            nextSlide();
            stopAutoSlide();
        }
    }

    startX = null;
    startY = null;
});