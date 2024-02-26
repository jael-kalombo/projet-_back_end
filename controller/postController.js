const posts = require('../model/postsModel')
const sauvegarder = (req, res) => {
    const post = req.body
    post.id = posts.length + 1
    post.tweet = 0;
    post.retweet = 0
    posts.push(req.body)
    res.json(posts)
    

};

module.exports = { sauvegarder }
