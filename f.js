'use strict'

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
    }

a()

const ale = document.querySelectorAll('.o')

function click(){
console.log('clicked')
const clicked = this

for(let a of ale){
    a.classList.removed('.active')
}
clicked.classList.add('.active')
}


for(let g of ale){
    g.addEventListener('click', click)
}