import Container from '../components/Container'
import Card from '../components/Card'

export default function HowToHelp(){
  return (
    <main className="section">
      <Container>
        <h1 className="title-lg">Como posso ajudar?</h1>
        <p className="lead mt-6">Além de doar alimentos, você pode voluntariar, compartilhar a plataforma e apoiar financeiramente ONGs parceiras.</p>
        <div className="grid cols-3 mt-10">
          <Card><strong>Voluntarie-se</strong><p className="text-muted">Apoie coletas, triagem e organização de cestas.</p></Card>
          <Card><strong>Divulgue</strong><p className="text-muted">Ajude a levar a ConectFood a mais doadores.</p></Card>
          <Card><strong>Doação financeira</strong><p className="text-muted">Apoie ONGs confiáveis para ampliar o alcance.</p></Card>
        </div>
      </Container>
    </main>
  )
}
