var fs = require("fs");
var express = require('express');
var path = require("path")
var app = express();
var apiRequestList = require('../src/api/your-api-config');
var requestMethods = ['get', 'post'];
var rootPath = process.cwd();
require('./checkout-domain')

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Access-Control-Allow-Headers", 'X-Custom-Heade,Content-Type');
  next();
});
// app.use(express.static(path.resolve(__dirname, '../dist')));
const domainReg = /^http.+?\/\/.+?\//
Object.keys(apiRequestList).forEach(pathKey => {
  var apiPath = apiRequestList[pathKey]
  requestMethods.forEach(method => {
    app[method](apiPath, (req, res) => {
      fs.readFile(`${rootPath}/src/mock${ apiPath}.json`, (err, data) => {
        if (err) {
          res.status(404)
          res.json('异常，查看本地是否配置对应接口的json文件，或者路径是否正确')
          console.error(err)
          return
        };
        res.json(JSON.parse(data))
      })
    })
  })
})
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('本地server启动成功,接口地址：http://localhost:3000')
});
