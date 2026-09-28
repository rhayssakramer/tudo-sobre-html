// Dados das aulas
const aulas = [
    {
        numero: '01',
        id: 'aula-01',
        titulo: 'Introdução ao HTML',
        categoria: 'FUNDAMENTOS',
        descricao: 'O que é HTML, estrutura básica, tags principais, anatomia de uma tag e como o navegador interpreta o código.',
        tags: ['Tags', 'Estrutura', 'Elementos'],
        cor: '#ff6b35',
        link: './aula1/'
    },
    {
        numero: '02',
        id: 'aula-02',
        titulo: 'Formatando Textos',
        categoria: 'TEXTOS',
        descricao: 'Tags de texto: p, h1-h6, strong, em, span, div. Como hierarquizar conteúdo e criar estrutura semântica.',
        tags: ['Tipografia', 'Semântica', 'Hierarquia'],
        cor: '#4a90a4',
        link: './aula2/'
    },
    {
        numero: '03',
        id: 'aula-03',
        titulo: 'Navegação com Links',
        categoria: 'LINKS',
        descricao: 'Tag <a>, atributo href, navegação interna e externa, âncoras, target, rel e boas práticas.',
        tags: ['Links', 'Navegação', 'Âncoras'],
        cor: '#6b5b95',
        link: './aula3/'
    },
    {
        numero: '04',
        id: 'aula-04',
        titulo: 'Inserindo Imagens',
        categoria: 'IMAGENS',
        descricao: 'Tag <img>, formatos, atributo alt, figure, picture, lazy loading e otimização.',
        tags: ['Imagens', 'Media', 'Performance'],
        cor: '#ffc107',
        link: './aula4/'
    },
    {
        numero: '05',
        id: 'aula-05',
        titulo: 'Criando Formulários',
        categoria: 'FORMULÁRIOS',
        descricao: 'Tags form, input, textarea, select. Atributos importantes, validação, label e acessibilidade.',
        tags: ['Forms', 'Input', 'Validação'],
        cor: '#4caf50',
        link: './aula5/'
    },
    {
        numero: '06',
        id: 'aula-06',
        titulo: 'Trabalhando com Listas',
        categoria: 'LISTAS',
        descricao: 'Tags ul, ol, li, dl. Quando usar cada tipo, aninhamento, semântica e boas práticas.',
        tags: ['Listas', 'Estrutura', 'Semântica'],
        cor: '#e91e63',
        link: './aula6/'
    },
    {
        numero: '07',
        id: 'aula-07',
        titulo: 'Audio e Vídeo',
        categoria: 'MÍDIA',
        descricao: 'Tags audio, video, source. Formatos suportados, controles, autoplay, atributos e compatibilidade.',
        tags: ['Áudio', 'Vídeo', 'Media'],
        cor: '#00bcd4',
        link: './aula7/'
    },
    {
        numero: '08',
        id: 'aula-08',
        titulo: 'HTML Semântico Moderno',
        categoria: 'SEMÂNTICA',
        descricao: 'Tags header, nav, main, article, section, aside, footer. SEO, acessibilidade e estrutura semântica.',
        tags: ['Semântica', 'SEO', 'Acessibilidade'],
        cor: '#ff9800',
        link: './aula8/'
    },
    {
        numero: '09',
        id: 'aula-09',
        titulo: 'Hacks de HTML que Você Precisa Saber',
        categoria: 'AVANÇADO',
        descricao: 'Atributos data-*, contenteditable, download, datalist, details/summary e otimizações com defer/async.',
        tags: ['Hacks', 'Avançado', 'Performance'],
        cor: '#9c27b0',
        link: './aula9/'
    }
];

// Função para gerar um card de aula
function gerarCardAula(aula) {
    const tagsHTML = aula.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    return `
        <div class="aula-card" id="${aula.id}" style="--card-color: ${aula.cor};">
            <div class="aula-card-header">
                <div class="aula-label">AULA</div>
                <div class="aula-tag">${aula.categoria}</div>
            </div>
            <div class="aula-number">${aula.numero}</div>
            <h3>${aula.titulo}</h3>
            <p>${aula.descricao}</p>
            <div class="tags">
                ${tagsHTML}
            </div>
            <a href="${aula.link}" class="aula-link">Abrir aula <img src="./img/right-arrow.png" alt="→" class="arrow-icon"></a>
        </div>
    `;
}

// Função para renderizar todas as aulas
function renderizarAulas() {
    const container = document.querySelector('.aulas-grid');
    if (container) {
        container.innerHTML = aulas.map(aula => gerarCardAula(aula)).join('');
    }
}

// Executar quando o DOM está carregado
document.addEventListener('DOMContentLoaded', renderizarAulas);
