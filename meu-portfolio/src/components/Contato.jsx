import React from "react";
import pin from "/assets/pin.png"
import email from "/assets/email.png"
import linkedin from "/assets/linkedin.png"
import wpp from "/assets/wpp.png"

function Contato () {
    return(
        <section className="contato-section">
            <div className="contato">

                <div className="contato-frase">
                    <h1>Vamos <br />construir <br />algo <br />juntos?</h1>
                </div>

                <div className="contato-info">

                    <p>Estou em busca de oportunidades como estagiária ou desenvolvedora júnior. Se você gostou do meu trabalho, vamos conversar!</p>

                    <div className="line">
                        <span ></span>
                        <hr/>
                        <span></span>
                    </div>

                    <div className="contato-item">
                        <img src={pin} alt="localização-img" />
                        <span>Bauru - SP</span>
                    </div>

                    <div className="contato-item">
                        <img src={email} alt="email-icon" />
                        <a href="mailto:Camilacs1402@gmail.com">Camilacs1402@gmail.com</a>
                    </div>

                    <div className="contato-item">
                        <img src={linkedin} alt="LinkedIn-icon" />
                        <a href="https://www.linkedin.com/in/camila-silva-089167273/" target="_blank" rel="noopener noreferrer">Camila Silva</a>
                    </div>

                    <div className="contato-item">
                        <img src={wpp} alt="WhatsApp-icon" />
                        <a href="https://wa.me/5511943821087" target="_blank" rel="noopener noreferrer">(11) 94382-1087</a>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contato;