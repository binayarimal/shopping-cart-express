const jwt = require('jsonwebtoken');
const secret = process.env.JWT_KEY;
const withAuth = function(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        const userInfo = {
        email : decoded.email,
        id :decoded.id
      }
      req.user = userInfo
        next();
      }
    });
  }

};
const signIn = function(req, res, next){
  passport.authenticate("local")(req, res, function () {
    if(!req.user){
      res.send(req.message)
    } else {
      const token=  jwt.sign({
        email:req.user.email,
        id:req.user.id
      },process.env.JWT_KEY,
      {
        expiresIn: "1h"
      }
    )

    res.cookie('token', token, { httpOnly: true })
    .sendStatus(200);
    res.send(req.userInfo);
  }
})
}
module.exports = withAuth;
