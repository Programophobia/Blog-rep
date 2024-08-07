

function j () {
    const clicked = this
   const hhh = clicked.getAttribute('href')
   console.log(hhh)
 const bb =  document.querySelectorAll('.list.titles')
    for(let g of bb){
        g.classList.remove('active')
    }
clicked.classList.add('active')

const allart = document.querySelectorAll('.posts')

for(let cv of allart){

    cv.classList.remove('active')
}
hh = hhh.replace('#', '')
const match = document.getElementById(hh)

match.classList.add('active')
   }



const h = document.querySelectorAll('.list.titles')

for(let g of h){
    g.addEventListener('click', j)
}