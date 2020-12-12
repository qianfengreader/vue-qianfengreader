<template>
  <div class="hello">
    <el-form  label-width="80px" :model="user">
      <el-form-item label="用户名">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="success" icon="el-icon-check" @click="login" circle></el-button>
    <router-link to="/registry">注册</router-link>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      user:{}
    }
  },
  methods :{
    login:function () {
      axios.post("api/user/login",this.user).then(res=>{
          if (res.data.code==200){
            //获取到用户的token 设置到cookie中
              this.$cookie.set("token",res.data.data)
            //跳转页面
            this.$router.push("/goods")
          }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
