// so mostra os promps
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
