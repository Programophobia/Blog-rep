'use strict';


const optArticleSelector = '.post',
 optTitleSelector = '.post-title',
 optTitleListSelector = '.titles';
function generateTitleLinks(){
 /* remove contents of titleList */
 const g = document.querySelector(optTitleListSelector)
 g.innerHTML = ''
 /* ... */
 /* find all the articles and save them to variable: articles */
 /* ... */
 let html = '';
 const articles = document.querySelectorAll(optArticleSelector)
 for(let article of articles){
 /* get the article id */
 const t = article.getAttribute('id')
 /* ... */
 /* find the title element */
 const el = article.querySelector(optTitleSelector )
 /* ... */
 /* get the title from the title element */
 const titleEl = el.innerHTML
 console.log(titleEl)
 /* ... */
 /* create HTML of the link */
 const gogo = '<li><a href="#'+t+'"><span>'+titleEl+'</span></a></li>'
 /* ... */
 /* insert link into html variable */
 html += gogo
 g.innerHTML = html
 }

}
generateTitleLinks();

function titleClickHandler(event){
    console.log('Link was clicked!');
  
   /*[DONE] remove class 'active' from all article links  */
  
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
    const articleSelector = clickedElement.getAttribute("href");
  
  
    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
  
  
    /* add class 'active' to the correct article */
    targetArticle.classList.add("active");
  
  console.log(event);
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }