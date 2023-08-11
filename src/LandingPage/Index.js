import React, { useState } from "react";

import "./styles.css";

export default function Index() {
  // logica
  const lightModeClass = "light-mode";
  const darkModeClass = "dark-mode";
  const lightModeText = "Light Mode";
  const darkModeText= "Dark Mode";

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  // fim logica

  return (
    <div className={isDarkMode ? darkModeClass : lightModeClass}>
      <header className="limit-container">
        <img
          className="logo"
          src="assets/barbearia-logo.png"
          alt="Barbearia Logo"
        />
        <button
          onClick={toggleDarkMode}
          className={isDarkMode ? darkModeClass : lightModeClass}
        >
          <img
            className="icon"
            src={isDarkMode ? "./assets/sun.png" : "assets/moon.png"}
          />
          {isDarkMode ? lightModeText : darkModeText}
        </button>
      </header>
      {/* BANNER */}
      <section className="banner"></section>
      {/* fim banner */}
      <section className="text-container limit-container">
        <h1>Bem-vindo a Barber Shop</h1>
        <p>
          Nossa barbearia sempre oferece profissionais de qualidade e estamos
          prontos para lidar com suas maiores expectativas.
        </p>
        <p>
          Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
          equipe premiada que demonstrou o talento de mestres barbeiros em
          vários concursos de estilo. Deixe nosso barbeiro ser seu estilista
          pessoal e você nunca ficará desapontado.
        </p>
        <span className="barber-name">S. Kelly</span>
      </section>
    </div>
  );
}
