<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link> |
      <router-link to="/about">关于</router-link>|
      <!-- <router-link :to="{path:'/profile',query:{name:'wj',age:'26'}}">档案、我的</router-link> | -->
      <router-link :to="{path:'/profile'}">档案、我的</router-link> |
      <router-link :to="'/user/'+userId">用户</router-link>
      <h1>
        <button @click="goLink" data-target='/'>home</button>
        <button @click="goLink" data-target='/about'>about</button>
      </h1>
      <keep-alive>
        <router-view/>
      </keep-alive>      
    </div>
    <tab-bar/>
  </div>
</template>
<script>
import TabBar from './components/tabBar/tabBar.vue'
export default {
  name:'App',
  data(){
    return{
      userId:'34'
    }
  },
  components:{
    TabBar
  },
  methods:{
    goLink(e){
      // console.log(e.target.dataset.target)
      this.$router.push(e.target.dataset.target)
    }
  }
}
</script>

<style>
@import url(./assets/css/base.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active{color: #42b983;}

#nav {
  padding: 30px;
}



</style>
