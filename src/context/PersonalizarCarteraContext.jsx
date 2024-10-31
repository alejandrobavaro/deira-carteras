import React, { createContext, useState, useContext } from 'react';

const PersonalizarCarteraContext = createContext();

export const PersonalizarCarteraProvider = ({ children }) => {
  const [color, setColor] = useState('#FFFFFF');
  const [textura, setTextura] = useState('');
  const [accesorios, setAccesorios] = useState([]);

  return (
    <PersonalizarCarteraContext.Provider value={{ color, setColor, textura, setTextura, accesorios, setAccesorios }}>
      {children}
    </PersonalizarCarteraContext.Provider>
  );
};

export const usePersonalizarCartera = () => useContext(PersonalizarCarteraContext);
