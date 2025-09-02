import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/globals.css'
import './styles/utilities.css'

export default function Shell(){
  return (
    <div style={{minHeight:'100dvh', display:'grid', gridTemplateRows:'auto 1fr auto'}}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
