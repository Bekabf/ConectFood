import Container from '../../components/Container'
import { useState } from 'react'
import { isValidEmail, isValidPhoneBR } from '../../utils/validators'

function validateCNPJ(cnpj){
  cnpj = cnpj.replace(/\D/g, '');
  if(cnpj.length !== 14) return false;
  if(/^([0-9])\1+$/.test(cnpj)) return false;
  let t = cnpj.length - 2, d = cnpj.substring(t), d1 = parseInt(d.charAt(0)), d2 = parseInt(d.charAt(1)), calc = x => {
    let n = 0; for(let i = 0; i < x; i++) n += cnpj.charAt(i) * ((x+1) - i);
    let r = (n * 10) % 11; return r == 10 ? 0 : r;
  };
  return calc(t) == d1 && calc(t+1) == d2;
}

function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone){
  return /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(phone);
}

export default function RegisterForm(){
  const [form, setForm] = useState({unidade:"", cnpj:"", responsavel:"", email:""})
  const [done, setDone] = useState(false)
        const [errors, setErrors] = useState({})

  function onChange(e){ setForm(prev=>({...prev, [e.target.name]: e.target.value})) }
  function onSubmit(e){
      e.preventDefault();
      if(form.cnpj && !validateCNPJ(form.cnpj)){ alert('CNPJ inválido'); return; }
      if(form.email && !validateEmail(form.email)){ alert('E-mail inválido'); return; }
      if(form.celular && !validatePhone(form.celular)){ alert('Celular inválido'); return; }
      setDone(true) }

  if(done){ return <main className="section"><Container><h1 className="title-lg">Cadastro enviado!</h1><p className="lead mt-6">Validaremos seus dados e retornaremos por e-mail.</p></Container></main> }

  return (
    <main className="section">
      <Container>
        <h1 className="title-lg">Cadastro — CPA</h1>
        <form className="card mt-10" onSubmit={onSubmit}>

<label style={{marginTop:12}}>Unidade<input name="unidade" value={form.unidade} onChange={onChange} required style={{width:'100%', marginTop:6, padding:12, borderRadius:10, border:'1px solid #e5e7eb'}}/></label>


<label style={{marginTop:12}}>CNPJ<input name="cnpj" value={form.cnpj} onChange={onChange} required style={{width:'100%', marginTop:6, padding:12, borderRadius:10, border:'1px solid #e5e7eb'}}/>
              {errors.cnpj && <div style={{color:'#b91c1c', marginTop:6, fontSize:13}}>{errors.cnpj}</div>}
            </label>


<label style={{marginTop:12}}>Responsável<input name="responsavel" value={form.responsavel} onChange={onChange} required style={{width:'100%', marginTop:6, padding:12, borderRadius:10, border:'1px solid #e5e7eb'}}/></label>


<label style={{marginTop:12}}>E-mail<input name="email" value={form.email} onChange={onChange} required style={{width:'100%', marginTop:6, padding:12, borderRadius:10, border:'1px solid #e5e7eb'}}/></label>

          <div style={{marginTop:16}}>
            <button className="btn" type="submit">Enviar cadastro</button>
          </div>
        </form>
      </Container>
    </main>
  )
}