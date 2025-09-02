import Container from '../components/Container'
import Card from '../components/Card'

export default function Donors(){
  return (
    <main className="section">
      <Container>
        <h1 className="title-lg">Para Doadores</h1>
        <p className="lead mt-6">Cadastre excedentes com segurança e gere impacto imediato.</p>
        <div className="grid cols-3 mt-10">
          <Card><strong>Transparência</strong><p className="text-muted">Comprovantes de retirada e trilha de auditoria.</p></Card>
          <Card><strong>Logística simples</strong><p className="text-muted">ONGs próximas recebem alertas e confirmam coleta.</p></Card>
          <Card><strong>Relatórios</strong><p className="text-muted">Baixe relatórios de impacto (kg doados, CO₂ evitado).</p></Card>
        </div>
      </Container>
    </main>
  )
}
