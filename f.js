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


function click(){
console.log('clicked')
}

const ale = document.querySelectorAll('.o')
for(let g of o){
    g.addEventListener('click', click)
}