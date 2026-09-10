# Mini Catálogo Interativo - React

## Integrantes da Equipe
- [Nome do Aluno 1]
- [Nome do Aluno 2]
- [Nome do Aluno 3]

## Passo a Passo do Desenvolvimento

1. **Setup Inicial:** Projeto criado com Vite + React (`npm create vite@latest`).
2. **Estrutura de Componentes:**
   - `App.jsx`: componente pai, guarda o estado e a lógica principal.
   - `SearchBar.jsx`: campo de busca, recebe o valor atual e a função de atualização via props.
   - `ItemCard.jsx`: exibe os dados de um item recebido via props.
3. **Gerenciamento de Estado:** Os estados `itens` e `termoBusca` ficam centralizados em `App.jsx` com `useState`. A cada digitação no campo de busca, a lista é filtrada com `.filter()` e renderizada com `.map()`, sem precisar recarregar a página.
4. **Desafios Enfrentados:** [descreva aqui as dificuldades da equipe, ex: entender props, sincronizar estado do formulário, etc.]

## Como Executar o Projeto
```bash
git clone <link-do-repositorio>
cd <pasta-do-projeto>
npm install
npm run dev
```
