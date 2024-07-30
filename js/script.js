
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




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  jjjj = '.post-tags .list'

  function elfDobryJakPomidor(){
    const j = document.querySelector(optTitleListSelector)
   
    j.innerHTML = ""
    let h = ''
    const aaa = document.querySelectorAll(optArticleSelector)
    for(let a of aaa){
      const kek = a.getAttribute('id')
  
      const tilt = a.querySelector(optTitleSelector).innerHTML
      const insert = '<li><a href="#' + kek + '"><span>' + tilt + '</span></a></li>';
      h += insert
    }

    j.innerHTML = h;
    const  yo = document.querySelectorAll('.titles a')
    for(let y of yo){
       y.addEventListener('click', argo)
    }
 }

elfDobryJakPomidor();


function gelolo(){
  
    const allArt = document.querySelectorAll(optArticleSelector);
    for(let cfc of allArt){
      const tagss =  cfc.querySelector(jjjj)
        let ggg = ''
        const tagAtt = tagss.getAttribute('data-tags');
    }
 
    
    
    /* lolo into array */
    /* START LOOP: for each tag */
      /* generate HTML of the link */
      /* add generated code to html variable */
    /* END LOOP: for each tag */
    /* insert HTML of all the links intlolo wrapper */
  /* END LOOP: for every article: */
}
gelolo();