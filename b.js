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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

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

function calculateTagsParams(tags) {
  const params = {max:0, min:9999999};
  for(let tag in tags) {
    console.log(tag + ' is used ' + tags[tag] + ' times');
    if(tags[tag] > params.max) {
      params.max = tags[tag];
    }
    if(tags[tag] < params.min) {
      params.min = tags[tag];
    }
  }
  return params;
}

const optCloudClassCount = 5;
const optCloudClassPrefix = 'tag-size-';

function klasalol(x, y){
const t = x-y.min
const c = y.max-y.min
const per = t/c
const classs = Math.floor(per*(optCloudClassCount-1)+1)
return optCloudClassPrefix + classs
}

function generateTags(){
  /* find all articles */
  let allTags = {};
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for (let article of articles) {

    /* find tags wrapper */
    const tagList = article.querySelector(optArticleTagsSelector);
    console.log(tagList);
const tagsParams = calculateTagsParams(allTags)
    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log(tag);

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '" class=" '+ klasalol(allTags[tag], tagsParams)+' "><span>' + tag + '</span></a></li><br>';
      console.log(linkHTML);

      /* add generated code to html variable */
      //html = html + linkHTML;
      tagList.insertAdjacentHTML('afterbegin', linkHTML);
      if(!allTags.hasOwnProperty[linkHTML]){
allTags[linkHTML] = 1
      }
      else{
        allTags[linkHTML]++
      }
    }
    /* insert HTML of all the links into the tags wrapper */
    //tagList.innerHTML = html;

    console.log(html);
  }

  const tagList = document.querySelector('.list.tags');
  /* [NEW] add html from allTags to tagList */
 // tagList.innerHTML = allTags.join(' ');
 let h =''
 for(let tag in allTags){
  h += tag + '('+allTags[tag]+')'
 }
 tagList.innerHTML = h
}
generateTags();



function tagClickHandler(event){
  /* prevent default action for this event */ //Why?
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', ''); 

  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for (let acvtiveTag of activeTags) {

    /* remove class active */
    acvtiveTag.classList.remove('active');

  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const hrefTags = document.querySelectorAll('a[href="' + href + '"]'); //nie rozumiem tego
  console.log(hrefTags, href);

  /* START LOOP: for each found tag link */
  for (let hrefTag of hrefTags) {

    /* add class active */
    hrefTag.classList.add('active');

  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
  console.log(titleClickHandler);
}

function addClickListenersToTags(){
  /* find all links to tags */
  const allTagLinks = document.querySelectorAll('a[href^="#tag-"]'); 
  /* START LOOP: for each link */
  for (let tagLink of allTagLinks){
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
    console.log(addClickListenersToTags);
  }
}
addClickListenersToTags();

function addAuthors(){
  const allAr = document.querySelectorAll('.post')
  let html = ''
  for(let a of allAr){
    const t = a.getAttribute('data-author')
    console.log(t)
    const linkHTML = '<li><a href="#author-' + t + '"><span>' + t + '</span></a></li><br>';
const where = a.querySelector('.post-author')
where.innerHTML = linkHTML
  }
}
addAuthors()

function p(){
const clicked = this
  const author = clicked.getAttribute('href')
  const au = author.replace('#author-', '')
  const mal = document.querySelectorAll('a.active[href^="#author-"]')
  for(let vv of mal){
    vv.classList.remove('active')
  }
  clicked.classList.add('active')
  
  generateTitleLinks('[data-author="'+au+'"]')
}


function j(){
  const allAutho = document.querySelectorAll('a[href^="#author-"]')
for(let gk of allAutho){
gk.addEventListener('click', p)
}
}
j()

