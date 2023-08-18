export const httpMethodKey = Symbol('router:httpMethod')

export const httpGet = (target: any, propertyKey: string) => Reflect.defineMetadata(httpMethodKey, 'get', target, propertyKey)

export const httpPost = (target: any, propertyKey: string) => Reflect.defineMetadata(httpMethodKey, 'post', target, propertyKey)