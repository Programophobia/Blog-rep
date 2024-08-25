

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




function ooo (customV = '') {
 
 const alA = document.querySelectorAll('.&&' + customV)
 
  for (let g of alA){
    tagw = g.querySelector('&&')
  
    let gf = '' 

    const tags = r.getAttribute('data-tags' )
    const split = tags.slice(' ')
 
for(let n of split){
    const ht = '<>'
gf +=ht
}
}   
tagw.innerHTML = gf
   
}

function sniadanie(event){
    event.prevent.Default()
    
  const cl = this;
 
  const hey = sl.getAttribute('href')
   
  const maluch = hey.replace('tag-', '')
const all = document.querySelectorAll('.dsdsd.active')
    
     for(let g of all){
        g.classList.remove('active')
     }

const bb = document.querySelectorAll('a[href="'+bb+'"]')
  
  for(let cc of bb){
    cc.classList.add("active")
  }
  
ooo('[data-tags~= "'+maluch+'"]')
 }


 function kawa(){
 
  const vv = document.querySelectorAll('a[href^="#tag-"]')  
  for(let r of vv){
    r.addEventListener('click', sniadanie)
  }
   
       }
kawa();

function generateTags(){
    /* find all articles */
    const allA = document.querySelectorAll('.')
    
    for(let g of allA){
        const wrapper = document.querySelector('.')
        let h =''
    }
       /* find tags wrapper */

    /* make html variable with empty string */
    /* get tags from data-tags attribute */
    const tag = wrapper.getAttribute('')
    /* split tags into array */
    /* START LOOP: for each tag */

      /* generate HTML of the link */
      /* add generated code to html variable */
    /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
  /* END LOOP: for every article: */
 }
 generateTags();

 function tagClickHandler(event){
    /* prevent default action for this event */
    event
    /* make new constant named "clickedElement" and give it the 
  value of "this" */
    /* make a new constant "href" and read the attribute "href" of 
  the clicked element */
    /* make a new constant "tag" and extract tag from the "href" 
  constant */
    /* find all tag links with class active */

    /* START LOOP: for each active tag link */
    /* remove class active */
  /* END LOOP: for each active tag link */
  /* find all tag links with "href" attribute equal to the "href" 
constant */
const all = document.querySelectorAll('a.active[htrf="'+href+'"]')
  /* START LOOP: for each found tag link */
    /* add class active */
  /* END LOOP: for each found tag link */
  /* execute function "generateTitleLinks" with article selector 
as argument */
 }
 function addClickListenersToTags(){
  /* find all links to tags */
  /* START LOOP: for each link */
    /* add tagClickHandler as event listener for that link */
  /* END LOOP: for each link */
 }
 addClickListenersToTags();