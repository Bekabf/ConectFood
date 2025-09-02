import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer role="contentinfo" className="pt-12 pb-12">
      <div className="container grid cols-3">
        <div>
          <div className="title-lg" style={{color:'#fff'}}>ConectFood</div>
          <p style={{opacity:.9}}>Conectando doadores de alimentos a ONGs para reduzir o desperdício e combater a fome.</p>
        </div>
        <div>
          <strong>Navegação</strong>
          <ul style={{listStyle:'none', padding:0, margin:'12px 0', display:'grid', gap:8}}>
            <li><Link to="/doadores">Doadores</Link></li>
            <li><Link to="/ongs">ONGs</Link></li>
            <li><Link to="/como-ajudar">Como ajudar</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>
        <div>
          <strong>Legal</strong>
          <ul style={{listStyle:'none', padding:0, margin:'12px 0', display:'grid', gap:8}}>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Acessibilidade</a></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{marginTop:24, opacity:.8, fontSize:14, display:'flex', justifyContent:'space-between'}}>
        <span>© {new Date().getFullYear()} ConectFood</span>
        <span>Feito com ❤️ por Camila + ChatGPT</span>
      </div>
    </footer>
  )
}
