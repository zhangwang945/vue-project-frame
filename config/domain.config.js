// 所有环境域名配置
// 本地调试其他环境接口，npm run dev -@[prod|uat|...]会自动开启代理访问对应环境的接口
module.exports = {
  domainConfig: {
    local: 'http://localhost:3000',
    prod: 'http://localhost:3001', //产线
    uat: 'http://localhost:3002',
    test1: 'http://localhost:3003',
    test2: 'http://10.29.227.20:58080',
    product: 'http://localhost:3005'
  },
  releaseArr: ['prod', 'uat'] //产线环境列表，产线环境会压缩代码

}
