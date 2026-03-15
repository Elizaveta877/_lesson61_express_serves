function basicAuth(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).send('Access denied. No credentials sent.');
    }
    next();
}


function validateUserInput(req, res, next) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send('Missing required fields: username and password');
    }
  }
  next();
}

function logRequest(req, res, next) {
  console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
  next();
}

function checkArticleAccess(req, res, next) {
  console.log(`Checking article access for user... ${req.params.articleId} || 'all'}`);
next();
}

module.exports = { basicAuth, checkArticleAccess, validateUserInput, logRequest };




