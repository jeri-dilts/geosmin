const jwt = require('jsonwebtoken')
const TOKEN_KEY = 'areallylonggoodkey'

const restrict = (req, res, next) => {
    console.log(req.headers)

    try {
        const token = req.headers.authorization.split(' ')[1]
        const data = jwt.verify(token, TOKEN_KEY)
        // res.locals.user = data
        next()
    } catch (error) {
        console.log(error)
        res.status(403).send('Unauthorized')
    }
}

module.exports = restrict
