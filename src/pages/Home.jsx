import Container from '../components/Container'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <main>
      <section className="hero section">
        <Container>
          <div className="grid cols-2" style={{alignItems:'center'}}>
            <div>
              <span className="badge">Impacto Social</span>
              <h1 className="title-xl mt-6">Conecte doadores e ONGs. Reduza o desperdício. Alimente quem precisa.</h1>
              <p className="lead mt-6">
                A ConectFood facilita a doação de alimentos, conectando restaurantes, mercados e produtores a organizações confiáveis.
              </p>
              <div className="mt-10" style={{display:'flex', gap:12, flexWrap:'wrap'}}>
                <Link to="/cadastro" className="btn">Quero doar</Link>
                <Link to="/ongs" className="btn outline">Sou ONG</Link>
              </div>
              <div className="mt-6 text-muted" style={{fontSize:14}}>
                <span className="kbd">Seguro</span> • <span className="kbd">Gratuito</span> • <span className="kbd">Transparente</span>
              </div>
            </div>
            <div>
              <Card>
                <img src="/img/ONGs.jpg" alt="Conexão entre doadores e ONGs" style={{borderRadius:12}}/>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2 className="title-lg">Como funciona</h2>
          <div className="grid cols-3 mt-6">
            <Card><strong>1) Cadastro</strong><p className="text-muted">Doadores e ONGs se cadastram e validam informações.</p></Card>
            <Card><strong>2) Oferta</strong><p className="text-muted">O doador lista alimentos disponíveis com data e local.</p></Card>
            <Card><strong>3) Retirada</strong><p className="text-muted">A ONG mais próxima agenda a retirada de forma rápida.</p></Card>
          </div>
        </Container>
      </section>

      <section className="section" style={{background:'#fff'}}>
        <Container>
          <div className="grid cols-3">
            <Card><img src="/img/alimentos.webp" alt="" style={{borderRadius:12}}/></Card>
            <Card><img src="/img/voluntario.jpeg" alt="" style={{borderRadius:12}}/></Card>
            <Card><img src="/img/ONG1.png" alt="" style={{borderRadius:12, background:'#f9fafb'}}/></Card>
          </div>
        </Container>
      </section>
    </main>
  )
}
