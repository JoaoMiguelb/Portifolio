import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index.jsx'
import Header from './components/header/index.jsx'
import About from './pages/about/index.jsx'
import Projects from './pages/projects/index.jsx'
import Skills from './pages/skills/index.jsx'
import Footer from './components/footer/index.jsx'


function App() {
  
  return (
   <BrowserRouter>
   <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects/>} />
      </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
