it('creates a new article with a title and summary', function() {
  let article = new Article('Title', 'This is a new article');
  expect(article.title).toEqual('Title')
  expect(article.summary).toEqual('This is a new article')
});

it('creates a new article with an image_url', function() {
  let article = new Article('Title', 'This is a new article', 'wwww.fake_img.com');
  expect(article.image).toEqual('wwww.fake_img.com')
});