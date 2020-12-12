<template>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">订单管理</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
      </el-menu>

      <el-row>
        <el-col :span="8" v-for="(o, index) in goodsList" :key="o.id" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
              <span>{{o.goodsName}}</span>
              <div class="bottom clearfix">
                <time class="time">{{o.comment}}|{{o.price}}</time>
                <el-button type="text" class="button" @click="addShopCart(o.id)">加入购物车</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import axios from 'axios';
  axios.defaults.withCredentials=true;
    export default {
        name: "",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          goodsList:[]
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          if(key==1){
            this.$router.push("/shopcart")
          };
        },
        findAll:function () {
         axios.get("http://localhost:7000/goods/findAll").then(res=>{
              this.goodsList = res.data.data;
         })
        },
        addShopCart:function (id) {
          axios.post("http://localhost:7000/goods/addShopCart",{id:id}).then(res=>{
            if (res.data.code==200){
              alert("添加购物车成功")
            }
          })
        }
      },
      mounted(){
          this.findAll();
      }

    }
</script>

<style scoped>

</style>
