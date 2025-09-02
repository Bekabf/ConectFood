import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import Card from '../../components/Card'

export default function Register(){
  return (
    <main className="section">
      <Container>
        <h1 className="title-lg">Criar conta</h1>
        <p className="lead mt-6">Escolha seu tipo de conta para continuar:</p>
        <div className="grid cols-3 mt-10">
          <Card><h3>Sou Doador</h3><p className="text-muted">Restaurantes, mercados, produtores…</p><Link className="btn mt-6" to="/cadastro/doador">Cadastrar doador</Link></Card>
          <Card><h3>Sou ONG</h3><p className="text-muted">Associações, bancos de alimentos…</p><Link className="btn mt-6" to="/cadastro/ong">Cadastrar ONG</Link></Card>
          <Card><h3>Sou CPA</h3><p className="text-muted">Centros de produção de alimentos.</p><Link className="btn mt-6" to="/cadastro/cpa">Cadastrar CPA</Link></Card>
        </div>
      </Container>
    </main>
  )
}
