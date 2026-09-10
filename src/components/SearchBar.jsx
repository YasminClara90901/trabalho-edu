// Componente isolado responsável por capturar o texto de busca.
// Recebe o valor atual e a função de atualização via props 
function SearchBar({ termoBusca, aoDigitar }) {
  return (
    <input
      type="text"
      placeholder="Buscar por título..."
      value={termoBusca}
      onChange={(e) => aoDigitar(e.target.value)}
    />
  )
}

export default SearchBar
