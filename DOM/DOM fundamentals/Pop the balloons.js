
const list = document.getElementById('list');

const items = list.querySelectorAll('li')
items.forEach(e=>{e.addEventListener('mouseenter',(event)=>{e.style.visibility='hidden'})})