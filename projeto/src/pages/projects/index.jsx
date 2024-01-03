// img
import banco from '../../img/projeto-banco.png'

// CSS
import './styles.css'

const Projects = () => {
  return (
    <div className='projects'>
      <span>
        <h3>BANCO JM</h3>
        <p>Site de banco 100% original e responsivo desenvolvido em React JS por mim.</p>
      </span>
      <a href="https://banco-jm.vercel.app" target='_blank'><img src={banco} alt="Monitor e celular com o projeto aberto" /></a>
    </div>
  )
}

export default Projects