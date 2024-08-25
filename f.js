'use strict'

function a(){
    const lel = document.querySelectorAll('.post.active')
    const gdzie = document.querySelector('.list.titles')
        for(let f of lel){
            const nazwa = f.getAttribute('id')
            console.log(nazwa)
        }
}