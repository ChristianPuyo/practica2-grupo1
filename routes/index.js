const { Router } = require("express");
const studentRouter = require('./studentRoutes') 
const departmentRouter = require('./departmentRoutes')
const planRouter = require('./planRoutes')
const teacherRouter = require('./teacherRoutes')
const periodoRouter = require('./periodRoutes')
const courseRouter = require('./courseRoutes')
const groupRouter = require('./groupRoutes')
const enrollmentRouter = require('./enrollmentRoutes')


const router = Router();

router.use('/student', studentRouter)
router.use('/department',departmentRouter)
router.use('/plan', planRouter)
router.use('/teacher', teacherRouter)
router.use('/period', periodoRouter)
router.use('/course', courseRouter)
router.use('/group', groupRouter)
router.use('/enrollment', enrollmentRouter)


module.exports = router;