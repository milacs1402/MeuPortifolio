import React from 'react';
import { useState } from 'react';

function Header({ setSection }) {

    const [activeSection, setActiveSection] = useState('home');

    const handleClick = (section) => {
    setActiveSection(section);  // atualiza o estado local
    setSection(section);         // atualiza o estado do App
    };

    return(
    <header className="cabecalho">
      <div className="logo">Camila Silva</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a 
              onClick={() => handleClick('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              onClick={() => handleClick('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              Sobre Mim
            </a>
          </li>
          <li>
            <a 
              onClick={() => handleClick('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projetos
            </a>
          </li>
          <li>
            <a 
              onClick={() => handleClick('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header