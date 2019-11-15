<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#262626"
      active-text-color="#f41e33"
      style="position:fixed;"
    >
      <el-menu-item><i class="el-icon-arrow-left"></i></el-menu-item>
      <el-menu-item 
      :index="item.id" 
      style="width:140px;text-align:center" 
      v-for="item in menu" 
      :key="item.id"
      
      >{{item.text}}</el-menu-item>
      <el-menu-item>
        <el-col :span="12">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link" style="font-size:30px">
              ···
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item2 in menu2" :key="item2.text" :icon="item2.icon">{{item2.text}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-menu-item>
    </el-menu>
    <div class="main">
        <div id="img">
        <img :src="info.img" alt="">
    </div>
    <div id="base-info">
        <h3 class="title">{{info.name}}</h3>
        <div class="price">
            <span class="price-n"><b>{{info.price1}}</b></span>
            <del class="price-o">￥{{(info.price1.slice(1)/0.7).toFixed(1)}}</del>
            <span class="z">7.31折</span>
            <i class="el-icon-edit-outline"></i>
        </div>
        <div class="author">
        作者：<b>{{info.author}}</b>
        </div>
        <div class="pub">
        出版社：<b>人民文学出版社</b>
        </div>
    </div>
    <div class="detail-banner">
        <img src="http://static.winxuancdn.com/topic/subject/201910/jf/640-90-1.jpg?201911121647" alt="" width="100%">
    </div>
    <div class="num">
        数量：<el-input-number v-model="num" :min="1" :max="99" label="描述文字"></el-input-number>
    </div>
    <div class="cart-bar">
        <div class="btn-l">
            <a href="#"><i class="el-icon-s-home"></i><span>首页</span></a>
            <a href="#"><i class="el-icon-present"></i><span>收藏</span></a>
            <a href="#"><i class="el-icon-shopping-cart-2"></i><span>购物车</span></a>
        </div>
        <div class="btn-r">
            <el-button-group style="width:100%">
                
                <el-button type="danger" :plain="true" icon="el-icon-shopping-cart-2" style="width:50%" @click="addCart">添加到购物车</el-button>
                <el-button type="warning" icon="el-icon-goods" style="width:50%">立即购买</el-button>
            </el-button-group>
        </div>
    </div>    
    </div>
  </div>
</template>

<script>
// const axios = require('axios')
export default {
  data() {
    return {
        num:1,
        activeIndex:1,
        menu:[{
            text:"基本信息",
            id:1
        },{
            text:"商品详情",
            id:2
        },{
            text:"用户评价",
            id:3
        }],
        menu2:[{
          text:"首页",
          icon:"el-icon-s-home"
        },{
          text:"分类搜索",
          icon:"el-icon-search"
        },{
          text:"在线客服",
          icon:"el-icon-user-solid"
        },{
          text:"我的文轩",
          icon:"el-icon-user-solid"
        }],
        info:{}
    };
  },
  methods:{
      async getData(){
      // 获取到商品id
      // let {id} = this.$router.params
      let id ="5dcba0237351271e3316b82d"
      let {data:{data}} =await this.$axios.get(`http://localhost:1910/user/${id}`)
      window.console.log(data);
      // 得到数据把数据传给info
      let {author,img,name,price1}=data[0]
      this.info={author,img,name,price1}
 
    },
    addCart(){
        this.$message({
          message: '成功加入购物车~',
          type: 'success'
        });
    }
  },
  created(){
    this.getData()
  }
};
</script>

<style lang="scss">
a{text-decoration: none}
.main{overflow: hidden;margin-bottom: 60px}
#img{width: 100%;text-align: center;padding: 20px;border-bottom: 1px solid #ccc;margin-top: 60px;}
#img img{width: 272px;height: 272px;}
#base-info{padding: 7px 23px }
.title{color:#262626;margin-bottom: 3px;font-weight: 300}
.price{margin-bottom: 20px;position: relative;}
.price .price-n{color:#f41e33;margin-right: 20px;}
.price .price-n b{font-size: 24px}
.price .price-o{color:#999;font-size: 12px;margin-right: 20px;}
.price .z{background-color: #fd5969;color:#fff;width: 28px;height: 13px;font-size: 12px;border-radius: 4px;}
.price i{color:#f41e33;font-size: 36px;right: 0;position:absolute}
.author,.pub{color:#999;font-size: 12px;}
.author b,.pub b{color:#1D66B2}
.num{margin: 23px;color: #999;}
.cart-bar{border-top: 1px solid #cccccc;width: 100%;position:fixed;bottom: 0;z-index: 201;background-color: #fff;height: 2.44rem;}
.btn-l{width: 30%;display: flex;flex-direction: row;justify-content: space-around;float: left;}
.btn-l a{display: flex;flex-direction: column;align-items: center;color:#666;width: 57px;}
.btn-l a:nth-of-type(2){border-left: 1px solid #cccccc;border-right: 1px solid #cccccc}
.btn-l a i{font-size: 24px;}
.btn-l a span{font-size: 14px;}
.btn-r{float: left;width: 70%;}
</style>