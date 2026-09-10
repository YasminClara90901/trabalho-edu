import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import ItemCard from './components/ItemCard.jsx'

//lista dos livros
const itensIniciais = [
  { id: 1, titulo: 'Dom Casmurro', categoria: 'Romance', responsavel: 'Machado de Assis', status: 'Disponível' },
  { id: 2, titulo: 'O Hobbit', categoria: 'Fantasia', responsavel: 'J.R.R. Tolkien', status: 'Emprestado' },
  { id: 3, titulo: '1984', categoria: 'Ficção Científica', responsavel: 'George Orwell', status: 'Disponível' },
  { id: 4, titulo: 'A Revolução dos Bichos', categoria: 'Sátira', responsavel: 'George Orwell', status: 'Disponível' },
  { id: 5, titulo: 'Capitães da Areia', categoria: 'Romance', responsavel: 'Jorge Amado', status: 'Emprestado' },
]

function App() {
  // estado central> lista de itens e termo de busca.
  const [itens, setItens] = useState(itensIniciais)
  const [termoBusca, setTermoBusca] = useState('')

  // estados para criar um cadastro novo
  const [novoTitulo, setNovoTitulo] = useState('')
  const [novaCategoria, setNovaCategoria] = useState('')
  const [novoResponsavel, setNovoResponsavel] = useState('')

  // filtragem da barra de pesquisa sem ter que clicar 
  const itensFiltrados = itens.filter((item) =>
  item.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
  item.categoria.toLowerCase().includes(termoBusca.toLowerCase())
)

  function adicionarItem(e) {
    e.preventDefault()
    if (!novoTitulo.trim()) return

    const novoItem = {
      id: Date.now(),
      titulo: novoTitulo,
      categoria: novaCategoria || 'Sem categoria',
      responsavel: novoResponsavel || 'Não informado',
      status: 'Disponível',
    }

    setItens([...itens, novoItem])
    setNovoTitulo('')
    setNovaCategoria('')
    setNovoResponsavel('')
  }

  return (
    <div className="container">
      <h1>Mini Catálogo Interativo</h1>

      <SearchBar termoBusca={termoBusca} aoDigitar={setTermoBusca} />

      <form className="form-linha" onSubmit={adicionarItem}>
        <input
          type="text"
          placeholder="Título"
          value={novoTitulo}
          onChange={(e) => setNovoTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={novaCategoria}
          onChange={(e) => setNovaCategoria(e.target.value)}
        />
        <input
          type="text"
          placeholder="Responsável"
          value={novoResponsavel}
          onChange={(e) => setNovoResponsavel(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {itensFiltrados.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}

      {itensFiltrados.length === 0 && <p>Nenhum item encontrado.</p>}
    </div>
  )
}

export default App
