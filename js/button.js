const botao = document.querySelector('#botaodescer');

botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight * 4, behavior: "smooth"})
})