// Componente de Card: apenas exibe os dados recebidos via props.
// Não guarda estado próprio, só renderiza o que o pai (App) manda.
function ItemCard({ item }) {
  return (
    <div className="card">
      <h3>{item.titulo}</h3>
      <p>Categoria: {item.categoria}</p>
      <p>Responsável: {item.responsavel}</p>
      <p>Status: {item.status}</p>
    </div>
  )
}

export default ItemCard
