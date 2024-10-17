# Space-Journey-Project
HEADER_
"Nav" - Logo y menú
Inicio
Servicios
Reserva.

BODY
1. Inicio - Presentación empresa
    1.1 Imagen portada con título (ref: https://codetheworld.io/wp-content/uploads/2024/05/main-scaled.webp)
    Fondo será la imagen en la que se hace zoom. Sobre ella estará el Nav.
    

    1.2 Carrousel imágenes sobre nosotros *(carrousel con For - imágenes instalaciones de la nave o espaciales)*

2. Servicios - Presentación de misiones
    2.1 3 modales sobre coste e info detallada *(carrousel simple)*
        Info:
        Misión 1: Órbita Baja / Coste: $Capa de Ozono
        Misión 2: Vuelo Espacial Suborbital / Coste: $Basura espacial
        Misión 3: Misión a Marte / Coste: $Adiós familia

   https://images.squarespace-cdn.com/content/v1/5d0188496041c9000164317f/1625870195136-TLMVEA0HS9X50S2GNQ3R/Sub+orbital.jpg

    2.2 Botón flotante  (debe acompañarnos hasta el final)   

    *Anexo!*

4. Reserva
    3.1 Formulario .js
        Nombre
        Apellido
        Misión deseada
        Teléfono contacto
        Email
        Comentario
        Botón envio / Animación confeti o explosión *(Opcional)*
        Botón reset

5. Footer   
    4.1 Logo Space, Wise y GobCan / Info comercial / Disclaimer   
    4.2 RR.SS.
    4.3 FAQ's  


*Animación Parallax "Piedras flotantes"
https://static.wixstatic.com/media/c22c23_85eaa21ecb144dc7998eb2128a65f145~mv2.png/v1/fill/w_176,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%203%20copy%202.png

https://static.wixstatic.com/media/c22c23_d4a3e103764b464499a90fda1dd71676~mv2.webp/v1/fill/w_335,h_551,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/new%20astro.webp


COLORES
Fondo: #F2F0F2 (gris clariiisimo)
Color de cuerpo de texto: #242424 (si fondo blanco)
Acento: #A8BBBF

TIPOGRAFÍA
https://www.dafont.com/boowie.font
Cuerpo de texto: https://fonts.google.com/selection

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=swipe_up" />


IMAGEN REFERENCIA
https://codetheworld.io/wp-content/uploads/2024/05/main-scaled.webp


CORREOS PARA DRIVE
obritoperez@gmail.com
falconjulia.personal@gmail.com
ancorgabriel@gmail.com



TEXTOS

H1
"¿Cansado de tus vacaciones terrícolas en aburridas playas y montañas?” 


p
¡Ven al espacio con SpaceJourney! ¡Lánzate al vacío interestelar, donde el WiFi es inexistente y el oxígeno es un lujo! Si crees que el precio es alto, piensa en el ROI a largo plazo: ¡una selfie en Marte será invaluable en tu Instagram!"

¡Apúntate a la próxima misión!



SECCIÓN SERVICIOS
H1 - Viajes Espaciales: Porque el Futuro es Hoy, o quizás Mañana

En SpaceJourney, no solo lanzamos cohetes. ¡Lanzamos sueños! Y a veces, también a turistas desprevenidos. Con nuestras increíbles opciones de vuelos espaciales, te preguntarás: '¿Realmente necesitaba pagar 100 millones de dólares para flotar por 10 minutos?'"


Orbita Baja:
Un viaje alrededor de la Tierra, ideal para quienes ya están aburridos de los hoteles de lujo en la Tierra. ¡Atención! 99% de probabilidad de ver un satélite de tu compañía telefónica... aunque no mejorará tu señal.

Vuelo Espacial Suborbital: 
"Experimenta lo más parecido a una montaña rusa en el espacio, con una duración comparable a la espera en la cola de un Starbucks."

Misión a Marte (¡solo para valientes!): 
"¿Te atreves a pasar 6 meses en una lata de metal para llegar a un planeta desértico? No prometemos comodidades, pero sí muchas emociones y polvo rojo."


FORMULARIO
"Reserva tu Viaje: Porque estar en la Tierra ya es demasiado mainstream"


FOOTER
"© 2024 SpaceJourney. 
Elon Musk probablemente tiene un plan para llevarnos a todos al espacio eventualmente. Mientras tanto, disfruta de las repeticiones de los lanzamientos de cohetes. Ah, y síguenos en Twitter para las últimas locuras.
![image](https://github.com/user-attachments/assets/d4975728-dc83-4b91-943e-50172589db2e)





CAMBIO DE CABECERA:

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-image: url(Portada/SpaceJourney-interior.png);
    background-repeat: no-repeat;
    z-index: 1;
    
  }
  
.wrapper {
  position: relative;
  width: 100%;
  z-index: 1;
}

.header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3; 
  background: rgba(0, 0, 0, 0.5);
}

  .wrapper,
  .content {
    position: relative;
    width: 100%;
    z-index: 1;
  }
  
  .content {
    overflow-x: hidden;
  }
  
  .content .section {
    width: 100%;
    height: 100vh;
  }
  
  /* .content .section.hero {
    background-image: url(Portada/SpaceJourney-interior.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;

  } */
  
  .image-container {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    perspective: 500px;
    overflow: hidden;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }



