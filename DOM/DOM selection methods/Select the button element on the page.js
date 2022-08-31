

const list = document.getElementById('list');
list.forEach(e=>{e.addEventListener('mouseenter',(event)=>
{e.this.setAttribute('visibility','hidden')})