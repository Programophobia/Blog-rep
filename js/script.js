
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
  optArticleTagsSelector = '.post-tags .list';

  function elfDobryJakPomidor(customSelector = ''){
    const j = document.querySelector(optTitleListSelector)
   
    j.innerHTML = ""
    let h = ''
    const aaa = document.querySelectorAll(optArticleSelector + customSelector) //it works..why???? klasyczny przyklad. 5 minuts later, a dobra juz kumam
       console.log(customSelector)
       console.log(customSelector + optArticleSelector)
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
    const o = '.post-tags .list';
    for(let cfc of allArt){
      const tagss =  cfc.querySelector(o)
        let ggg = '';
       // const articleTags = article.getAttribute('data-tags');
        const tagAtt = cfc.getAttribute('data-tags');
        console.log(tagAtt)
        const splitt = tagAtt.split(' ')

        for(let tagOne of splitt){
            const linkHTML = '<li><a href="#tag-' + tagOne + '"><span>' + tagOne + '</span></a></li><br>';
          ggg = ggg + linkHTML
        console.log(ggg)
        tagss.innerHTML = ggg
       // tagss.insertAdjacentHTML('afterbegin', ggg);
        }
     
       
    } 
}
gelolo();



function tagClickHandler(event){

  event.preventDefault()

    const kanoldy = this;
    
    const tuchola = kanoldy.getAttribute('href')

    const zalno = tuchola.replace('#tag-', '')
    console.log(zalno)
    
  const adi = document.querySelectorAll('a.active[href^="#tag"]')
  
  for(let ad of adi){
    ad.classList.remove('active')
  }
 
const mamaAdiego = document.querySelectorAll('a[href="' + tuchola +'" ]')
 
  for(let golebie of mamaAdiego){
    golebie.classList.add('active')
  }
 
elfDobryJakPomidor('[data-tags~="' + zalno + '"]');
 }


 function kebasa(){
    const dwabulki = document.querySelectorAll('a[href^="#tag-"]')
    for(let dw of dwabulki){
      dw.addEventListener('click', tagClickHandler)
  }
 }
kebasa()