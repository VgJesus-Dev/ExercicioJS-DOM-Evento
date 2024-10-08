//Atividade 1
var x = 0;
function adcionarClique(){
    x++;

    document.getElementById("clickCount").innerHTML = x
}

//Atividade 2
const botao = document.getElementById('butAlert');
  
botao.addEventListener('click', function() {
    alert('Desejamos a você um excelente dia!');
});

//Atividade 3
const inputField = document.getElementById('inputField');
const messageDiv = document.getElementById('message');

inputField.addEventListener('blur', () => {
    if (inputField.value.trim() === '') {
        messageDiv.textContent = 'Erro: O campo não pode estar vazio!';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = 'Sucesso: Você digitou algo!';
        messageDiv.style.color = 'green';
    }


});

//Atividade 4

const produtos = document.getElementsByClassName('produto');
Array.from(produtos).forEach(product => {
    const titulo = product.querySelector('.titulo-produto'); 
    titulo.addEventListener('click', () => {
        const descricao = product.getAttribute('data-descricao');
        const preco = product.getAttribute('data-preco');
        const detalhediv = product.querySelector('.detalhe-produto'); 
        if (detalhediv.style.display === "none" || detalhediv.style.display === "") {
            detalhediv.innerHTML = `${descricao}<br> <br> ${preco}`;
            detalhediv.style.display = "block"; 
        } else {
            detalhediv.style.display = "none"; 
        }
    });
});

const detalhediv = document.querySelectorAll('.detalhe-produto');
detalhediv.forEach(div => div.style.display = "none");