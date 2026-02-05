import React from 'react';
import {useState} from 'react';
import setaE from '/assets/setaE.png'
import setaD from '/assets/setaD.png'

function SobreMim({images}){

    // estado pra controlar qual imagem tá sendo mostrada (começa na 0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const imageArray = images
    
    // função pra ir pra imagem anterior
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1 /* cria o efeito circular do carrossel */
        );
    };
    
    // função pra ir pra próxima imagem
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
        );
    };

    return(
        <section className='sobre-mim'>

            <div className='sobre-text'>
                <h1>Sobre Mim</h1>

                <p>
                    Olá! Sou a Camila, desenvolvedora front-end apaixonada por criar experiências digitais que unem funcionalidade e beleza. Para mim, programação e design andam sempre juntos — acredito que um bom código também precisa ter uma interface envolvente e convidativa.
                </p>

                <p>
                    Além do mundo tech, sou uma pessoa apaixonada por muitas outras áreas: adoro desenhar, explorar a confeitaria e me envolver em atividades extracurriculares que desafiem meu olhar. Tenho uma conexão especial com o mundo animal e um lado voluntário muito presente. Já atuei no marketing do CVU (Centro de Voluntariado Universitário), unindo design e propósito social, além de participar de visitas a idosos e crianças. Seja criando interfaces ou dedicando tempo a causas sociais e animais, busco sempre levar empatia e arte para tudo o que faço.
                </p>

            </div>

            <div className="sobre-mim-right">
  
                <div className="carrossel-pessoal">
                    
                    <img 
                        src={imageArray[currentImageIndex]} 
                        alt={`imagens Sobre Mim`}
                        className="carousel-image"
                    />
                
                    
                    <> {/* fragment - serve pra agrupar os elementos sem ter que criar uma div */}
                        <button 
                        className="carousel-button-prev"
                        onClick={prevImage}
                        >
                            <img src={setaE} alt="seta prev" />
                        </button>
                    
                        <button 
                            className="carousel-button-next"
                            onClick={nextImage}
                        >
                            <img src={setaD} alt="seta next" />
                        </button>
                        
                        
                        <div className="carousel-indicators">
                            {imageArray.map((_, index) => (
                                <button
                                    key={index}
                                    className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </> {/* fecho do fragment */}

                    
                </div>
                
                <div className="info-boxes">
                    
                    <div className="info-box idiomas">
                    <h3>Idiomas</h3>
                    <ul>
                        <li><strong>Português:</strong> Fluente</li>
                        <li><strong>Inglês:</strong> Fluente</li>
                        <li><strong>Espanhol:</strong> Iniciante</li>
                    </ul>
                    </div>
                    
                    <div className="info-box educacao">
                    <h3>Educação</h3>
                    <ul>
                        <li> 2019 - 2021 <br />Ensino Médio (Agostiniano Mendel/Texas Tech)</li>
                        <br />
                        <li>2023 - 2027<br />Bacharelado em Ciência da Computação (Unesp Bauru)</li>
                        <br />
                        <li>2026<br />Web Development (Cisco Networking Academy) </li>
                    </ul>
                    </div>

                    <div className="info-box skills">
                    <h3>Skills</h3>
                    <ul>
                        <li> <strong>Front-end:</strong> HTML5, CSS3, JavaScript, React.</li>
                        <li><strong>Design:</strong> Figma, Canva, Photoshop/GIMP.</li>
                        <li><strong>Ferramentas:</strong> Git, GitHub, VS Code.</li>
                    </ul>
                    </div>
                    
                </div>
                
            </div>

        </section>
    )
}

export default SobreMim