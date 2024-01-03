// Icons
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

// CSS
import './styles.css'

const Skills = () => {
  return (
    <div className='skills'>
      <h1>Minhas Skills</h1>
      <div>
        <span><FaHtml5/> HTML5</span>
        <span><FaCss3Alt/> CSS3</span>
        <span><FaReact/> React</span>
        <span><RiJavascriptFill/> javaScript</span>
      </div>
    </div>
  )
}

export default Skills