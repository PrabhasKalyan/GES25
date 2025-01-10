// gsap.registerPlugin(ScrollTrigger);


// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     centeredSlides: true,
//     loop: true,
// });

// function applyHighlight() {
//     const slides = document.querySelectorAll('.swiper-slide');
//     slides.forEach((slide, index) => {
//     if (index === swiper.activeIndex) {
//         gsap.to(slide, { scale: 1.2, opacity: 1, filter: 'none', duration: 0.2 });
//         slide.classList.add('highlight');
//         slide.classList.remove('blur');
//     } else {
//         gsap.to(slide, { scale: 0.8, opacity: 0.5, filter: 'blur(4px)', duration: 0.2 });
//         slide.classList.remove('highlight');
//         slide.classList.add('blur');
//     }
//     });
// }

// let lastScroll = 0;
// window.addEventListener('wheel', (event) => {
//     const delta = event.deltaY;
//     if (delta > 0 && Date.now() - lastScroll > 1000) {
//     swiper.slideNext();
//     lastScroll = Date.now();
//     } else if (delta < 0 && Date.now() - lastScroll > 1000) {
//     swiper.slidePrev();
//     lastScroll = Date.now();
//     }
//     applyHighlight();
// });

// // Initial highlight
// applyHighlight();



// document.querySelector('.card-body').addEventListener('mousemove', function (e) {
//     const container = e.currentTarget;
//     const { left, top, width, height } = container.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 25;
//     const y = (e.clientY - top - height / 2) / 25;
//     container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
// });

// document.querySelector('.card-body').addEventListener('mouseenter', function () {
// this.style.transition = 'none';
// });

// document.querySelector('.card-body').addEventListener('mouseleave', function () {
// this.style.transform = 'rotateY(0deg) rotateX(0deg)';
// this.style.transition = 'transform 0.2s ease-in-out';
// });