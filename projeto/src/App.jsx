import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index.jsx'
import Header from './components/header/index.jsx'

function App() {
  
  return (
   <BrowserRouter>
   <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
