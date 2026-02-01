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
              return <SobreMim />;
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