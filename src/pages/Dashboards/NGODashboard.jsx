import Container from '../../components/Container'
import Card from '../../components/Card'
import { BarChart, Sparkline } from '../../components/Charts'

const ofertas = [
  {id:1, item:'Frutas sortidas', quantidade:'15 kg', validade:'Hoje', distancia:'2.1 km'},
  {id:2, item:'Leite UHT', quantidade:'30 L', validade:'3 dias', distancia:'5 km'},
  {id:3, item:'Verduras', quantidade:'8 kg', validade:'2 dias', distancia:'3.4 km'},
]

export default function NGODashboard(){
  return (
    <main className="section">
      <Container>
        <h1 className="title-lg">Painel da ONG</h1>
        <div className="grid cols-3 mt-10">
          <Card><strong>Ofertas próximas</strong><div style={{fontSize:36, marginTop:8}}>7</div></Card>
          <Card><strong>Coletas agendadas</strong><div style={{fontSize:36, marginTop:8}}>2</div></Card>
          <Card><strong>Pessoas atendidas</strong><div style={{fontSize:36, marginTop:8}}>480</div></Card>
        </div>

        <div className="card mt-10">
          <h3>Ofertas disponíveis</h3>
          <ul style={{listStyle:'none', padding:0, display:'grid', gap:12, marginTop:12}}>
            {ofertas.map(o => (
              <li key={o.id} className="card" style={{padding:'14px'}}>
                <strong>{o.item}</strong>
                <div className="text-muted" style={{marginTop:4}}>{o.quantidade} • {o.validade} • {o.distancia} de distância</div>
                <div style={{marginTop:8, display:'flex', gap:10}}>
                  <button className="btn">Agendar coleta</button>
                  <button className="btn outline">Ver detalhes</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      <div className="grid cols-2 mt-10">
  <Card>
    <strong>Doações por dia (últimos 10 dias)</strong>
    <BarChart data={[4,8,6,9,7,10,5,11,9,12]} height={140} />
  </Card>
  <Card>
    <strong>Tendência de pessoas atendidas</strong>
    <Sparkline data={[120,140,130,150,160,180,175,190,205,220]} height={60} />
  </Card>
</div>

        </Container>
    </main>
  )
}
