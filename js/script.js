
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
  optTagsListSelector = '.list.tags';
  optCloudClassCount = 5,
  optCloudClassPrefix = 'tag-size-';

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

function kebab(tags){
  const sos = {max:0, min:999}
  for(let tortilla in tags){
    if(tags[tortilla] > sos.max){
      sos.max = tags[tortilla]
    }
    if(tags[tortilla] < sos.min){
      sos.min = tags[tortilla]
    }
  }
  return sos
}

function klasyPostaci (wojownik, mag){
  const serBałkański = wojownik - mag.min;
  const sałata = mag.max - mag.min;
  const spell = serBałkański/sałata
  const lolzon = Math.floor(spell * (optCloudClassCount - 1) +1)
  return optCloudClassPrefix + lolzon

}

function gelolo(){
  let tablica = {}
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
        if(!tablica.hasOwnProperty(tagOne)){
          tablica[tagOne] = 1;
        }else {
          tablica[tagOne]++
        }
       // tagss.insertAdjacentHTML('afterbegin', ggg);
      }
    }
    const tagListRight = document.querySelector(optTagsListSelector);

    /* [NEW] add html from allTags to tagList */
   // tagListRight.innerHTML = tablica.join(' ');
   const hello = kebab(tablica)

   let zupaZTrupa = '';

   for(let j in tablica){
    zupaZTrupa += '<li><a href="#tag-'+ j + '" class=" '+ klasyPostaci(tablica[j], hello) + ' ">' + j + '(' + tablica[j] + ')</a></li>'
    tagListRight.innerHTML = zupaZTrupa
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


function fia(){
  
  const radhan = document.querySelectorAll(optArticleSelector);

 for(let malenia of radhan){
  const margit = malenia.querySelector('.post-author')
  const melina = malenia.getAttribute('data-author')
  const renala = '<a href="#author-'+ melina +'">By:  ' + melina + '</>'
  margit.innerHTML = renala;
 }
}
fia();


function caelid(event){

  event.preventDefault()

    const kanoldy = this;
    
    const morg = kanoldy.getAttribute('href')

    const mikela = morg.replace('#author-', '')
    console.log(mikela)
    
  const dragons = document.querySelectorAll('a.active[href^="#author-"]')
  
  for(let aeyzykiel of dragons){
    aeyzykiel.classList.remove('active')
  }
 
const mamaA = document.querySelectorAll('a[href="' + morg +'" ]')
 
  for(let golebie of mamaA){
    golebie.classList.add('active')
  }
 
elfDobryJakPomidor('[data-author="' + mikela + '"]');
 }


 function cukier(){
    const anka = document.querySelectorAll('a[href^="#author-"]')
    for(let dww of anka){
      dww.addEventListener('click', caelid)
  }
 }
 cukier()
 const test = document.querySelector('.list').style.color = 'green'
 function kolorkiZDupy(){
    const zielen = document.querySelector('.tag-size-1')
    const ziele = document.querySelector('.tag-size-2')
    const ziel = document.querySelector('.tag-size-3')
    const zie = document.querySelector('.tag-size-4')
    const zi = document.querySelector('.tag-size-5')
    const test = document.querySelector('.list')
    zielen.style.color = "green";
    ziel.style.color = "red"
 }

 kolorkiZDupy()