window.addEventListener('DOMContentLoaded', () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0xf2f2f2,
    color2: 0xf2f2f2,
    backgroundAlpha:0.0,
    quantity: 3.00,
    cohesion: 5.00,
    separation: 100.00,
    wingSpan: 40.00,
    alignment: 77.00,
  })
  setTimeout(() => {
    const main = document.querySelector('main');
    main.style.opacity = 1;
    main.style.filter = 'blur(0px)'
  }, 1000)
})
