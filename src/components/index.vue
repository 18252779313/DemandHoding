<template>
   <a-layout id="components-layout-demo-top" class="layout">
      <a-menu
        mode="horizontal"
        :defaultSelectedKeys="['/']"
        @click='jump'
      >
        <a-menu-item key="/">提交</a-menu-item>
        <a-menu-item key="/examine">查看</a-menu-item>
      </a-menu>
      <router-view></router-view>
  </a-layout>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    jump(e){
      this.$router.push(e.key);
    }
  }
}
</script>

<style scoped>

</style>
