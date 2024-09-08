 'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  event.preventDefault();
  const clickedElement = this;
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');


  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);


  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');

  console.log(event);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html = '';

  for (let article of articles) {
    /* get the article id */

    const articleId = article.getAttribute('id'); //I think I can also do: const articleId = optArticleSelector.getAttribute ('id') ??

    /* find the title element */

    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML; 
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* insert link into titleList */
    html = html + linkHTML;
    
    //Cwiczenie
    //titleList.insertAdjacentHTML("afterend", linkHTML); 
  }
  console.log(html);
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks(); 

function jajecznica(tags){
  const params = {}
 tags.max = 0
 tags.min=99
  for(let tag of tags){
    if(tags[tag] > params.max){
      params.max = tags[tag]
    }
    if(tags[tag] < params.min){
      params.min = tags[tag]
    }
  }

}
function liczymu(){

}
liczymu()
function generateTags(){
 
    const allA = document.querySelectorAll('.post')
    let allTags = {};
    for(let g of allA){
        const wrap = g.querySelector('.list')
        let gt = ''
        const att = g.getAttribute('data-tags')
        console.log(att)
        const arr = att.split(' ')
        console.log(arr)
        for(let b of arr){
            const v = '<li><a class="g" href="#tag-'+b+'"> '+b+' </a></li><br>'
            gt+=v
            
      if(!allTags.hasOwnProperty(tag)){
        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1
      }
      else{
        allTags[tag ++]
      }

        }
        wrap.innerHTML = gt
    }

    const fooo = jajecznica(allTags)
    const zjeba = ''

    zjeba =+ tag + '('+allTags[tag]+')'
    wraper.innerHTML = zjeba
 
}
generateTags(); 

function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault()
    /* make new constant named "clickedElement" and give it the 
  value of "this" */
  const clickedAl = this
    /* make a new constant "href" and read the attribute "href" of 
  the clicked element */
  const href = clickedAl.getAttribute('href')
    /* make a new constant "tag" and extract tag from the "href" 
  constant */
  const tag = href.replace('#', '')
    /* find all tag links with class active */
    const alltagsA = document.querySelectorAll('.g.active')
    for(let fff of alltagsA){
        fff.classList.remove('.active')
    }
   /* START LOOP: for each active tag link */
   
    /* remove class active */
  /* END LOOP: for each active tag link */
  /* find all tag links with "href" attribute equal to the "href" 
constant */
const nn = document.querySelectorAll('a[href="'+href+'"]')
  /* START LOOP: for each found tag link */
  for(let cdcd of nn){
    cdcd.classList.add('active')
  }
    /* add class active */
  /* END LOOP: for each found tag link */
  /* execute function "generateTitleLinks" with article selector 
  
as argument */
generateTitleLinks('[data-tags~="' + tag + '"]');
 }
 function addClickListenersToTags(){
  /* find all links to tags */
  const alllolo = document.querySelectorAll('a[href^="#tag-"]')
  /* START LOOP: for each link */
  for(let ffff of alllolo){
    ffff.addEventListener('click', tagClickHandler)
    console.log('ffffff')
  }
    /* add tagClickHandler as event listener for that link */
  /* END LOOP: for each link */
 }
 addClickListenersToTags();


 function pierdolnik() {
  //wszystkie wrapery
  const getAlllo = document.querySelectorAll('.post')
  for(let hh of getAlllo){
    const odczyt = hh.getAttribute('data-author')
    const wrapper = hh.querySelector('.post-title')
    let wpis = ''
    const nowe = '<li><a class="g" href="#tag-'+odczyt+'"> '+odczyt+' </a></li><br>'
    wrapper.innerHTML = nowe
  }
 }

 pierdolnik()


 function generateTagsddddddddddddd(){
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = [];
  /* find all articles */
  const allArt = document.querySelectorAll('.post')
  /* START LOOP: for every article: */
  for(let gf of allArt){
    const cd = gf.querySelector('.')
  }
    /* find tags wrapper */
    /* make html variable with empty string */
    /* get tags from data-tags attribute */
    /* split tags into array */
    /* START LOOP: for each tag */
      /* generate HTML of the link */
      /* add generated code to html variable */
      /* [NEW] check if this link is NOT already in allTags 
*/
      if(allTags.indexOf(linkHTML) == -1){
        /* [NEW] add generated code to allTags array */
        allTags.push(linkHTML);
      }
    /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
  /* END LOOP: for every article: */
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);
  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTags.join(' ')
    }


