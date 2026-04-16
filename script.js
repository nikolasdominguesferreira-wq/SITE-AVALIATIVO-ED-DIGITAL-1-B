// --- GESTÃO DE DADOS ---
const jaguarsData = [
    { title: "Habitat", desc: "Vivem desde florestas tropicais até áreas pantaneiras." },
    { title: "Alimentação", desc: "Carnívoras natas, alimentam-se de mais de 80 espécies." },
    { title: "Conservação", desc: "Classificadas como 'Quase Ameaçadas' pela IUCN." }
];

const curiosities = [
    { title: "Mordida Poderosa", content: "A onça tem a mordida mais forte entre todos os felinos." },
    { title: "Nadadoras", content: "Diferente de muitos gatos, elas adoram água e são ótimas nadadoras." }
];

// --- RENDERIZAÇÃO DINÂMICA ---
function initApp() {
    const gallery = document.getElementById('gallery-container');
    const accordion = document.getElementById('accordion-container');

    // Renderiza Cards
    jaguarsData.forEach(item => {
        gallery.innerHTML += `
            <article class="card">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </article>
        `;
    });

    // Renderiza Acordeão
    curiosities.forEach((item, index) => {
        accordion.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(${index})">
                    ${item.title}
                </button>
                <div class="accordion-content" id="acc-${index}" style="display:none; padding: 1rem;">
                    ${item.content}
                </div>
            </div>
        `;
    });
}

// --- ACESSIBILIDADE: FONTE ---
let fontSize = 100;
function changeFontSize(action) {
    fontSize += (action === 'increase' ? 10 : -10);
    document.body.style.fontSize = fontSize + "%";
}

// --- ACESSIBILIDADE: CONTRASTE ---
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// --- COMPONENTE ACORDEÃO ---
function toggleAccordion(index) {
    const content = document.getElementById(`acc-${index}`);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// --- SCROLL REVEAL ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) el.classList.add("active");
    });
}

window.addEventListener("scroll", reveal);
window.onload = () => { initApp(); reveal(); };
