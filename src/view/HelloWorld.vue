<template>
  <div class="hello" style="height:1000px">
    <ul>
      <li><div @click="toHi" class="bb">hihihi{{ma}}</div></li>
      <div @click="tt(12)">点击</div>
      <mt-button type="danger">danger</mt-button>
    </ul>
    <slot-test>
      <template slot-scope='{gg}'>
        {{gg}}
      </template>
    </slot-test>
  </div>
</template>

<script>
import { Button } from 'mint-ui';
import slotTest from '../components/slotTest'

Vue.component(Button.name, Button);
import { createNamespacedHelpers, } from 'vuex'
const { mapState, mapActions, mapGetters, mapMutations } = createNamespacedHelpers('moduleA')
import { get1, get2, get3, investbehaviour } from '../api/your-api-config.js'
window.onscroll = function () {
  console.log(document.documentElement.scrollHeight);

}
axios.get(get1).then(data => console.log(data))
axios.get(investbehaviour).then(data => console.log(data))
export default {
  // name: 'HelloWorld',
  components: { slotTest },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState(['ma']), ...mapGetters(['maa'])
  },
  methods: {
    ...mapMutations(['xx']), ...mapActions(['tt']),
    toHi () {
      this.$router.push({ name: 'hi' })
    }
  },
  mounted () {
    console.log(new Set([1, 1, 2, 2]));

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
