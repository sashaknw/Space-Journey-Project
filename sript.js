// PORTADA

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

// NAV

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
      },
    },
  });

  // Animación de la imagen
  tl.to("img", {
    scale: 2,
    z: 350,
    transformOrigin: "center center",
    ease: "power1.inOut",
  }).to(
    ".section.hero",
    {
      scale: 1.1,
      transformOrigin: "center center",
      ease: "power1.inOut",
    },
    "<"
  );
});

// VIAJE DEL INICIO A SECCIONES:
//Event listener for the reservaButton
document.getElementById('reservaButton').addEventListener('click', function() {
  const formContainer = document.getElementById('linkHome');
    formContainer.scrollIntoView({ behavior: 'smooth' });
});

// Event listener for the ServiciosButton
document.getElementById('serviciosButton').addEventListener('click', function() {
  const sectionTwo = document.getElementById('containerFigure');
    sectionTwo.scrollIntoView({ behavior: 'smooth' });
});

// Event listener for the HomeButton
document.getElementById('homeButton').addEventListener('click', function () {
  const sectionTwo = document.getElementById('sectionTwo');
  sectionTwo.scrollIntoView({ behavior: 'smooth' });
});

//MUÑECO
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
  // Accediendo al botón flotante
  const floatingButton = document.querySelector('.floating-button');

  // Crear el ScrollTrigger para la sección "sectionTwo"
  ScrollTrigger.create({
    trigger: "#sectionTwo",  // el ID de la sección objetivo
    start: "top center",    // cuando la parte superior de la sección llega al centro de la pantalla
    end: "bottom center",   // cuando la parte inferior pasa el centro de la pantalla
    onEnter: () => floatingButton.classList.add('show'), // mostrar el botón
    onLeave: () => floatingButton.classList.remove('show'), // ocultar el botón
    onEnterBack: () => floatingButton.classList.add('show'), // mostrar de nuevo al regresar
    onLeaveBack: () => floatingButton.classList.remove('show') // ocultar al ir hacia arriba
  });

  // Asegurarse de que el botón se oculte inicialmente si la página carga y la sección no está en vista
  if (!ScrollTrigger.isActive()) {
    floatingButton.classList.remove('show');
  }
});

// CARROUSEL

const carouselContainer = document.querySelector(".carousel-container");
let images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;
const totalImages = images.length;

// Clonar las imágenes para crear un efecto de carrusel continuo
const firstImage = images[0].cloneNode(true);
const lastImage = images[totalImages - 1].cloneNode(true);

// Añadir el clon de la primera imagen al final del carrusel
carouselContainer.appendChild(firstImage);

// Re-seleccionar las imágenes después de añadir el clon
images = document.querySelectorAll(".carousel-image");

function updateCarousel() {
  const imageWidth = 200; // Ajusta según el tamaño real de la imagen
  const imageMargin = 20; // Ajusta según el margen real de las imágenes
  const carouselWidth = 700; // Ajusta según el tamaño real del contenedor del carrusel

  // Calcular el desplazamiento del carrusel para centrar la imagen activa
  const offset = -(
    currentIndex * (imageWidth + imageMargin) -
    carouselWidth / 1.5 +
    imageWidth / 1.5
  );

  carouselContainer.style.transition = "transform 0.5s ease-in-out";
  carouselContainer.style.transform = "translateX(" + offset + "px)";

  // Aplicar los efectos de escala y opacidad
  images.forEach((img, index) => {
    if (index === currentIndex) {
      img.style.transform = "scale(1.1)";
      img.style.opacity = "1";
      img.style.zIndex = "2";
    } else {
      img.style.transform = "scale(0.8)";
      img.style.opacity = "0.75";
      img.style.zIndex = "1";
    }
  });
}

function nextImage() {
  currentIndex++;

  // Si llegamos al clon de la primera imagen, volvemos al principio sin transición
  if (currentIndex > totalImages) {
    carouselContainer.style.transition = "none"; // Elimina la transición
    currentIndex = 0; // Reiniciar el índice al principio
    updateCarousel(); // Actualizar inmediatamente

    // Forzamos un repaint antes de volver a activar la transición
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        carouselContainer.style.transition = "transform 0.5s ease-in-out"; // Reactivar la transición
      });
    });
  } else {
    updateCarousel();
  }
}

// Configurar el intervalo para que las imágenes se desplacen cada 3 segundos
setInterval(nextImage, 3000);

// Actualizar el carrusel al cargar la página
updateCarousel();

// ANIMACIÓN MARTE
gsap.to(".marte", {
  duration: 10, // Este es el tiempo que tarda en completarse una sola iteración de la animación, en segundos.
  ease: "sine.inOut", // Este easing hace que la velocidad de la animación aumente gradualmente al inicio y al final, siendo más suave en los puntos medios.
  yoyo: true, // Hace que la animación se invierta una vez completada, creando un efecto de vaivén.
  repeat: -1, // Configura la animación para que se repita infinitamente.
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 20, y: -80 },
      { x: -80, y: 20 },
      { x: 0, y: 0 },
    ],
    type: "cubic", // Define una curva cúbica para el movimiento, que suaviza las transiciones entre puntos.
  },
  scale: 1.4, // Escala la imagen a un 140% de su tamaño original en el punto más alto de la animación.
});

