<template>
  <div class="hello">
    <el-form  label-width="80px" :model="user">
      <el-form-item label="用户名">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="user.code"></el-input>
        <el-button type="info" icon="el-icon-message" @click="sendMail" circle></el-button>
      </el-form-item>
    </el-form>
    <el-button type="success" icon="el-icon-check" @click="registry" circle></el-button>
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
  methods:{
    sendMail:function () {
      axios.post("api/user/sendMail",{email:this.user.email}).then(res=>{
        if (res.data.code==200){
          alert(res.data.message)
        }else{
          alert(res.data.message)
        }
      })
    },
    registry:function () {
      axios.post("api/user/registy",this.user).then(res=>{
        if (res.data.code==200){
         this.$router.push("/")
        }else{
          alert(res.data.message)
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
