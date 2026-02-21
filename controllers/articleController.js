exports.getAllArticles = (req, res) => res.send("Get articles router");
exports.createArticle = (req, res) => res.send("Post articles router");
exports.getArticleById = (req, res) => res.send(`Get article by id router: ${req.params.articleId}`);
exports.updateArticle = (req, res) => res.send(`Update article by id router: ${req.params.articleId}`);
exports.deleteArticle = (req, res) => res.send(`Delete article by id router: ${req.params.articleId}`);
