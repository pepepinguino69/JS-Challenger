const button = document.getElementById('button');
button.addEventListener('click' , () => {
  // type in your code here
const newLi=document.createElement('li')
newLi.innerText=document.querySelector('#input').value
document.querySelector('#list').appendChild(newLi)
});
