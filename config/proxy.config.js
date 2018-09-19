// 代理自动配置模块
const currentEnv = process.env.currentEnv
const domainConfig = require('./domain.config').domainConfig || ''
const crossDomainConfig = require('../src/api/cross-domain-config')
const apiConfig = require('../src/api/your-api-config') || ''
const envDomain = process.env.domain
console.log('代理域名:' + envDomain);

const proxyConfig = {};
Object.keys(apiConfig).forEach(key => {
  proxyConfig[apiConfig[key]] = {
    target: crossDomainConfig[key] ? crossDomainConfig[key][currentEnv] : envDomain,
    changeOrigin: true,
    // pathRewrite: {
    //   '^/test1': '' //需要rewrite的,
    // }
  }
})
console.log(proxyConfig);

module.exports = { ...proxyConfig
}
