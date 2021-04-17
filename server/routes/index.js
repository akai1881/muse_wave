const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter')
const songsRouter = require('./songsRouter')
const commentsRouter = require('./commentsRouter')
const albumsRouter = require('./albumsRouter')
// const userRouter = require('./ratingRouter')
const profileRouter= require('./profileRouter')

router.use('/user', userRouter)
router.use('/songs', songsRouter)
router.use('/albums', albumsRouter)
router.use('/comments', commentsRouter)
router.use('/profile', profileRouter)

module.exports = router;