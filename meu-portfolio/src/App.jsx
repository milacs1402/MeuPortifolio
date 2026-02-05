import { useState } from 'react' 
import Header from './components/Header'
import Hero from './components/Hero'
import SobreMim from './components/SobreMim'
import Projetos from './components/Projetos'
import Contato from './components/Contato'

function App() {

  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <Header setSection={setActiveSection} />

      <main className='main-content' key={activeSection}>
        {(() => {
          switch(activeSection) {
            case 'home':
              return <Hero />;
            case 'about':
              return <SobreMim images={['/assets/carrosselPessoal/foto6.jpeg','/assets/carrosselPessoal/foto1.png', '/assets/carrosselPessoal/foto2.jpeg','/assets/carrosselPessoal/foto3.jpeg','/assets/carrosselPessoal/foto4.jpeg','/assets/carrosselPessoal/foto5.jpeg']}/>;
            case 'projects':
              return <Projetos />; 
            case 'contact':
              return <Contato />; 
            default:
              return <Hero />;
          }
        })()}
      </main>
    </div>
  )
}

export default App