const yo = document.querySelectorAll('list a')
const lol = document.querySelectorAll('.post')

function argo (event){
    event.preventDefault();
    const clickedEl = this;
    yo.classList.remove('.active')
    clickedEl.classList.add('.active')
   const href = clickedEl.getAttribute('href')
}



for(let y of yo){
    y.addEventListener('click', argo)
}