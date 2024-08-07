

function j () {
    const clicked = this
   const hhh = clicked.getAttribute('href')
   console.log(hhh)
 const bb =  document.querySelectorAll('.list.titles')
    for(let g of bb){
        g.classList.remove('active')
    }
clicked.classList.add('active')

const allart = document.querySelectorAll('.posts.active')

for(let cv of allart){

    cv.classList.remove('active')
}
hh = hhh.replace('#', '')
const match = document.getElementById(hh)

match.classList.add('active')
   }



const h = document.querySelectorAll('.list a')


function hamburger(){
    const linkMiejsce = document.querySelector('.list.titles')
    const allArts = document.querySelectorAll('.posts-title')
    linkMiejsce.innerHTML = ''
    for(let vvv of allArts){
        const meow = vvv.innerHTML
        console.log(meow)

    }
}

hamburger()

for(let g of h){
    g.addEventListener('click', j)
}