//COUNTDOWN
(function () {
  const second = 1000, // 1 second in milliseconds
    minute = second * 60, // 1 minute in milliseconds
    hour = minute * 60, // 1 hour in milliseconds
    day = hour * 24; // 1 day in milliseconds

  // Get the current date and format it to MM/DD/YYYY
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"), // Months are zero-indexed
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1, 
    dayMonth = "12/26/", 
    mission= dayMonth + yyyy;  

  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > mission) {
    mission = dayMonth + nextYear; 
  }

 
  const countDown = new Date(mission).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(), // Get current time
        distance = countDown - now; // Calculate the remaining time

      // Calculate remaining days, hours, minutes, and seconds
      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );

      // When countdown reaches zero, show birthday message
      if (distance < 0) {
        document.getElementById("headline").innerText = "Despegandooooo!";
        document.getElementById("countdown").style.display = "none"; // Hide countdown
        document.getElementById("content").style.display = "block"; // Show emojis
        clearInterval(x); // Stop the countdown
      }
    }, 1000); // Update every second
})();

//FORMULARIO
// Crear el formulario dinámicamente
function crearFormulario() {
  const formulario = document.createElement("form");
  formulario.setAttribute("id", "miFormulario");

  // // Crear el campo Nombre

  const divNombre = document.createElement("div");
  divNombre.className = "input-container";
  const iconoNombre = document.createElement("i");
  iconoNombre.className = "fas fa-user icon";
  const inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.name = "nombre";
  inputNombre.required = true; // Asignación directa del atributo required
  inputNombre.placeholder = "Puede que nos interese tu nombre";
  divNombre.appendChild(iconoNombre);
  divNombre.appendChild(inputNombre);

  // // Crear el campo Apellidos

  const divApellidos = document.createElement("div");
  divApellidos.className = "input-container";
  const iconoApellidos = document.createElement("i");
  iconoApellidos.className = "fas fa-users icon";
  const inputApellidos = document.createElement("input");
  inputApellidos.type = "text";
  inputApellidos.name = "apellidos";
  inputApellidos.required = true; // Asignación directa del atributo required
  inputApellidos.placeholder = "Tu apellido desde luego que sí";
  divApellidos.appendChild(iconoApellidos);
  divApellidos.appendChild(inputApellidos);

  // // Crear el campo Correo Electrónico

  const divCorreo = document.createElement("div");
  divCorreo.className = "input-container";
  const iconoCorreo = document.createElement("i");
  iconoCorreo.className = "fas fa-envelope icon";
  const inputCorreo = document.createElement("input");
  inputCorreo.type = "email";
  inputCorreo.name = "correo";
  inputCorreo.required = true; // Asignación directa del atributo required
  inputCorreo.placeholder = "Pon aquí tu correo electrónico";
  divCorreo.appendChild(iconoCorreo);
  divCorreo.appendChild(inputCorreo);

  // // Crear el campo Teléfono

  const divTelefono = document.createElement("div");
  divTelefono.className = "input-container";
  const iconoTelefono = document.createElement("i");
  iconoTelefono.className = "fas fa-phone icon";
  const inputTelefono = document.createElement("input");
  inputTelefono.type = "tel";
  inputTelefono.name = "telefono";
  inputTelefono.required = true; // Asignación directa del atributo required
  inputTelefono.placeholder = "Y tu teléfono para vender tus datos";
  divTelefono.appendChild(iconoTelefono);
  divTelefono.appendChild(inputTelefono);

  // // Crear el campo comentarios
  const divComentarios = document.createElement("div");
  divComentarios.className = "input-container";
  const iconoComentarios = document.createElement("i");
  iconoComentarios.className = "fas fa-comment icon";
  const labelComentarios = document.createElement("label");
  labelComentarios.textContent = "Comentarios: ";
  const inputComentarios = document.createElement("textarea");
  inputComentarios.placeholder = "Cuéntanos tu historia... Deseamos no leerte";
  divComentarios.appendChild(iconoComentarios);
  divComentarios.appendChild(inputComentarios);

  // Crear el botón de envío
  const botonEnviar = document.createElement("button");
  botonEnviar.textContent = "Despegar";
  botonEnviar.type = "submit";
  formulario.appendChild(botonEnviar);

  //INTENTO DE CREAR CLASE!!
  botonEnviar.classList.add("botoncito");
  botonEnviar.textContent = "Despegar";
  botonEnviar.setAttribute("type", "submit");

  // Añadir los elementos al formulario
  formulario.appendChild(divNombre);
  formulario.appendChild(divApellidos);
  formulario.appendChild(divCorreo);
  formulario.appendChild(divTelefono);
  formulario.appendChild(divComentarios);
  formulario.appendChild(botonEnviar);

  // Añadir el formulario al final del body
  // document.body.appendChild(formulario);
  document.getElementById("formContainer").appendChild(formulario);

  // Escuchar el evento de envío del formulario
  formulario.addEventListener("submit", function (event) {
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
  const overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
}

//Función para cerrar la ventana emergente
function cerrarVentanaEmergente(confirmado) {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";




  // Llevar al usuario al inicio de la página
  window.scrollTo(0, 0);

  if (confirmado) {
    //alert('Formulario enviado exitosamente.');
  } else {
    //alert('El envío del formulario ha sido cancelado.');
  }
}

//star wars

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Función para cerrar la ventana emergente
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Opcional: Cierra la ventana emergente si se hace clic fuera de ella
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }

}
