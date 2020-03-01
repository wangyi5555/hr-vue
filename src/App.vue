<template>
<!--  <div id="app">-->
<!--    <img src="./assets/logo.png">-->
<!--    <div>-->
<!--      <p>-->
<!--        If Element is successfully added to this project, you'll see an-->
<!--        <code v-text="'<el-button>'"></code>-->
<!--        below-->
<!--      </p>-->
<!--      <el-button  @click="test1()">el-button</el-button>-->
<!--    </div>-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    // this.test1()
  },
  methods: {
    test1: function () {
      // document.cookie = 'XSRF-TOKEN = wangyi555666'
      console.log('111')
      this.$http.delete('/test').then(res => console.log(res.data))
    }
  }
}
</script>

<style>
#app {
 height: 100%;
}
</style>
