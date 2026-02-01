import React from 'react';
import iconInsta from '/assets/logotipo-do-instagram.png'
import iconGithub from '/assets/github.png'
import iconLinkedin from '/assets/linkedin.png'

function SocialLinks() {
  return (
    <div className="social-container">
      <a href="https://www.instagram.com/cami_kaze.4/" target="_blank" rel="noreferrer">
        <img src={iconInsta} alt="Instagram" />
      </a>
      <a href="https://github.com/milacs1402" target="_blank" rel="noreferrer">
        <img src={iconGithub} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/camila-silva-089167273/" target="_blank" rel="noreferrer">
        <img src={iconLinkedin} alt="Linkedin" />
      </a>
    </div>
  )
}

export default SocialLinks