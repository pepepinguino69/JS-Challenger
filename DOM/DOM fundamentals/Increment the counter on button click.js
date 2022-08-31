const button = document.getElementById('button');
button.addEventListener('click' , () => {
  // type in your code here
valor = parseInt(document.querySelector('#button').textContent)
valor++
document.querySelector('#button').innerText=valor
});

