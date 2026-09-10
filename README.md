# Mini Catálogo Interativo - React

Aplicação web de página única que simula um catálogo de livros, com busca em tempo real e cadastro dinâmico de novos itens, desenvolvida como atividade prática da disciplina de Desenvolvimento Front-end.

## Integrantes da Equipe
- [Nome do Aluno 1]
- [Nome do Aluno 2]
- [Nome do Aluno 3]

## Passo a Passo do Desenvolvimento

1. **Setup Inicial:** O projeto foi inicializado com Vite, utilizando o template de React (`npm create vite@latest`). O Vite foi escolhido por oferecer um ambiente de desenvolvimento rápido, com recarregamento automático do navegador a cada alteração no código.

2. **Estrutura de Componentes:** A aplicação foi dividida em três componentes principais, seguindo o princípio de responsabilidade única:
   - `App.jsx`: componente pai da aplicação. Concentra o estado global (lista de itens e termo de busca) e a lógica de filtragem e cadastro, repassando dados para os demais componentes via props.
   - `SearchBar.jsx`: componente isolado responsável apenas por capturar o texto digitado pelo usuário no campo de busca. Recebe o valor atual e a função de atualização como props, sem manter estado próprio.
   - `ItemCard.jsx`: componente de exibição, responsável por mostrar as informações de um único item (título, categoria, responsável e status). Recebe todos os dados via props e não possui lógica própria, apenas renderização.

3. **Gerenciamento de Estado:** Os estados `itens` (lista de registros) e `termoBusca` (texto digitado na busca) foram centralizados no componente `App.jsx` utilizando o hook `useState`. A cada caractere digitado na barra de busca, o estado `termoBusca` é atualizado e a lista `itensFiltrados` é recalculada automaticamente usando `.filter()`, comparando o título de cada item (em minúsculas) com o termo buscado. A renderização da lista filtrada é feita com `.map()`, passando cada item como prop para o componente `ItemCard`. O cadastro de novos itens também é feito através do estado: ao submeter o formulário, um novo objeto é criado e adicionado ao array `itens` com o operador de espalhamento (`...itens`), o que atualiza a tela instantaneamente sem recarregar a página.

4. **Desafios Enfrentados:** Um dos principais aprendizados da equipe foi entender como a comunicação entre componentes acontece de forma unidirecional, do pai para os filhos, através de props, e como os eventos disparados nos filhos (como a digitação no campo de busca) precisam ser repassados de volta ao pai por meio de funções passadas via props. Outro ponto de atenção foi garantir que o formulário de cadastro limpasse os campos após o envio e que o filtro em tempo real não interferisse na performance da aplicação, mesmo com poucos itens.

## Como Executar o Projeto
```bash
git clone <link-do-repositorio>
cd <pasta-do-projeto>
npm install
npm run dev
```