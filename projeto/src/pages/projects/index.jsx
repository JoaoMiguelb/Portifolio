// img
import banco from '../../img/projeto-banco.png'
import posts from '../../img/posts.png'

// CSS
import './styles.css'

const Projects = () => {
  return (
    <div className='projects'>
     <div className='box'>
     <span>
        <h3>BANCO JM</h3>
        <p>Site de banco 100% original e responsivo desenvolvido em React JS por mim.</p>
      </span>
      <a href="https://banco-jm.vercel.app" target='_blank'><img src={banco} alt="Monitor e celular com o projeto aberto" /></a>
     </div>

    <div className='box' >
    <span>
        <h3>POSTS</h3>
        <p>Rede social desenvolvida com React Js e trabalhada com API do unsplash.</p>
      </span>
      <a href="https://posts-joaomiguelb.vercel.app" target='_blank'><img src={posts} alt="Monitor e celular com o projeto aberto" /></a>
    </div>
    </div>
  )
}

export default Projects