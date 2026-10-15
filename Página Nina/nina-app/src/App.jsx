import './App.css'

function App() {

  const cards = [
    {
      id: 1,
      title: 'Sesiones personalizadas Nina',
      description: 'Te guío y te ayudo en tu caso específico',
      image: '/calendar-icon.png',
      link: 'https://www.canva.com/design/DAHPlA-Of-I/gBSN30bN0LaYfqtTkjEWtg/view?utm_content=DAHPlA-Of-I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h67992b9264'
    },
    {
      id: 2,
      title: 'Guía completa para manifestar una persona específica (PE)',
      description: 'Guías para manifestar PE, abundancia, etc...',
      image: '/book-icon.png',
      link: 'https://www.canva.com/design/DAHCKQxLv8s/TPQrPXa4pWIQ81M8bfSapA/view?utm_content=DAHCKQxLv8s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf9a31c1f0b'
    },
    {
      id: 3,
      title: 'Guía completa para manifestar abundancia y dinero',
      description: 'Meditaciones y subliminales gratuitos',
      link: 'https://www.canva.com/design/DAHNXAgcQXc/eP5YiiO9qpg3f7zTzNEGVg/view?utm_content=DAHNXAgcQXc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7965c6280c',
      image: '/cash-icon.png'
    },
    {
      id: 4,
      title: 'CANAL DE YOUTUBE - MEDITACIONES GRATUITAS',
      description: 'Subliminales o meditaciones guiadas',
      link: 'https://www.youtube.com/@poder_cuantico333',
      image: '/button-leading-icon.png'
    },
    {
      id: 5,
      title: 'AUDIO SUBLIMINAL PERSONALIZADO',
      description: 'Subliminales personalizados para tu caso específico',
      image: '/star-icon.png',
      link: 'https://www.canva.com/design/DAHH0azvwyE/YYC3hrq20lcB_n3uOsR_nQ/view?utm_content=DAHH0azvwyE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h87db93933f'
    },
    {
      id:6,
      title: 'Únete al club GRATUITO de manifestación',
      description: 'Únete a nuestro grupo de manifestación y comparte tus experiencias',
      link: 'https://www.whatsapp.com/channel/0029VbCTmlX0wajuZxS7d23r',
      image: '/group-icon.png'
    },
    {
      id:7,
      title: 'Instagram - Nina Poder Cuantico (@poder_cuantico333)',
      description: 'Sígueme en Instagram para más contenido de manifestación',
      link: 'https://www.instagram.com/poder_cuantico333/',
      image: '/instagram-purple-icon.png'
    },
    {
      id:8,
      title: "Manifiesta tu persona específica (PE) ahora mismo | Meditación Guiada | Nina Poder Cuántico",
      description: 'Meditación guiada para manifestar a tu persona específica (PE)',
      link: 'https://www.youtube.com/watch?v=NTWH23fTeqo&t=1s',
      image: '/person-icon.png'
    }
  ]

  return (

    <div className="container">
      <section className="intro">
        <img id="profile-image" src="/nina-cuadrado.jpeg" alt="Vale" width="150" height="150"/>
        <h1 id="title">Nina</h1>
        <h4 id="username">@poder_cuantico333</h4>
        <p id="description">¡Llevo más de 10 años estudiando y aplicando la manifestación y quiero ayudarte!</p>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <article key={card.id} className="card" onClick={() => window.open(card.link, '_blank')}>
            <img src={card.image} alt={card.title}/>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </section>
      <section className="social-media">
        <img className="social-icon" src="/social-mail.png" alt="logo_instagram" onClick={() => window.open('https://wa.me/message/YH7NX2TJYJXHB1', '_blank')}/>
        <img className="social-icon" src="/social-instagram.png" alt="logo_instagram" onClick={() => window.open('https://www.instagram.com/poder_cuantico333/', '_blank')}/>
        <img className="social-icon" src="/social-youtube.png" alt="logo_youtube" onClick={() => window.open('https://www.youtube.com/@poder_cuantico333', '_blank')}/>
      </section>
      <footer className="footer">
        <p>CRAFTED WITH </p>
        <img id="heart-icon" src="/heart.png" alt="heart_icon"/>
        <strong> ARALLA</strong>
      </footer>
    </div>
  )
}

export default App
