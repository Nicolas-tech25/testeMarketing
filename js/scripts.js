// Array de camisas em destaque
const camisasDestaque = [
    { nome: 'Coringão branco', preco: 'R$ 99,90', imagem: '../images/corinthians.jpg' },
    { nome: 'Coringão clássico', preco: 'R$ 79,90', imagem: '../images/coringão.jpg' },
    { nome: 'Coringão da cruz', preco: 'R$ 89,90', imagem: '../images/r.jpg' },
    { nome: 'Coringão da cruz', preco: 'R$ 89,90', imagem: '../images/f.jpg' }
];

// Array de camisas com nome, preço e imagem
const camisas = [
    { nome: 'Coringão derretido', preco: 'R$ 49,90', imagem: '../images/w.jpg' },
    { nome: 'Coringão Cássio', preco: 'R$ 600', imagem: '../images/c.jpg' },
    { nome: 'A mais foda', preco: 'R$ 39,90', imagem: '../images/d.jpg' },
    { nome: 'Coringão Chavee 🔥', preco: 'R$ 44,90', imagem: '../images/s.jpg' },
    { nome: 'Coringão zebra', preco: 'R$ 59,90', imagem: '../images/f.jpg' },
    { nome: 'Coringão Lindo', preco: 'R$ 59,90', imagem: '../images/n.jpg' },
    { nome: 'Seu Jorge', preco: 'R$ 59,90', imagem: '../images/m.jpg' },
    { nome: 'Coringão da cruz', preco: 'R$ 59,90', imagem: '../images/r.jpg' }
];


// Função para criar um card de camisa
function criarCard(camisa) {
    // Cria um elemento figure para o card
    const figure = document.createElement('figure');
    figure.classList.add('card');

    // Cria a tag de imagem e define seu src e alt
    const img = document.createElement('img');
    img.src = camisa.imagem;
    img.alt = camisa.nome;
    figure.appendChild(img);

    // Cria um elemento figcaption para o texto do card
    const figcaption = document.createElement('figcaption');
    // Cria um título h3 com o nome da camisa
    const h3 = document.createElement('h3');
    h3.textContent = camisa.nome;
    figcaption.appendChild(h3);

    // Cria um parágrafo com o preço da camisa
    const p = document.createElement('p');
    p.textContent = camisa.preco;
    figcaption.appendChild(p);

    // Cria um botão de compra
    const button = document.createElement('button');
    button.textContent = 'Ver detalhes';
    figcaption.appendChild(button);

    // Adiciona o figcaption ao figure
    figure.appendChild(figcaption);

    return figure;
}

// Função para renderizar os cards em um container específico
function renderizarCards(containerId, camisas) {
    // Obtém o container pelo ID
    const container = document.getElementById(containerId);
    // Para cada camisa, cria um card e o adiciona ao container
    camisas.forEach(camisa => {
        const card = criarCard(camisa);
        container.appendChild(card);
    });
}

// Renderiza os cards de destaque e a galeria de camisas
renderizarCards('destaqueCards', camisasDestaque);
renderizarCards('galeriaCards', camisas);
