"use strict";

document.addEventListener("DOMContentLoaded", function() {

  let noArticleSelected  = document.querySelector('.no-article-selected');
  let articles = document.querySelectorAll('.article');
  let articleList = document.querySelector('article-list');
  let readArticle = document.querySelector('.read-article');
  getArticleAPI();
  
  

  articles.forEach((article) => {
    article.addEventListener('click', () => {
      noArticleSelected.style.visibility = "hidden";
      readArticle.style.visibility = "visible";
    });
  })

  // function createArticle ()
  function getArticleAPI() {
    fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail&q=latest")
    .then((response) => response.json())
    .then(data => {
      // console.log(data)
      //let url = data.response.results[0].webUrl
      let results = data.response.results;
      results.forEach((article) => {
        let url = article.webUrl;
        extractArticle(url);
      });
      console.log(results);
      // extractArticle(url);
      //summariseArticle(url);
    });
  }

  function extractArticle(articleUrl) {
    fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url=${articleUrl}`)
    .then((response) => response.json())
    .then(data => {
      let title = data.title;
      let img = data.image; 
      console.log(data)
      console.log(title)
      console.log(img)
      //let newArticle = new Article(title, )
       
    });
  }

  function summariseArticle(articleUrl) {
    fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleUrl}`)
    .then((response) => response.json())
    .then(data => {
        console.log(data)
    });
  }
  // .then((response) => response.json())
  // .then(data => {
  //   const newArticle = createNote(data.emojified_text, idCount);
  //   appendToList(newNote)
  // })

});
