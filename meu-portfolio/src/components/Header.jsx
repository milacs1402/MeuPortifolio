import React from 'react';

function Header({ setSection }) {
    return(
        <header className="cabecalho"> 
            <div className="logo">Camila Silva</div>
                <nav>
                    <ul className="nav-links">
                        <li><a onClick={() => setSection('home')} >Home</a></li>
                        <li><a onClick={() => setSection('about')} >Sobre Mim</a></li>
                        <li><a onClick={() => setSection('projects')} >Projetos</a></li>
                        <li><a onClick={() => setSection('contact')} >Contato</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header