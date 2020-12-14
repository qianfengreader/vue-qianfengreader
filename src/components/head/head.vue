<template>
  <div id="all">
    <div id="lay1">
      <el-breadcrumb separator="/">
        <div class="lay1_left">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </div>
        <div class="lay1_right">
          <el-breadcrumb-item>登陆</el-breadcrumb-item>
          <el-breadcrumb-item>注册</el-breadcrumb-item>
        </div>
      </el-breadcrumb>

    </div>
    <div id="lay2"> <!--广告-->
      <img src="../head/img/tupian1.jpg"/>
    </div>
    <div id="lay3"></div> <!--搜索页-->
    <div id="lay4"></div> <!--标签页-->
    <div id="view">
      <router-view></router-view>
    </div>
  </div>


</template>

<script>
  export default {
    name: ""
  }
</script>

<style>
  #all{
    width: 1200px;
    height: 2000px;
    margin: auto ;

    border-style:solid;
    border-width:5px;
  }
  #lay1{
    background-color: gold;
    width: 1200px;
    height: 25px;
  }
  .lay1_left{/*居中 */
    margin-top: 5px;
    margin-left: 5px;
  }
  .lay1_right{
    margin-left: 1080px;
  }
  #lay2{
    background-color: salmon;
    width: 1200px;
    height: 60px;
  }
  #lay3{
    background-color: seagreen;
    width: 1200px;
    height: 75px;
  }
  #lay4{
    height: 50px;
    background-color: aquamarine;
  }
  #view{  /*子*/

  }


</style>

