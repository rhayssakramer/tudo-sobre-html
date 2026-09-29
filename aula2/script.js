// SMOOTH SCROLL PARA LINKS INTERNOS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// HEADER SHADOW ON SCROLL
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// SCROLL TO TOP BUTTON
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// LOG DE INICIALIZAÇÃO
console.log('Aula 2 - Estrutura Básica do HTML carregada com sucesso! 🚀');

// HIGHLIGHT ACTIVE TOC LINK
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
        }
    });
    
    tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// BOTÃO COPIAR CÓDIGO
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach((pre) => {
        // Criar container relativo
        pre.style.position = 'relative';
        
        // Criar botão de copiar
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.innerHTML = '<img src="../img/clone.png" alt="Copiar">';
        copyBtn.type = 'button';
        copyBtn.title = 'Copiar código';
        
        // Adicionar evento de clique
        copyBtn.addEventListener('click', function() {
            const code = pre.innerText;
            navigator.clipboard.writeText(code).then(() => {
                // Mudar opacidade para indicar sucesso
                const originalImg = copyBtn.innerHTML;
                copyBtn.style.opacity = '0.5';
                
                // Voltar ao normal após 2 segundos
                setTimeout(() => {
                    copyBtn.style.opacity = '1';
                }, 2000);
                
                // Voltar ao normal após 2 segundos
                setTimeout(() => {
                    copyBtn.style.opacity = '1';
                }, 2000);
            }).catch(() => {
                alert('Erro ao copiar o código!');
            });
        });
        
        // Adicionar botão ao pre
        pre.appendChild(copyBtn);
    });
});

