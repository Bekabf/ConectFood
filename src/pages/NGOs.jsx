import Container from '../components/Container'
import Card from '../components/Card'

export default function NGOs(){
  return (
    <main className="section">
      <Container>
        <h1 className="title-lg">Para ONGs</h1>
        <p className="lead mt-6">Encontre doações perto de você e otimize a distribuição.</p>
        <div className="grid cols-3 mt-10">
          <Card><strong>Geolocalização</strong><p className="text-muted">Ofertas priorizadas por proximidade e validade.</p></Card>
          <Card><strong>Alertas</strong><p className="text-muted">Receba notificações e confirme retiradas em 1 clique.</p></Card>
          <Card><strong>Histórico</strong><p className="text-muted">Acompanhe o histórico de coletas e doadores parceiros.</p></Card>
        </div>
      </Container>
    </main>
  )
}
