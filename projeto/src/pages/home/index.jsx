// img
import foto from '../../img/minha-foto.png'

// Icons
import { FaFileDownload, FaWhatsapp  } from "react-icons/fa";
import { MdEmail } from "react-icons/md"


// CSS
import './styles.css'

const Home = () => {

  return (
    <div className='home'>
      <img src={foto} href="Foto de João Miguel" />
      <div className='home-text'>
        <h1>Desenvolvedor Front-end</h1>
        <p>Utilizando a biblioteca React para desenvolver e aplicando em sites 100% responsivos com a orientação Mobile First.</p>
        <div className="home-contact">
          <a href="">Currículo <FaFileDownload/> </a>
          <a href=""> Contato <FaWhatsapp/> </a>
        </div>
      </div>
    </div>
  )
}

export default Home