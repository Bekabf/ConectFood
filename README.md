# ConectFood — React Refactor (Vite)

Refatoração do projeto estático em uma aplicação React com boas práticas de DX/UX, roteamento e componentes reutilizáveis.

## Como rodar
1. **Requisitos**: Node 18+
2. Instale as dependências
   ```bash
   npm install
   ```
3. Ambiente de desenvolvimento
   ```bash
   npm run dev
   ```
4. Build de produção
   ```bash
   npm run build && npm run preview
   ```

## Decisões de arquitetura
- **Vite + React 18** com `react-router-dom`.
- **Componentização** (Navbar, Footer, Card, Container) e **CSS modular por camadas** (`variables.css`, `globals.css`, `utilities.css`).
- **Acessibilidade**: contraste adequado, áreas clicáveis generosas, textos responsivos, semântica básica (header/main/footer/nav).
- **UX/UI**: grid responsivo, cartões com sombras suaves, botões com estados, largura de container, tipografia fluida.
- **Páginas**: Home, Doadores, ONGs, Como Ajudar, Contato, Cadastro (Doador/ONG/CPA) e dois painéis simples (doador/ONG).

## Migrado do original
- Imagens foram movidas para `public/img/*`.
- Páginas estáticas foram reimaginadas em componentes React, com conteúdo base alinhado ao tema original.

## Próximos passos (sugeridos)
- Inserir autenticação (Clerk/Auth0) e proteger `/painel/*`.
- Conectar formulários a um backend / Firestore.
- Adicionar testes de UI (Vitest + Testing Library).
- Internacionalização (pt-BR / en).
