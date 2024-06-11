


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("close");
}
gsap.registerPlugin(ScrollTrigger);

var tl1 = gsap.timeline();
tl1.from(".logo", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

var tl2 = gsap.timeline();
tl2.from(".nav-links li", {  // Note the space to correctly target child list items
  y: -30,
  opacity: 0,
  duration: 0.9,
  delay: 1,
  stagger: 0.3,
});

var tl3 = gsap.timeline();
tl3.from("#profile", {
  x: -30,
  opacity: 0,
  duration: 1,
  delay: 0.55,
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top center",  // When the top of the trigger hits the center of the viewport
    end: "bottom top",    // When the bottom of the trigger hits the top of the viewport
    scrub: true,          // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  }
});

tl4.from("#about", {
  x: -30,
  opacity: 0,
  duration: 1,
  delay:0.4,
    // Remove delay to start immediately when in view
});
var t15=gsap.timeline({
  scrollTrigger:{
    trigger:"#experience",
    
    scrub:true,
  }
})
t15.from("#experience",{
y:-40,
opacity:0,
duration:1,
delay:0.7,
})
// script.js

// script.js

window.addEventListener('load', function() {
  // Hide the loading screen with a swipe-out effect
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.transform = 'translateX(-100%)';

  // Show the main content with a fade-in effect after the transition
  setTimeout(function() {
    loadingScreen.style.display = '';
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
    mainContent.style.opacity = 1;
    document.body.style.overflow = '1'; // Enable scrolling
  }, 1000); // Match this duration with the CSS transition duration
});

