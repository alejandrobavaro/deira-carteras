import React from "react";
import { Routes, Route } from "react-router-dom"; 
import "../assets/scss/_03-Componentes/_MainContent.scss";
import PersonalizarCartera from "./PersonalizarCartera"; 

function MainContent() {
  return (
    <main className="mainContent">
  
        <PersonalizarCartera />
      
    </main>
  );
}

export default MainContent;
