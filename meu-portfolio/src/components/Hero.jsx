import foto from '../assets/fotoHero.png';
import SocialIncons from './SocialIcons';

function Hero(){
    return(
        <section className="hero">
            <div className="hero-text">
                <h1>Prazer,<br />Camila</h1>
                <p>Desenvolvedora Front-End</p>
                <SocialIncons />
            </div>

            <div className="hero-img">
                <img src={foto} alt="Foto de Camila" />
            </div>

        </section>
    )
}

export default Hero