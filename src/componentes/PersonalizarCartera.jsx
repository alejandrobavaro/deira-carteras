import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePersonalizarCartera } from '../context/PersonalizarCarteraContext';
import "../assets/scss/_03-Componentes/_PersonalizarCartera.scss";

const PersonalizarCartera = () => {
  const { productoId } = useParams();
  const { color, setColor } = usePersonalizarCartera();
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const [seleccion, setSeleccion] = useState({
    solapa: null,
    cuerpo: null,
    fuelle: null,
    correa: null,
    portamanijas: null,
    herrajes: null,
  });

  useEffect(() => {
    fetch("/personalizarcartera.json")
      .then((response) => response.json())
      .then((data) => {
        const producto = data.componentes;
        setProductoSeleccionado(producto);
        setColor(producto.solapa.opciones[0]?.nombre || '#FFFFFF');
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, [setColor]);

  if (!productoSeleccionado) {
    return <div>Cargando producto...</div>;
  }

  const handleSeleccionChange = (tipo, opcion) => {
    setSeleccion((prev) => ({
      ...prev,
      [tipo]: opcion,
    }));
  };

  const handleSaveDesign = () => {
    const designOptions = `
      Solapa: ${seleccion.solapa || 'N/A'}
      Cuerpo: ${seleccion.cuerpo || 'N/A'}
      Fuelle: ${seleccion.fuelle || 'N/A'}
      Correa: ${seleccion.correa || 'N/A'}
      Portamanijas: ${seleccion.portamanijas || 'N/A'}
      Herrajes: ${seleccion.herrajes || 'N/A'}
    `.trim();

    const blob = new Blob([designOptions], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'diseño_cartera.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Genera el mensaje de WhatsApp usando el contenido del diseño
  const whatsappMessage = `
      ¡Mira mi diseño de cartera! Aquí están los detalles:
      Solapa: ${seleccion.solapa || 'N/A'}
      Cuerpo: ${seleccion.cuerpo || 'N/A'}
      Fuelle: ${seleccion.fuelle || 'N/A'}
      Correa: ${seleccion.correa || 'N/A'}
      Portamanijas: ${seleccion.portamanijas || 'N/A'}
      Herrajes: ${seleccion.herrajes || 'N/A'}
    `.trim();

  // Codifica el mensaje para la URL
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=2235168797&text=${encodedMessage}`;

  return (
    <div className="personaliza-producto-container">

      <h1>Personaliza tu Cartera</h1>
      
      <div className="producto-grid-wrapper">
        <div className="producto-grid">

          <div className="producto-preview-fixed-container">
            <div className="producto-preview-container fixed-preview">
              <div className="producto-preview">
                {Object.keys(seleccion).map((tipo) => (
                  seleccion[tipo] && (
                    <img
                      key={tipo}
                      src={productoSeleccionado[tipo].opciones.find(op => op.nombre === seleccion[tipo])?.imagen}
                      alt={tipo}
                      className="capa"
                    />
                  )
                ))}
              </div>
            </div>
          </div>

          <div className="personalizacion-capas">
            {Object.keys(productoSeleccionado).map((tipo) => (
              <div key={tipo}>
                <h5 className="tituloopciones">{productoSeleccionado[tipo].titulo}</h5>
                <div className="options-container">
                  {productoSeleccionado[tipo].opciones.map((opcion) => (
                    <div key={opcion.nombre} className="option-wrapper">
                      <button 
                        className={`option-button ${seleccion[tipo] === opcion.nombre ? 'selected' : ''}`}
                        onClick={() => handleSeleccionChange(tipo, opcion.nombre)}
                      >
                        <img src={opcion.imagen} alt={opcion.nombre} className="option-img" />
                      </button>
                      <span className="option-name">{opcion.nombre}</span>
                    </div>
                  ))} 
                </div>
              </div>

              
            ))}
            <div className="personalizar-acciones">
              <button className="guardar-btn" onClick={handleSaveDesign}>Guardar Diseño</button>
              <a
                href={whatsappUrl}
                className="guardar-btn" // Usar el mismo estilo que el botón
                rel="noopener noreferrer"
                target="_blank"
              >
                Compartir Diseño
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizarCartera;
