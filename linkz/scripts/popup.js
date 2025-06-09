const nomes = [
    "Lucas", "Marcos", "Rafael", "Bruno", "Thiago",
    "Pedro", "Gustavo", "Diego", "Felipe", "Eduardo",
    "Vitor", "André", "Leandro", "Mateus", "Gabriel",
    "Carlos", "Ricardo", "Daniel", "Alexandre", "Rodrigo",
    "João", "Fábio", "Roberto", "Marcelo", "Tiago",
    "Renan", "Samuel", "Maurício", "Igor", "Fernando",
    "Guilherme", "Marcos", "Jorge", "Caio", "Emanuel",
    "Lucas", "Rafael", "Felipe", "Carlos", "Gabriel",
    "Daniel", "Bruno", "Thiago", "Pedro", "Eduardo",
    "Vitor", "André", "Leandro", "Mateus", "Ricardo",
    "Alexandre", "Rodrigo", "João", "Fábio", "Roberto",
    "Marcelo", "Tiago", "Renan", "Samuel", "Maurício",
    "Igor", "Fernando", "Guilherme", "Jorge", "Caio",
    "Emanuel", "Lucas", "Rafael", "Felipe", "Carlos",
    "Gabriel", "Daniel", "Bruno", "Thiago", "Pedro",
    "Eduardo", "Vitor", "André", "Leandro", "Mateus",
    "Ricardo", "Alexandre", "Rodrigo", "João", "Fábio",
    "Roberto", "Marcelo", "Tiago", "Renan", "Samuel",
    "Enzo", "Matheus", "Leonardo", "Vinícius", "Murilo",
    "Diego", "Cauã", "Luan", "Davi", "Ramon",
    "Thiago", "Felipe", "Bruno", "Lucas", "Gabriel",
    "Caio", "Rodrigo", "Victor", "Pedro", "Rafael",
    "Eduardo", "Samuel", "João", "Anderson", "Alan",
    "Igor", "Gustavo", "Marcelo", "Fernando", "Leandro",
    "Renato", "Murilo", "Márcio", "Alex", "Bruno",
    "Caio", "Vitor", "Rogério", "Fábio", "Guilherme",
    "Thiago", "Diego", "André", "Paulo", "Mateus",
    "Rafael", "Leonardo", "Carlos", "Marcos", "Victor"
];

const cidades = [
    "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Curitiba",
    "Recife", "Fortaleza", "Brasília", "Porto Alegre", "Manaus"
];

const planos = [
    "Plan 1", "Plan 2", "Plan 3"
];

function escolherAleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

let somLiberado = false;
const som = document.getElementById('somPopup');

function liberarSom() {
    somLiberado = true;
    document.removeEventListener('click', liberarSom);
    document.removeEventListener('touchstart', liberarSom);
}

document.addEventListener('click', liberarSom);
document.addEventListener('touchstart', liberarSom);

function mostrarbuyPopup() {
    const popup = document.getElementById('buyPopup');
    const texto = document.getElementById('popupTexto');

    const nome = escolherAleatorio(nomes);
    const cidade = escolherAleatorio(cidades);
    const plano = escolherAleatorio(planos);
    texto.innerHTML = `<span>${nome}</span> comprou<br><span>${plano}</span>`;
    popup.classList.add('show');

    if (somLiberado) {
        som.currentTime = 0;
        som.play();
    }

    setTimeout(() => {
        popup.classList.remove('show');
    }, 5000);

    const proximoTempo = Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000;
    setTimeout(mostrarbuyPopup, proximoTempo);
}

setTimeout(mostrarbuyPopup, 5000);
