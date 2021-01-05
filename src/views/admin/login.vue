<template>
  <div class="login-page">
    <div class="login-page-bg">
      <h2>CMS后台登录系统</h2>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item prop="userName">
          <el-input placeholder="请录入用户名" v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请录入密码" type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item style="font-size: 12px;">
          <el-button style="width: 100%;font-size: 16px;" type="primary" :loading="loading" @click="submit">立即登录</el-button>
          建议使用chrome、firefox浏览器,©copyright2020
        </el-form-item>
      </el-form>

    </div>


  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      form:{
        userName:'admin',
        password:'123456',
      },
      loading:false,
      rules:{
        userName:[{required:true,message:'请录入用户名'}],
        password:[{required:true,message:'请录入登录密码'}],
      }
    }
  },
  methods:{
    submit(){
      this.$refs['form'].validate(valid=>{
        if(valid){
          this.loading = true
          //执行登录操作
          this.$store.dispatch('login',this.form).then(()=>{
            //执行页面跳转
            this.$router.push('/index')
          }).catch(error=>{
            this.loading = false
            this.$message.error(error)
          })
        }
      })
    }
  }
}
</script>

<style  scoped>
.login-page{
  height: 100%;
  background:url("../../assets/image/login-bg6.jpg") no-repeat;
  background-size: cover;
}
.login-page-bg{
  position: absolute;
  top: 25%;
  left: 30%;
  right: 30%;
  bottom: 30%;
  background-color: #ffffff;
  border-radius: 5px;
  padding-top: 20px;
  text-align: center;
  color: #444444;
  padding-right: 50px;
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;

}
.login-page-bg h1{
  margin-bottom: 20px;
}
</style>