it('creates a new article', function() {
  let article = new Article('This is a new article');
  expect(article.summary).toEqual('Hello World')
});