
# 元数据实现路由(express)
- 实现元数据构造器get | post => 配置请求方式
- 实现元数据构造器path => 请求url
- 抽象某一种类的相关接口(demo中使用的是User)，并为其指定请求方式和url及处理逻辑
- 遍历实例化后的类实例(User)，将存储在metadata中的httpMethod和url取出来
- 最后将router挂载app上