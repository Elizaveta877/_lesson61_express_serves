const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const { checkArticleAccess } = require('../middleware/authMiddleware');

router.get('/', checkArticleAccess, articleController.getAllArticles);
router.post('/', checkArticleAccess, articleController.createArticle);
router.get('/:articleId', checkArticleAccess, articleController.getArticleById);
router.put('/:articleId', checkArticleAccess, articleController.updateArticle);
router.delete('/:articleId', checkArticleAccess, articleController.deleteArticle);

module.exports = router;
