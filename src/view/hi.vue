<template>
    <div class="hhh">hhhhhhhh
      <div class="h22">2222</div>
      <router-view></router-view>
      <mt-button type="danger">danger</mt-button>
      <div ref="dddd" class="ff">
        <p></p>
      </div>
    </div>
</template>
<script>
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
import axios from 'axios'
// import x from '../your-api-config.js'
import { get1, get2, get3 } from '../api/your-api-config.js'
import Vue from 'vue';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  console.log(111)
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  console.log(response)
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  console.log(error)
  return Promise.reject(error);
});
// axios.post(get1, {
//   'dfdfd': 'dfdfdfdf'
// }).then(data => console.log(data))
// axios.get(get2).then(data => console.log(data))
// axios.get('/get3').then(data => console.log(data))
// axios({ url: get3, method: 'post', headers: {}, data: { dddd: 123213 }, timeout: 3000 }).then(data => console.log(data))
// axios.get('/xx/dfdf').then(data => console.log(data))

export default {
  data () {
    return { a: 1 }
  },
  mounted () {
    // this.$router.push('?dfdf')


  }
}
</script>
<style lang='scss'>
@import '../scss/mixin.scss';

.hhh {
  font-size: 50px;
  .h22 {
    // font-size: pxToRem(200);
    @include setp(font-size, 150);
  }
}
.ff {
  padding: 50px;
  border: 20px solid black;
  height: 100px;
  background: yellow;
  overflow: scroll;
  // p {
  //   // width: 2000px;
  //   // height: 100px;
  // }
}
</style>
