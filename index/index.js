let bg = document.getElementById('bg');
let fundo_cell = document.getElementById('fundo_cell');
let cell = document.getElementById('cell');
let titulo = document.getElementById('titulo');
let texto = document.getElementById('texto');
let botao = document.getElementById('botao');
let fundo_caminhao = document.getElementById('fundo_caminhao');
let caminhao = document.getElementById('caminhao');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    texto.style.marginTop = value * 2.5 + 'px';
    titulo.style.marginTop = value * 2.5 + 'px';
    botao.style.marginTop = value * 2.5 + 'px';
    fundo_cell.style.marginLeft = value * -1.5 + 'px';
    cell.style.marginLeft = value * -1.0 + 'px';
    bg.style.marginLeft = value * -2.0 + 'px';
    fundo_caminhao.style.marginLeft = value * 1.5 + 'px';
    caminhao.style.marginLeft = value * 1.0 + 'px';
});