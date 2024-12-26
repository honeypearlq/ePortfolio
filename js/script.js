const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cards = Array.from(track.children);

let currentIndex = 0;

// Function to update the carousel's position
function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 16; // Adjust this value if CSS changes
    const offset = -(currentIndex * (cardWidth + gap));
    track.style.transform = `translateX(${offset}px)`;
}

// Event listener for "previous" button
prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    updateCarousel();
});

// Event listener for "next" button
nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
});

// Ensure proper alignment on resize
window.addEventListener('resize', updateCarousel);
