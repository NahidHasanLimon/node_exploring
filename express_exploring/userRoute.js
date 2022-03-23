const router = require('express').Router()
const {
    login,logout,profile,singleUser,createUser,getAllUser

} = require('./userController')
router.get('/login', login)
router.get('/logout',logout )
router.get('/profile',profile )
router.get('/:userID', singleUser)
router.post('/create', createUser)
router.get('/users', getAllUser )

module.exports = router