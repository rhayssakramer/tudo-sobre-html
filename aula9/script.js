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

// INTERSECTION OBSERVER PARA ANIMAÇÕES
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// APLICAR ANIMAÇÃO AOS CARDS
document.querySelectorAll('.hack-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// APLICAR ANIMAÇÃO AO SUMMARY
const summarySection = document.querySelector('.summary');
if (summarySection) {
    summarySection.style.opacity = '0';
    summarySection.style.transform = 'translateY(20px)';
    summarySection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(summarySection);
}

// COPY TO CLIPBOARD PARA CODE BLOCKS
document.querySelectorAll('.hack-example code').forEach(code => {
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copiar';
    copyBtn.className = 'copy-btn';
    copyBtn.style.cssText = `
        position: absolute;
        top: 8px;
        right: 8px;
        padding: 0.4rem 0.8rem;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 10;
    `;

    const codeContainer = code.parentElement;
    codeContainer.style.position = 'relative';
    codeContainer.appendChild(copyBtn);

    codeContainer.addEventListener('mouseenter', () => {
        copyBtn.style.opacity = '1';
    });

    codeContainer.addEventListener('mouseleave', () => {
        copyBtn.style.opacity = '0';
    });

    copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const text = code.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copiado!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    });
});

// LOG DE INICIALIZAÇÃO
console.log('Aula 9 - Hacks de HTML carregada com sucesso! 🎉');
