<div align="center">

<img src="./img/logo.png" width="30">  

# 📚 Tudo Sobre HTML</h1>

**Aulas visuais e interativas sobre HTML para iniciantes.**
*Aprende mexendo, não decorando.*

[![8 aulas](https://img.shields.io/badge/aulas-8-FF6B35?style=flat-square&labelColor=2B1810)](#-as-aulas)
[![Zero dependências](https://img.shields.io/badge/dependências-0-2B1810?style=flat-square)](#%EF%B8%8F-stack)
[![HTML5](https://img.shields.io/badge/html5-E34C26?style=flat-square&logo=html5&logoColor=white)](#%EF%B8%8F-stack)
[![CSS3](https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white)](#%EF%B8%8F-stack)
[![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#%EF%B8%8F-stack)

</div>

---

## 🎯 O que é isso

Um conjunto de aulas sobre HTML e seus elementos, cada uma como uma página HTML única e interativa. Tudo em **HTML**, zero dependências, direto no navegador.

Você interage com elementos reais, vê o código mudando ao vivo, clica em exemplos práticos. Os conceitos abstratos viram concretos.

> 🌐 **Página inicial com todas as aulas:** abre o `index.html` na raiz.

---

## 📚 As aulas

Cada aula é uma página independente sobre um tema específico do HTML. Você pode começar pela 1 ou pular para a aula que te interessa mais.

| # | Tema | Categoria | Tópicos principais |
|---|------|-----------|------------------|
| **[01](aula1/)** | Introdução ao HTML | Fundamentos | Tags · Estrutura · Elementos · Anatomia de uma tag |
| **[02](aula2/)** | Formatando Textos | Textos | Tags de texto · Hierarquia · Semântica |
| **[03](aula3/)** | Navegação com Links | Links | Tag `<a>` · Navegação interna e externa · Âncoras |
| **[04](aula4/)** | Inserindo Imagens | Imagens | Tag `<img>` · Alt · Figure · Picture · Performance |
| **[05](aula5/)** | Criando Formulários | Formulários | Form · Input · Textarea · Select · Validação |
| **[06](aula6/)** | Trabalhando com Listas | Listas | UL · OL · LI · DL · Aninhamento · Semântica |
| **[07](aula7/)** | Audio e Vídeo | Mídia | Tag `<audio>` · Tag `<video>` · Formatos · Controles |
| **[08](aula8/)** | HTML Semântico Moderno | Semântica | Header · Nav · Main · Article · Section · Footer · SEO |

---

## ✨ Por que esse formato funciona

- 🖱️ **Interativo de verdade**: exemplos clicáveis, código que responde ao mouse. Não é vídeo, não é PDF, é manipulação direta
- 📦 **Zero dependências**: só HTML, CSS e JS puros. Abre direto no navegador, funciona offline, hospeda em qualquer lugar (GitHub Pages, S3, Netlify...)
- 🎨 **Identidade visual consistente**: mesma paleta (cream, orange, blue, purple), mesmas fontes (Caprasimo + Sora + JetBrains Mono), mesmo "feel" zine em todas as aulas
- 📱 **Responsivo de verdade**: 768px breakpoint adapta grid, fontes, navegação e cards. No mobile o site continua funcional e legível
- 🌐 **Foco em HTML puro**: sem frameworks, sem complicação. Aprenda os fundamentos de verdade

---

## 💻 Tecnologias

| Tecnologia | Descrição | Propósito |
|-----------|-----------|----------|
| **HTML5** | Semântico | Marcação e estrutura |
| **CSS3** | Variáveis CSS, Grid, Flexbox, Animações | Layout responsivo e visual |
| **JavaScript** | Vanilla (ES6+) | Interatividade e dinâmica |
| **[Caprasimo](https://fonts.google.com/specimen/Caprasimo)** | Google Fonts | Headings e títulos |
| **[Sora](https://fonts.google.com/specimen/Sora)** | Google Fonts | Corpo do texto |
| **[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)** | Google Fonts | Código e tags |

---

## 🗂️ Estrutura

```
tudo-sobre-html/
├── index.html              # Landing com cards de todas as 8 aulas
├── css/
│   └── style.css           # Estilos compartilhados da landing
├── js/
│   ├── aulas.js           # Dados e renderização dinâmica dos cards
│   └── script.js          # Interatividade (smooth scroll, animations)
├── img/
│   ├── logo.png           # Identidade visual
│   ├── html-3d.webp       # Imagem da hero
│   ├── right-arrow.png    # Ícone dos links
│   └── favicon.ico        # Favicon
│
├── aula1/                  # 8 aulas (1-8)
│   ├── index.html         # Marcação semântica
│   ├── style.css          # Visual (paleta, layout, animações)
│   └── script.js          # Interatividade (exemplos, widgets)
├── aula2/
├── aula3/
├── ...
└── aula8/
```

Cada aula é uma página independente em **arquitetura modular**: HTML cuida da estrutura, CSS dos estilos e JS da interatividade. Sem dependências externas, abre direto no navegador, funciona offline.

---

## 🚀 Como rodar localmente

Abre direto no navegador:

```bash
# clone
git clone https://github.com/brianmonteiro54/tudo-sobre-html.git
cd tudo-sobre-html

# abre o index.html com duplo-clique, ou serve um http simples:
python -m http.server 8000
# depois acessa http://localhost:8000
```

Não precisa de `npm install`, não tem `package.json`, não tem build step.

---

## 📋 Hacks de HTML inclusos

Na página inicial, há uma seção com **6 hacks práticos** que você precisa saber:

1. **O atributo data-** — Armazene dados customizados em elementos
2. **Contenteditable** — Transforme qualquer elemento em editável
3. **Atributo download** — Faça download de arquivo em vez de navegar
4. **Input com datalist** — Autocomplete nativo sem JavaScript
5. **Details e Summary** — Accordion nativo
6. **Defer e Async** — Otimize o carregamento de scripts

---

## 🌐 Deploy no GitHub Pages

Está hospedado em **GitHub Pages** automaticamente:

```
https://rhayssakramer.github.io/tudo-sobre-html/
```

Qualquer push na branch `main` atualiza o site automaticamente.

---

## 🤝 Contribuindo

Issues e PRs são bem-vindos, especialmente para:

- Adicionar novas aulas (CSS, JavaScript, Acessibilidade, etc.)
- Melhorar exemplos interativos
- Tradução para inglês ou espanhol
- Melhorar acessibilidade (ARIA, contraste, foco visível)
- Corrigir bugs

---

## 👩🏼‍💻 Autora

<table>
  <tr>
    <td align="left">
      <a href="https://github.com/rhayssakramer">
        <strong>Rhayssa Kramer</strong>
      </a>
      <br>
      <span>Sr. Assoc, Full-Stack Development | Engenheira de Plataforma</span>
      <br>
      <small>Avanade | Tech Enthusiast | Community Speaker</small>
    </td>
  </tr>
</table>

---

## 📄 Licença

MIT — usa, adapta, distribui. Só dá os créditos. 🏷️

---

<div align="center">

Feito com 🧡 para quem quer aprender HTML de verdade

*"Os alunos aprendem mexendo, não decorando."*

<div align="center">

### ⭐ Se este projeto foi útil, considere deixar uma estrela no GitHub!

© 2026 Rhayssa Kramer. Todos os direitos reservados.

<a href="https://github.com/rhayssakramer"><img src="https://github.com/rhayssakramer/rhayssakramer/blob/main/img/rodape.png" width="100%"></a>

</div>

</div>
