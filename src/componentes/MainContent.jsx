import React, { useState } from "react";
import Slider from "react-slick";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [email, setEmail] = useState("");

  const images1 = [
    "./img/03-img-cuadradas/galeria-2.jpg",
    "./img/03-img-cuadradas/galeria-3.jpg",
    "./img/03-img-cuadradas/galeria-4.jpg",
    "./img/03-img-cuadradas/galeria-5.jpg",
    "./img/03-img-cuadradas/galeria-6.jpg",
    "./img/03-img-cuadradas/galeria-7.jpg",
    "./img/03-img-cuadradas/galeria-8.jpg",
    "./img/03-img-cuadradas/galeria-9.jpg",
    "./img/03-img-cuadradas/galeria-10.jpg",
    "./img/03-img-cuadradas/galeria-11.jpg"
  ];

  const images2 = [
    "./img/03-img-cuadradas/galeria-15.jpg",
    "./img/03-img-cuadradas/galeria-16.jpg",
    "./img/03-img-cuadradas/galeria-17.jpg",
    "./img/03-img-cuadradas/galeria-18.jpg",
    "./img/03-img-cuadradas/galeria-19.jpg",
    "./img/03-img-cuadradas/galeria-20.jpg",
    "./img/03-img-cuadradas/galeria-21.jpg",
    "./img/03-img-cuadradas/galeria-22.jpg",
    "./img/03-img-cuadradas/galeria-23.jpg",
    "./img/03-img-cuadradas/galeria-24.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const handleSubscribeClick = () => {
    setShowSubscriptionForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Suscripción enviada:", email);
    setShowSubscriptionForm(false);

    // Mostrar el mensaje de confirmación
    toast.success(
      "¡Gracias! Te has suscrito a las novedades de nuestro arte y fotografía."
    );
  };

  return (
    <main className="mainContent">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="my-toast-container" // Clase para aplicar estilos personalizados
      />{" "}
      {/* Contenedor para mostrar las notificaciones de toast */}
      {/* Sección de Ofertas */}
      <section className="offersSection">
        <div className="offersGrid">
          <div className="offerItem">
            <div className="offerContent">
              <img
                src="./img/03-img-cuadradas/galeria-1.jpg"
                alt="Naturaleza en Colores"
                className="offerImage"
              />
              <div className="offerText">
                <h3 className="offerTitle">
                  ¿Te cuesta encontrar la cartera perfecta para vos?
                </h3>
                <p className="offerDescription">
                  Accedé a mi{" "}
                  <strong className="destacado1">GUIA GRATUITA</strong> y
                  descubrí las claves para elegir una cartera práctica, cómoda,
                  que te destaque, y que te dure mucho tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="textSection">
        <div className="textContainer">
          <h2 className="sectionTitle">Descubre la cartera de tus sueños</h2>
          <p className="sectionDescription">
            ¿Y si tener una cartera con todo lo que vos querés fuera posible?
            Muchas veces buscaste la cartera que necesitabas o querías, y no la
            encontraste:
          </p>
          <ul className="featuresList">
            <li>
              <strong className="highlight">Una cartera que te destaque,</strong> distinta a la que
              tiene todo el mundo pero que sea práctica y elegante.
            </li>
            <li>
              Donde entren <strong className="highlight">todas tus cosas del trabajo</strong> de
              manera ordenada (incluso la botella de agua y una notebook grande)
              y no tengas que llevar nada bajo el brazo.
            </li>
            <li>
              Que sea un <strong className="highlight">comodín</strong> y te quede bien con distintos
              outfits.
            </li>
            <li>
              Cómoda, con manijas anchas para soportar todo el peso sin que se
              claven en el hombro.
            </li>
            <li>
              Resistente y eterna, no como esas carteras supercaras que se
              rompen al poco tiempo de uso.
            </li>
          </ul>
          <p className="sectionConclusion">
            ¿Parece difícil encontrar todo eso en una única cartera?
          </p>
          <div className="highlightedText">
            <h2>
              En Deira vas a tener una cartera personalizada para vos, de cuero
              genuino.
            </h2>
          </div>
        </div>
      </section>

      {/* Sección de Banners 1*/}
      <section className="bannerSection">
  <Slider {...settings}>
    {images1.map((image, index) => (
      <div key={index} className="carouselItem">
        <img src={image} alt={`Banner ${index + 1}`} />
      </div>
    ))}
  </Slider>
</section>


      {/* Sección de Nuevos Productos */}
      <section className="newArrivalsSection">
        <div className="productsGrid">
          <div className="productItem">
            <h3 className="productTitle">Distinta</h3>
            <img
              src="./img/03-img-cuadradas/galeria-12.jpg"
              alt="Esculturas Modernas"
              className="productImage"
            />
            <p className="productDescription">
              Vas a elegir los colores de los cueros, combinar sus texturas, agregar <span className="highlight">detalles que te diferencien</span> y hagan tu cartera <span className="highlight">única</span>. No perderás tiempo mirando mil páginas y vidrieras para encontrar la cartera que estabas buscando.
            </p>
          </div>
          <div className="productItem">
            <h3 className="productTitle">Eterna</h3>
            <img
              src="./img/03-img-cuadradas/galeria-13.jpg"
              alt="Fotografías de Paisajes"
              className="productImage"
            />
            <p className="productDescription">
              Tu cartera tendrá <span className="highlight">cierres, herrajes y cueros de la mejor calidad</span>. Tu Deira durará mucho más tiempo que cualquier otra cartera. Decile adiós a las carteras supercaras que se rompen al poco tiempo de uso.
            </p>
          </div>
          <div className="productItem">
            <h3 className="productTitle">Práctica</h3>
            <img
              src="./img/03-img-cuadradas/galeria-14.jpg"
              alt="Arte Abstracto"
              className="productImage"
            />
            <p className="productDescription">
              Vas a elegir los bolsillos y divisiones para llevar todo lo que necesites en tu cartera de forma ordenada. Tu Deira será práctica. No vas a perder tiempo revolviendo la cartera buscando <span className="highlight">el celular o las llaves</span>. Nada se «perderá» dentro de tu Deira.
            </p>
          </div>
        </div>
      </section>


            {/* Sección de Banners 2*/}
            <section className="bannerSection">
  <Slider {...settings}>
    {images2.map((image, index) => (
      <div key={index} className="carouselItem">
        <img src={image} alt={`Banner ${index + 1}`} />
      </div>
    ))}
  </Slider>
</section>


      {/* Sección de Suscripción */}
      <section className="subscriptionSection">
        <img
          src="./img/03-img-cuadradas/galeria-14.jpg"
          alt=""
          className="productImage"
        />
        <hr />
        <button className="subscribeButton" onClick={handleSubscribeClick}>
          Suscribirse a Novedades
        </button>
      </section>
      {/* Formulario de Suscripción */}
      {showSubscriptionForm && (
        <div className="subscriptionFormOverlay">
          <form onSubmit={handleFormSubmit} className="subscriptionForm">
            <h2>Suscríbete a Nuestras Noticias de Arte</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
              required
            />
            <button type="submit" className="submitButton">
              Enviar
            </button>
            <button
              type="button"
              onClick={() => setShowSubscriptionForm(false)}
              className="closeButton"
            >
              Cerrar
            </button>
          </form>
        </div>
      )}
    </main>
  );
}

export default MainContent;
