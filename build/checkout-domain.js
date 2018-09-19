// const releaseArr = ['prod', 'uat'] //产线字段
// [xx, scriptFile, envParam, ...params] = process.argv;
var data = require('../config/domain.config');
[excuteAction, scriptFile, ...params] = JSON.parse(process.env.npm_config_argv).original

// process.env.currentEnv = envParam ? envParam : process.env.currentAction == 'build' ? 'production' : 'development'
function judge(envParam) {
  if (!envParam) return process.env.currentAction == 'build' ? 'prod' : 'local'
  var env = envParam.slice(2, envParam.length);
  if (data.domainConfig[env]) return env
  console.error('***************************************\n选择环境错误\n***************************************')
  process.exit()
}
var remoteEnv = process.env.currentEnv = judge(params.find(v => /^-@/.test(v)))
process.env.domain = data.domainConfig[remoteEnv]
process.env.excuteEnv = remoteEnv
process.env.isRelease = data.releaseArr.indexOf(remoteEnv) != -1
// HOST配置为本机ip地址
process.env.HOST = getIPAdress()
// 获取本机IP地址
function getIPAdress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}
console.log('ip:' + getIPAdress());
