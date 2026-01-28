function SobreMim(){

    return(
        <section className='sobre-mim'>

            <div className='sobre-text'>
                <h1>Sobre Mim</h1>

                <p>
                    Loren ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac  sollicitudin ligula. Donec commodo libero a quam venenatis varius.  Vestibulum ante ipsum primis iximus risus, vitae vulputate tortor iaculis vitae.
                </p>

                <p>
                    Loren ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac  sollicitudin ligula. Donec commodo libero a quam venenatis varius.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis eleifend orci vitae eleifend.
                </p>
            </div>

            <div className='sobre-cards'>

                <div className="card-educa">
                    <h3>Educação</h3>
                    <ul>
                        <li>Bacharelado em Ciência da Computação (Unesp Bauru) 2023 - 2027</li>
                        <li>Web Development (Cisco Networking Academy) 2026</li>
                    </ul>
                </div>

                <div className="card-tec">
                    <h3>Tecnologias</h3>
                    <ul>
                        <li>Front-end: HTML5, CSS3, JavaScript, React.</li>
                        <li>Design: Figma, Canva, Photoshop/GIMP.</li>
                        <li>Ferramentas: Git, GitHub, VS Code.</li>
                    </ul>
                </div>

                <div className="card-idioma">
                    <h3>Idiomas</h3>
                    <ul>
                        <li>Português: Fluente</li>
                        <li>Inglês: Avançado</li>
                        <li>Espanhol: Iniciante</li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default SobreMim