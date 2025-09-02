import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUser, logout } from '../utils/auth'
import { isAuthenticated } from '../utils/auth'

export default function Navbar(){

    const navigate = useNavigate()
  const [user, setUser] = useState(null)
  useEffect(()=>{ setUser(getUser()) }, [])
  function handleLogout(){ logout(); setUser(null); navigate('/') }
    return (
    <header className="sticky" role="banner" aria-label="Topo do site">
      <nav className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 0'}}>
        <Link to="/" aria-label="Ir para a home" className="badge" style={{background:'#fff'}}>ConectFood</Link>
        <div style={{display:'flex', gap:16, alignItems:'center'}}>
          <NavLink to="/doadores" className={({isActive})=> isActive ? 'badge' : undefined}>Doadores</NavLink>
          <NavLink to="/ongs" className={({isActive})=> isActive ? 'badge' : undefined}>ONGs</NavLink>
          <NavLink to="/como-ajudar" className={({isActive})=> isActive ? 'badge' : undefined}>Como ajudar</NavLink>
          <NavLink to="/contato" className={({isActive})=> isActive ? 'badge' : undefined}>Contato</NavLink>
          <NavLink to="/cadastro" className="btn">Cadastrar</NavLink>
        </div>
        {isAuthenticated() ? (
    <NavLink to="/dashboard" className={({isActive})=> isActive ? 'btn' : 'btn outline'}>Meu painel</NavLink>
  ) : (
    <NavLink to="/login" className="btn">Entrar</NavLink>
  )}
</nav>
    </header>
  )
}
