import { Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Exercicio from './pages/Exercicio'
import Exercicio2 from './pages/Exercicio2'

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Exercicio' element={<Exercicio />}/>
    <Route path='/Exercicio2' element={<Exercicio2/>}/>
    </Routes>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
