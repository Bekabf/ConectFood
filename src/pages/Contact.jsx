import Container from '../components/Container'
import { isValidEmail, isValidPhoneBR } from '../utils/validators'
import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({nome:'', email:'', celular:'', mensagem:''})
  const [sent, setSent] = useState(false)
    const [errors, setErrors] = useState({})

  function onChange(e){
    setForm(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  function onSubmit(e){
    e.preventDefault()
    if(!form.nome || !form.email || !form.mensagem){ alert('Preencha todos os campos.'); return }
    // Simulação de envio
    setTimeout(()=> setSent(true), 200)
  }

  if(sent){
    return (
      <main className="section"><Container><h1 className="title-lg">Obrigado pelo contato!</h1><p className="lead mt-6">Retornaremos em breve.</p></Container></main>
    )
  }

  return (
    <main className="section">
      <Container>
        <h1 className="title-lg">Fale conosco</h1>
        <form className="card mt-10" onSubmit={onSubmit} aria-label="Formulário de contato">
          <label>Nome<input name="nome" value={form.nome} onChange={onChange} required style={{width:'100%', marginTop:6, padding:12, borderRadius:10, border:'1px solid #e5e7eb'}}/>{errors.nome && <div style={{color:'#b91c1c', marginTop:6, fontSize:13}}>{errors.nome}</div>}</label>
          <label style={{marginTop:12}}>E-mail<input type="email" name="email" value={form.email} onChange={onChange} required style={{width:'100%', marginTop:6, padding:12, borderRadius:10, border:'1px solid #e5e7eb'}}/>{errors.email && <div style={{color:'#b91c1c', marginTop:6, fontSize:13}}>{errors.email}</div>}</label>
          <label style={{marginTop:12}}>Celular<input name="celular" value={form.celular} onChange={onChange} placeholder="(99) 99999-9999" style={{width:'100%', marginTop:6, padding:12, borderRadius:10, border:'1px solid #e5e7eb'}}/>{errors.celular && <div style={{color:'#b91c1c', marginTop:6, fontSize:13}}>{errors.celular}</div>}</label>
          <label style={{marginTop:12}}>Mensagem<textarea name="mensagem" value={form.mensagem} onChange={onChange} required rows="5" style={{width:'100%', marginTop:6, padding:12, borderRadius:10, border:'1px solid #e5e7eb'}}/>{errors.mensagem && <div style={{color:'#b91c1c', marginTop:6, fontSize:13}}>{errors.mensagem}</div>}</label>
          <div style={{marginTop:16, display:'flex', gap:12}}>
            <button className="btn" type="submit">Enviar</button>
            <button className="btn outline" type="reset" onClick={()=> setForm({nome:'', email:'', mensagem:''})}>Limpar</button>
          </div>
        </form>
      </Container>
    </main>
  )
}
