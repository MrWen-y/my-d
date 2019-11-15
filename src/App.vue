<template>
  <div id="app">
    <!-- <div id="header"></div>
    <main>
      
    </main>
    <div id="footer">
      <div v-for="item in menu" :key="item.name"><i :class="item.icon"></i><span>{{item.text}}</span></div>
    </div> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      menu:[{
        name:"home",
        path:"/home",
        text:"首页",
        icon:"el-icon-s-home"
      },{
        name:"search",
        path:"/search",
        text:"分类搜索",
        icon:"el-icon-search"
      },{
        name:"cart",
        path:"/cart",
        text:"购物车",
        icon:"el-icon-shopping-cart-2"
      },{
        name:"mine",
        path:"/mine",
        text:"我的文轩",
        icon:"el-icon-user-solid"
      }]
    }
  },
}
</script>

<style lang="css">
  *{
    margin: 0;
    padding: 0;
  }
  html, body {
  height: 100%;
  box-sizing: border-box;
  }
  body {
  display: flex;
  flex-direction: column;
  }
  #app{
    height: 100%;
  }
  #header{
    height: 39.6px;
  }
  main{
    flex: 1;
    height: 100%;
    /* background: pink */
  }
  #footer{
    /* position: fixed; */
    height: 42.6px;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
  }
  #footer div{
    /* position:absolute; */
    display: flex;
    flex-direction: column;
    align-items:center;
  }
  #footer div i {
    font-size: 24px;
  }
  #footer div span{
    font-size: 12px
  }
</style>
