<template>
  <div id="main_all">

    <div id="main_lay1">
      <el-row :gutter="20">
        <el-col :span="5">
          <div class="grid-content bg-purple">

            <div class="main_lay1_left"><!--种类-->
              <div class="biaoqian">

              </div>
            </div>

          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple">

            <div class="main_lay1_mid">
              <div> <!--轮播图-->
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>

          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">

            <div class="main_lay1_right">

            </div>

          </div>
        </el-col>
      </el-row>
    </div>

    <div id="main_lay2">
      <img src="../head/img/tupian1.jpg"/>
    </div>
    <!------------------------lay 3 head------------------------->
    <div id="main_lay3_head">
      <el-row :gutter="20">
        <el-col :span="5"><div class="grid-content bg-purple">
          本周推荐
        </div></el-col>
        <el-col :span="14"><div class="grid-content bg-purple">
          编辑精选
        </div></el-col>
        <el-col :span="5"><div class="grid-content bg-purple">
          网文新风
        </div></el-col>
      </el-row>
    </div>
    <!------------------------lay 3 -------------------------->
    <div id="main_lay3"></div>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple">
        <div class="main_lay3_left">

        </div>
      </div></el-col>
      <!-------------------------mid ---------------------------->

      <el-col :span="14"><div class="grid-content bg-purple">
        <div class="main_lay3_mid">

          <el-row>
            <el-col :span="12"><div class="grid-content bg-purple">
              <div class="main_lay3_mid_lay1">
                <!--轮播图-->
                <el-carousel :interval="4000" type="card" height="200px">
                  <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div></el-col>

            <el-col :span="12"><div class="grid-content bg-purple-light">
              <div class="main_lay3_mid_lay1">

              </div>
            </div></el-col>
          </el-row>
          <!-------------------------1------------------------------>
          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="main_lay3_mid_lay23">

              </div>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="main_lay3_mid_lay23">

              </div>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="main_lay3_mid_lay23">

              </div>
            </div></el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="main_lay3_mid_lay23">

              </div>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="main_lay3_mid_lay23">

              </div>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="main_lay3_mid_lay23">

              </div>
            </div></el-col>
          </el-row>
          <!----------------------2 3 --------------------------->
          <el-row>
            <el-col :span="10"><div class="grid-content bg-purple">
              <div class="main_lay3_mid_lay4">

              </div>
            </div></el-col>
            <el-col :span="10" :offset="4"><div class="grid-content bg-purple-light">
              <div class="main_lay3_mid_lay4">

              </div>
            </div></el-col>
          </el-row>
          <!---------------------4------------------------------------->

        </div>
      </div></el-col>
      <!------------------------mid/-------------------------->

      <el-col :span="5"><div class="grid-content bg-purple">
        <div class="main_lay3_right">

        </div>
      </div></el-col>
    </el-row>

    <div id="main_lay4">
      <img src="../head/img/tupian1.jpg"/>
    </div>

    <div id="main_lay5_head">
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple">
          月票榜
        </div></el-col>
        <el-col :span="4":offset="1"><div class="grid-content bg-purple">
          热销榜
        </div></el-col>
        <el-col :span="4":offset="1"><div class="grid-content bg-purple">
          最新发布榜
        </div></el-col>
        <el-col :span="4":offset="1"><div class="grid-content bg-purple">
          阅读指数榜
        </div></el-col>
        <el-col :span="4":offset="1"><div class="grid-content bg-purple">
          字数榜
        </div></el-col>
      </el-row>
    </div>
    <!--------------------------5------------------------------------->
    <div id="main_lay5">
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple">
          <div class="main_lay5_lay1">

          </div>
        </div></el-col>
        <el-col :span="4":offset="1"><div class="grid-content bg-purple">
          <div class="main_lay5_lay1">

          </div>
        </div></el-col>
        <el-col :span="4":offset="1"><div class="grid-content bg-purple">
          <div class="main_lay5_lay1">

          </div>
        </div></el-col>
        <el-col :span="4":offset="1"><div class="grid-content bg-purple">
          <div class="main_lay5_lay1">

          </div>
        </div></el-col>
        <el-col :span="4":offset="1"><div class="grid-content bg-purple">
          <div class="main_lay5_lay1">

          </div>
        </div></el-col>
      </el-row>
    </div>



    </div>

</template>

<script>
  import axios from 'axios';
    export default {
        name: "",
      data(){
          return{
            booklist:[]
          }
      },
      methods:{

      }
    }
</script>



<style>
  #main_lay1{
    width: 1200px;
    height: 300px;
    background-color: skyblue;
  }
  .main_lay1_left{
    width: 100%;
    height: 300px;
    background-color: fuchsia;
  }
  .biaoqian{

  }
  .main_lay1_mid{
    width: 100%;
    height: 300px;
    background-color: gold;
  }
  .main_lay1_right{
    width: 100%;
    height: 300px;
    background-color: gold;
  }
  /*---------------------lay2---------------*/
  #main_lay2{

    margin-top: 10px;
    margin-bottom: 10px;/*向下空10px*/
  }

  #main_lay3_head{
    font-size: 25px;
    height: 50px;
  }

  /*---------------------lay3---------------*/
  .main_lay3_left{
    width: 100%;
    height: 600px;
    background-color: seagreen;
  }
  .main_lay3_mid{
    width: 100%;
    height: 600px;
    background-color: sandybrown;
  }
  .main_lay3_mid_lay1{
    height: 200px;
  }
  .main_lay3_mid_lay23{
    height: 130px;
  }
  .main_lay3_mid_lay4{
    height: 60px;
  }
  .main_lay3_right{
    width: 100%;
    height: 600px;
    background-color: salmon;
  }
  /*-----------------lay  4-------------------------*/
  #main_lay4{
    margin-bottom: 10px;
  }
  /*-----------------lay  5--------------------------*/
  .main_lay5_lay1{
    height: 300px;
  }
</style>


<style> /*轮播图*/
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>


<style>/*分栏*/
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
