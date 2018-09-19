const {
  get1
} = require('./cross-domain-config');

// 当前代码对应环境
var currentEnv = process.env.currentEnv
var isBuiltMode = process.env.NODE_ENV == 'production'


// API接口地址配置模块,支持反向代理
// 解决跨域配置如get1,需要在cross-domain-config配置该属性的对应接口域名

module.exports = {
  get1: `${isBuiltMode?get1[currentEnv]:''}/t/t`,
  get2: `/2`,
  get3: `/3`,
  get4: `/4`,
  get5: `/5`,
  investbehaviour: `/roboadvisor/v1/accountdiagnosis/user/investbehaviour`
}
