import { Request, Response } from 'express'

export const pathKey = Symbol('router:path')

export const path = (path: string): Function => {
  return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => {
    Reflect.defineMetadata(pathKey, path, target, propertyKey)
    if (!descriptor.value) return;

    // 保存原有的函数(请求的方法)
    const oldMethod = descriptor.value
    descriptor.value = (req: Request, res: Response) => {
      const params = Object.assign({}, req.body, req.query)
      // 传入参数并执行api方法
      const result = oldMethod.call(this, params)

      res.send(result)
    }
  }
}