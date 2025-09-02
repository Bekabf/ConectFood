import Container from '../../components/Container'
import Card from '../../components/Card'
import { BarChart, Sparkline } from '../../components/Charts'

const items = [
  {id:1, item:'Pães', quantidade:'50 un', validade:'2 dias', cidade:'Recife'},
  {id:2, item:'Legumes', quantidade:'12 kg', validade:'1 dia', cidade:'Olinda'},
  {id:3, item:'Arroz cozido', quantidade:'8 kg', validade:'Hoje', cidade:'Jaboatão'},
]

export default function DonorDashboard(){
  return (
    <main className="section">
      <Container>
        <h1 className="title-lg">Painel do Doador</h1>
        <div className="grid cols-3 mt-10">
          <Card><strong>Doações ativas</strong><div style={{fontSize:36, marginTop:8}}>3</div></Card>
          <Card><strong>Kg doados (mês)</strong><div style={{fontSize:36, marginTop:8}}>126</div></Card>
          <Card><strong>CO₂ evitado</strong><div style={{fontSize:36, marginTop:8}}>220 kg</div></Card>
        </div>

        <div className="card mt-10">
          <h3>Minhas doações</h3>
          <table style={{width:'100%', marginTop:12, borderCollapse:'collapse'}}>
            <thead><tr><th align="left">Item</th><th align="left">Quantidade</th><th align="left">Validade</th><th align="left">Cidade</th></tr></thead>
            <tbody>
              {items.map(r=> (
                <tr key={r.id} style={{borderTop:'1px solid #eee'}}>
                  <td style={{padding:'10px 0'}}>{r.item}</td>
                  <td>{r.quantidade}</td>
                  <td>{r.validade}</td>
                  <td>{r.cidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
