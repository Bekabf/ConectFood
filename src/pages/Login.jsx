import Container from '../components/Container'
import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { isValidEmail } from '../utils/validators'
import { login } from '../utils/auth'

export default function Login(){
  const [form, setForm] = useState({ email:'', senha:'' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard'

  function onChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function onSubmit(e){
    e.preventDefault()
    const errs = {}
    if(!isValidEmail(form.email)) errs.email = 'E-mail inválido.'
    if(!form.senha || form.senha.length < 6) errs.senha = 'Use ao menos 6 caracteres.'
    setErrors(errs)
    if(Object.keys(errs).length) return
    login({email: form.email})
    navigate(from, { replace: true })
  }

  return (
    <main className="section">
      <Container>
        <div className="card" style={{maxWidth:520, margin:'0 auto'}}>
          <h1 className="title-lg">Entrar</h1>
          <p className="lead mt-6">Acesse seu painel com seu e-mail e senha.</p>
          <form onSubmit={onSubmit} style={{marginTop:16}}>
            <label>E-mail
              <input type="email" name="email" value={form.email} onChange={onChange} autoComplete="email" required style={{width:'100%', marginTop:6, padding:12, borderRadius:10, border:'1px solid #e5e7eb'}}/>
              {errors.email && <div style={{color:'#b91c1c', marginTop:6, fontSize:13}}>{errors.email}</div>}
            </label>
            <label style={{marginTop:12}}>Senha
              <input type="password" name="senha" value={form.senha} onChange={onChange} autoComplete="current-password" required style={{width:'100%', marginTop:6, padding:12, borderRadius:10, border:'1px solid #e5e7eb'}}/>
              {errors.senha && <div style={{color:'#b91c1c', marginTop:6, fontSize:13}}>{errors.senha}</div>}
            </label>
            <button className="btn" type="submit" style={{marginTop:16, width:'100%'}}>Entrar</button>
          </form>
          <div className="text-muted mt-6" style={{fontSize:14}}>Ainda não tem conta? <Link to="/cadastro" className="badge">Cadastre-se</Link></div>
        </div>
      </Container>
    </main>
  )
}
