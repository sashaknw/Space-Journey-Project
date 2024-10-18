//PORTADA

console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: true,
      },
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut",
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      "<"
    );
});

//carousel
const images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
  const imageWidth = 200; // Width of the image
  const imageMargin = 20; // Margin between images
  const carouselWidth = 700; // Width of the carousel
  // intento de centrar la imagen
  const offset = -(
    currentIndex * (imageWidth + imageMargin) -
    carouselWidth / 1.5 +
    imageWidth / 1.5
  ); // centrar la img activa
  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.style.transform = "translateX(" + offset + "px)";

  //aqui asignamos clases
  for (let i = 0; i < totalImages; i++) {
    if (i === currentIndex) {
      images[i].classList.add("active");
      images[i].classList.remove("inactive");
    } else {
      images[i].classList.add("inactive");
      images[i].classList.remove("active");
    }
  }
}
function nextImage() {
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }
  updateCarousel();
}

setInterval(nextImage, 3000);
updateCarousel();
