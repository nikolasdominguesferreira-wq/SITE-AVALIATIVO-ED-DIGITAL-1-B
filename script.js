// --- DATABASE DO PROJETO ---
const jornadaDados = [
    { etapa: "01", titulo: "Cultivo no Campo", desc: "A cevada em Guarapuava beneficia-se do clima ideal e tecnologia de precisão.", img: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=500&q=80" },
    { etapa: "02", titulo: "Maltagem Industrial", desc: "Transformação do grão em malte através de processos controlados de germinação.", img: "https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?auto=format&fit=crop&w=500&q=80" },
    { etapa: "03", titulo: "Distribuição", desc: "O malte chega às cidades, conectando o produtor rural ao consumidor final.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80" }
];

const perguntasQuiz = [
    { q: "Qual cidade é o polo da produção de malte no Paraná?", options: ["Londrina", "Guarapuava", "Curitiba"], correct: 1 },
    { q: "O malte é derivado de qual grão?", options: ["Trigo", "Milho", "Cevada"], correct: 2 }
];

// --- FUNÇÃO DE INICIALIZAÇÃO ---
function renderizarConteudo() {
    // Renderizar Timeline
    const timeline = document.getElementById('timeline-container');
    timeline.innerHTML = jornadaDados.map(item => `
        <div class="step-item reveal">
            <img src="${item.img}" alt="${item.titulo}" style="width:150px; height:150px; border-radius:10px; object-fit:cover;">
            <div>
                <span style="color:var(--accent); font-weight:bold;">Etapa ${item.etapa}</span>
                <h3>${item.titulo}</h3>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');

    // Renderizar Galeria
    const gallery = document.getElementById('gallery-grid');
    jornadaDados.forEach(item => {
        gallery.innerHTML += `
            <div class="card-visual reveal">
                <img src="${item.img}" alt="${item.titulo}">
                <div class="card-content">
                    <h3>${item.titulo}</h3>
                    <button class="btn-secondary">Saber mais</button>
                </div>
            </div>
        `;
    });
}

// --- CONTROLES DE ACESSIBILIDADE ---
let zoom = 100;
function changeFontSize(type) {
    zoom += (type === 'increase' ? 10 : -10);
    document.documentElement.style.fontSize = `${zoom}%`;
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// --- LOGICA DO SCROLL REVEAL ---
function handleScroll() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
}

// --- EXECUÇÃO ---
window.addEventListener('scroll', handleScroll);
window.onload = () => {
    renderizarConteudo();
    handleScroll(); // Trigger inicial
};
