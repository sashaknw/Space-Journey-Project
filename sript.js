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
        markers: true
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});



//NAV

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
      markers: true,
      onUpdate: (self) => {
        const nav = document.querySelector("nav");

        // Si el progreso del scroll es mayor a 0.5, muestra el nav, si no, ocúltalo
        if (self.progress > 0.5) {
          nav.classList.add("show");
        } else {
          nav.classList.remove("show");
        }
      }
    }
  });

  // Animación de la imagen
  tl.to("img", {
    scale: 2,
    z: 350,
    transformOrigin: "center center",
    ease: "power1.inOut"
  })
    .to(".section.hero", {
      scale: 1.1,
      transformOrigin: "center center",
      ease: "power1.inOut"
    }, "<");
});


//carousel
const images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
  const offset = -(currentIndex * (900 + 20) - 1000 / 2 + 900 / 2); // Center the  image
  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.style.transform = "translateX(" + offset + "px)";

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


//FORMULARIO
// Crear el formulario dinámicamente
function crearFormulario() {
  // Crear el formulario
  const formulario = document.createElement('form');
  formulario.setAttribute('id', 'miFormulario');

  // Crear el campo Nombre
  const labelNombre = document.createElement('label');
  labelNombre.textContent = 'Nombre: ';
  const inputNombre = document.createElement('input');
  inputNombre.setAttribute('type', 'text');
  inputNombre.setAttribute('name', 'nombre');
  inputNombre.setAttribute('required', 'required');

  // Crear el campo Apellidos
  const labelApellidos = document.createElement('label');
  labelApellidos.textContent = 'Apellidos: ';
  const inputApellidos = document.createElement('input');
  inputApellidos.setAttribute('type', 'text');
  inputApellidos.setAttribute('name', 'apellidos');
  inputApellidos.setAttribute('required', 'required');

  // Crear el campo Correo Electrónico
  const labelCorreo = document.createElement('label');
  labelCorreo.textContent = 'Correo electrónico: ';
  const inputCorreo = document.createElement('input');
  inputCorreo.setAttribute('type', 'email');
  inputCorreo.setAttribute('name', 'correo');
  inputCorreo.setAttribute('required', 'required');

  // Crear el campo Teléfono
  const labelTelefono = document.createElement('label');
  labelTelefono.textContent = 'Teléfono: ';
  const inputTelefono = document.createElement('input');
  inputTelefono.setAttribute('type', 'tel');
  inputTelefono.setAttribute('name', 'telefono');
  inputTelefono.setAttribute('required', 'required');

  // Crear el campo Comentarios (textarea)
  const labelComentarios = document.createElement('label');
  labelComentarios.textContent = 'Comentarios: ';
  const inputComentarios = document.createElement('textarea');
  inputComentarios.setAttribute('name', 'comentarios');


  // Crear el botón de envío
  const botonEnviar = document.createElement('button');

  //INTENTO DE CREAR CLASE!!
  botonEnviar.classList.add('botoncito');
  
  botonEnviar.textContent = 'Enviar';
  botonEnviar.setAttribute('type', 'submit');

  // Añadir los elementos al formulario
  formulario.appendChild(labelNombre);
  formulario.appendChild(inputNombre);


  formulario.appendChild(labelApellidos);
  formulario.appendChild(inputApellidos);


  formulario.appendChild(labelCorreo);
  formulario.appendChild(inputCorreo);


  formulario.appendChild(labelTelefono);
  formulario.appendChild(inputTelefono);


  formulario.appendChild(labelComentarios);
  formulario.appendChild(inputComentarios);


  formulario.appendChild(botonEnviar);

  // Añadir el formulario al final del body
  document.body.appendChild(formulario);

  // Escuchar el evento de envío del formulario
  formulario.addEventListener('submit', function (event) {
    // Evitar el envío del formulario por defecto
    event.preventDefault();

    // Mostrar la ventana emergente personalizada
    mostrarVentanaEmergente();
  });
}

// Llamar a la función para crear el formulario
crearFormulario();

// Función para mostrar la ventana emergente personalizada
function mostrarVentanaEmergente() {
  // Mostrar el overlay y la ventana emergente
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';
}

// Función para cerrar la ventana emergente
function cerrarVentanaEmergente(confirmado) {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';

  if (confirmado) {
    // alert('Formulario enviado exitosamente.');
    document.getElementById('miFormulario').submit();
  } else {
    //   alert('El envío del formulario ha sido cancelado.');
  }
}
