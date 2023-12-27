// img
import foto from '../../img/minha-foto.png'

// CSS
import './styles.css'

const Home = () => {

    return (
      <div className='home'>
        <img src={foto } href="Foto de João Miguel" />
        <div className='home-text'>
            <h1>Desenvolvedor Front-end</h1>
            <p>Utilizando a biblioteca React para desenvolver e aplicando em sites 100% responsivos com a orientação Mobile First.</p>
        </div>
      </div>
    )
}

export default Home