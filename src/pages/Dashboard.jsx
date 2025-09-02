import Container from '../components/Container'
import Card from '../components/Card'
import { getUser } from '../utils/auth'
import { BarChart, Sparkline } from '../components/Charts'

export default function Dashboard(){
  const user = getUser()
  return (
    <main className="section">
      <Container>
        <h1 className="title-lg">Olá, {user?.name || 'usuário'} 👋</h1>
        <p className="lead mt-6">Bem-vindo ao seu painel. Acompanhe os dados gerais sobre doações e ONGs.</p>

        <div className="grid cols-4 mt-10">
          <Card><strong>Doadores ativos</strong><div style={{fontSize:32, marginTop:8}}>128</div></Card>
          <Card><strong>ONGs cadastradas</strong><div style={{fontSize:32, marginTop:8}}>64</div></Card>
          <Card><strong>Alimentos doados (kg)</strong><div style={{fontSize:32, marginTop:8}}>8.540</div></Card>
          <Card><strong>Pessoas atendidas</strong><div style={{fontSize:32, marginTop:8}}>3.200</div></Card>
        </div>

        <div className="grid cols-2 mt-10">
          <Card>
            <strong>Doações por semana</strong>
            <BarChart data={[120,150,90,180,200,160,210]} height={140} />
          </Card>
          <Card>
            <strong>Crescimento de ONGs</strong>
            <Sparkline data={[5,10,15,18,22,28,32,36,40,44]} height={60} />
          </Card>
        </div>

        <div className="grid cols-2 mt-10">
          <Card>
            <strong>Distribuição de alimentos</strong>
            <ul style={{listStyle:'none', padding:0, marginTop:12, display:'grid', gap:8}}>
              <li>Hortifruti — 45%</li>
              <li>Grãos e secos — 25%</li>
              <li>Laticínios — 15%</li>
              <li>Prontos e embalados — 10%</li>
              <li>Outros — 5%</li>
            </ul>
          </Card>
          <Card>
            <strong>Destinos principais</strong>
            <ul style={{listStyle:'none', padding:0, marginTop:12, display:'grid', gap:8}}>
              <li>Comunidades urbanas — 40%</li>
              <li>Assentamentos rurais — 25%</li>
              <li>Creches e escolas — 20%</li>
              <li>Instituições de acolhimento — 15%</li>
            </ul>
          </Card>
        </div>

        <div className="card mt-10">
          <h3>Atividades recentes</h3>
          <ul style={{listStyle:'none', padding:0, marginTop:12, display:'grid', gap:10}}>
            <li className="card" style={{padding:'12px'}}><strong>Nova ONG cadastrada</strong><div className="text-muted">ONG Esperança Viva se juntou à rede.</div></li>
            <li className="card" style={{padding:'12px'}}><strong>Doação concluída</strong><div className="text-muted">Mercado BomPreço doou 80kg de frutas.</div></li>
            <li className="card" style={{padding:'12px'}}><strong>Relatório mensal</strong><div className="text-muted">Disponível para download o relatório de agosto.</div></li>
          </ul>
        </div>
      </Container>
    </main>
  )
}
