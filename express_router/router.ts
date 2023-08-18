
import { httpMethodKey, httpGet, httpPost } from './decorators/http'
import { path, pathKey } from './decorators/path'
import { Router } from 'express'
class User {
  @httpGet
  @path('/user/info')
  info() {
    return `获取用户信息`
  }

  @httpPost
  @path('/user/login')
  login() {
    return `用户登录`
  }

  @httpGet
  @path('/user/exit')
  exit() {
    return `用户登出`
  }
}

export default (app: Router) => {
  const user = new User()
  for (let methodName in user) {
    let method = user[methodName]
    if (typeof method !== 'function') break

    let httpMethod = Reflect.getMetadata(httpMethodKey, user, methodName)

    let path = Reflect.getMetadata(pathKey, user, methodName)
    // 这里对应 app.get(url, callback)/app.post(url, callback)
    app[httpMethod](path, method)
  }
}