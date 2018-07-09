<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="area">
      <el-area :data="area" @change="changeData"></el-area>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data() {
    return {
      area: null
    }
  },
  mounted() {
    // 模拟异步
    setTimeout(() => {
      this.area = ['北京市', '市辖区', '海淀区']
    }, 5000);
  },
  methods: {
    changeData(data) {
      console.log(data)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.area {
  margin: 0 auto;
  width: 50%;
}
</style>
