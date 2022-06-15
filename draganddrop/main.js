const containers=document.querySelectorAll('.container');
const draggables=document.querySelectorAll('.draggable');

draggables.forEach(draggable=>{
    draggable.addEventListener('dragstart', ()=>{
       draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', ()=>{
        draggable.classList.remove('dragging')
    })
})
containers.forEach(container=>{
    container.addEventListener('dragover', (e)=>{
        e.preventDefault();
        // current element that have dragging class
      const currentElement=document.querySelector('.dragging');
      container.appendChild(currentElement);
    })
})