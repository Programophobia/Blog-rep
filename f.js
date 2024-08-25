'use strict'



const ale = document.querySelectorAll('.o')

function click(){
console.log('clicked')
const clicked = this


for(let a of ale){
    a.classList.remove('.active')
}
clicked.classList.add('.active')
const gg = document.querySelectorAll('articles')
for(let g of gg){
    g.classList.remove('.active')

}
const href = clicked.getAttribute('href')
const ladny = href.replace('#-', '')
console.log(ladny)
//gg.querySelector(ladny).classList.add('.active')
//const h = gg.querySelector(ladny)
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.getElementById(ladny);


  /* add class 'active' to the correct article */
  targetArticle.classList.add("active");

}





function a(){
    const lel = document.querySelectorAll('.post')
    const gdzie = document.querySelector('.list.titles')
    let html = ''
        for(let f of lel){
            const nazwa = f.getAttribute('id')
            console.log(nazwa)
            const al = '<li><a class ="o" href="#-'+nazwa+'"> '+nazwa+'</a></li>'
            html +=al
            gdzie.innerHTML = html
        }
        for(let g of ale){
            g.addEventListener('click', click)
        }
    }

a()