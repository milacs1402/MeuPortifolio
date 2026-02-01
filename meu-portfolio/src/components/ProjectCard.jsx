import React, {useState} from 'react';
import roundIconGit from '../assets/imgs/RoundGitIcon.png'
import setaE from '../assets/imgs/setaE.png'
import setaD from '../assets/imgs/setaD.png'

function ProjectCard({title, description, image, images, githubLink, techs}) {
    
    // estado pra controlar qual imagem tá sendo mostrada (começa na 0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // se não tiver array de images, usa só a image única
    const imageArray = images && images.length > 0 ? images : [image];
    
    // função pra ir pra imagem anterior
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
        );
    };
    
    // função pra ir pra próxima imagem
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    return(
        <div className="project-card">
        
            <div className="card-img">

                <div className="carousel-container">

                    {imageArray[currentImageIndex].endsWith('.mp4') ? (
                        // Se for vídeo (.mp4)
                        <video 
                            src={imageArray[currentImageIndex]}
                            className="carousel-image"
                            controls
                            autoPlay
                            muted
                            loop
                        />
                    ) : (
                        // Se for imagem
                        <img 
                            src={imageArray[currentImageIndex]} 
                            alt={`${title} - imagem ${currentImageIndex + 1}`}
                            className="carousel-image"
                        />
                    )}
                    

                    {imageArray.length > 1 && ( /* só mostra as setinhas se tiver mais de uma img */
                        <>
                            

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
                        </>
                    )}
                    
                </div>
            </div>
            
            <div className="card-content">  
                <h2>{title}</h2>  
                <p>{description}</p>
                
                {techs && techs.length > 0 && (
                <div className="project-techs">
                    {techs.map((tech, index) => (
                    <span key={index} className="tech-badge">
                        {tech}
                    </span>
                    ))}
                </div>
                )}
                
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <span><img src={roundIconGit} alt="ícone GitHub" /></span> Visualizar projeto
                </a>
                
            </div>
        </div>
    );
}

export default ProjectCard;