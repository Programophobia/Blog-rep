
const lol = document.querySelectorAll('.post')

function argo (event){
   
    event.preventDefault();
    const clickedEl = this;
    const yoo = document.querySelectorAll('.titles a.active')
    for(let p of yoo){
        p.classList.remove('active')
    }
    clickedEl.classList.add('active')
    const href = clickedEl.getAttribute('href')
    for(let mateusz of lol){
       mateusz.classList.remove('active')
   }
   const mateuszek = document.querySelector(href)
   mateuszek.classList.add('active')
}


const  yo = document.querySelectorAll('.titles a')
for(let y of yo){
    y.addEventListener('click', argo)
}
let h = ''
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  function elfDobryJakPomidor(){
  optTitleSelector.innerHTML = ""

  for(let a of optArticleSelector){
    const kek = a.getAttribute('id')
  }
   const tilt = optTitleSelector.innerHTML
    
 
    const insert = '<li><a href="#' + kek + '"><span>' + tilt + '</span></a></li>';
    h += insert
 }
elfDobryJakPomidor();