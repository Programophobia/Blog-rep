

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
    const linkMiejsce = document.querySelector('.titles')
    const allArts = document.querySelectorAll('.posts-title')
    let htm = ''
    
    for(let vvv of allArts){
        const tatt = vvv.getAttribute('id')
        const meow = vvv.querySelector('.post-titles').innerHTML
        console.log(meow)
        const put = '<li><a href="#' + tatt + '"><span>' + vvv + '</span></a></li>';
htm +=put

    }
    linkMiejsce.innerHTML = htm
}

hamburger()

for(let g of h){
    g.addEventListener('click', j)
}




function ooo () {
 
 const alA = document.querySelectorAll('.&&')
 
  for (let g of alA){
    tagw = g.querySelector('&&')
  
    let gf = ''

    const tags = r.getAttribute('data-tags')
    const split = tags.slice(' ')
 
for(let n of split){
    const ht = '<>'
gf +=ht
}
}   
tagw.innerHTML = gf
   
}