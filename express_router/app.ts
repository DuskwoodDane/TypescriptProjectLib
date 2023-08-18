import 'reflect-metadata'

import router from './router'
import * as express from 'express'

const app = express()

router(app)
//  接口逻辑
// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Hello World'
//     })
// })
// app.post('/user/login', (req, res) => {
//     // 登陆
// })
// // ……

app.listen(3000, () => {
	console.log('start listening on localhost:3000')
})