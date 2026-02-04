# Página Pessoal - Luis Filipe Campos Cardoso

Site pessoal com informações profissionais, acadêmicas e de ensino.

🔗 **[Acesse o site](https://luisfccardoso.github.io)**

## Sobre o Projeto

Site profissional desenvolvido para apresentar minha trajetória acadêmica, experiência profissional, publicações científicas e atividades de ensino. 

## 🛠️ Tecnologias Utilizadas

- **React** 19.0.0
- **React Router DOM** 7.5.1 - Navegação entre páginas
- **React Icons** 5.5.0 - Ícones de redes sociais e acadêmicas
- **Vite** 6.3.1 - Build tool e dev server
- **CSS3** - Estilização e animações
- **GitHub Pages** - Hospedagem

## Estrutura do Projeto

```
teaching/
├── src/
│   ├── assets/           # Imagens e recursos
│   ├── pages/            # Páginas do site
│   │   ├── About.jsx     # Página principal (Sobre)
│   │   ├── Teaching.jsx  # Página de Ensino
│   │   └── *.css         # Estilos das páginas
│   ├── App.jsx           # Componente principal com rotas
│   ├── App.css           # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── public/               # Arquivos públicos
└── package.json          # Dependências e scripts
```

## Como Executar Localmente

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/luisfccardoso/page.git
cd page
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## Build e Deploy

### Build de Produção
```bash
npm run build
```

### Deploy no GitHub Pages
```bash
npm run deploy
```

O comando acima irá:
1. Executar o build de produção
2. Publicar os arquivos na branch `gh-pages`
3. Atualizar o site automaticamente

## Contato

**Email**: luisfilipe.tec@gmail.com

---

Desenvolvido com ❤️ por Luis Filipe Campos Cardoso
