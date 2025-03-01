// Select elements
const flipCardInner = document.querySelector('.flip-card-inner');
const flipButtonFront = document.querySelector('.flip-card-front .flip-button');
const flipButtonBack = document.querySelector('.flip-card-back .flip-button');

// GSAP timeline for the flip animation
const flipTimeline = gsap.timeline({ paused: true });

// Add the flip animation to the timeline
flipTimeline.to(flipCardInner, {
  rotationY: 180,
  duration: 1,
  ease: "power2.inOut",
});

// Add event listeners to buttons
flipButtonFront.addEventListener('click', () => {
  flipTimeline.play();
});

flipButtonBack.addEventListener('click', () => {
  flipTimeline.reverse();
});

// Add a subtle hover effect to the card
gsap.to('.flip-card', {
  y: -10,
  duration: 0.5,
  ease: "power2.out",
  paused: true,
});

flipCardInner.addEventListener('mouseenter', () => {
  gsap.to('.flip-card', { y: -10, duration: 0.5, ease: "power2.out" });
});

flipCardInner.addEventListener('mouseleave', () => {
  gsap.to('.flip-card', { y: 0, duration: 0.5, ease: "power2.out" });
});