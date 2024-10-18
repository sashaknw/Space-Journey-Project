

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

  // CARRUSEL
  // CARRUSEL
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
        img.style.transform = 'scale(1.2)';
        img.style.opacity = '1';
        img.style.zIndex = '2';
      } else {
        img.style.transform = 'scale(0.8)';
        img.style.opacity = '0.75';
        img.style.zIndex = '1';
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


  // FORMULARIO
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
      document.getElementById('miFormulario').submit();
    }
  }

  // Llamar a la función para cerrar la ventana emergente
  const botonCerrar = document.getElementById('botonCerrar');
  botonCerrar.addEventListener('click', function () {

  })