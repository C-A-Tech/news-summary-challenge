"use strict";

document.addEventListener("DOMContentLoaded", function() {

  let noArticleSelected  = document.querySelector('.no-article-selected');
  let articles = document.querySelectorAll('.article');
  let readArticle = document.querySelector('.read-article');
  console.log(readArticle)

  articles.forEach((article) => {
    article.addEventListener('click', () => {
      noArticleSelected.style.visibility = "hidden";
      readArticle.style.visibility = "visible";
    })
  })

});