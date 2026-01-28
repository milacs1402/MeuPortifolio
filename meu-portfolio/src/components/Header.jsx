function Header() {
    return(
        <header className="cabecalho"> 
            <div className="logo">Camila Silva</div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home" className="link-ativo">Home</a></li>
                        <li><a href="#sobremim" >Sobre Mim</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header