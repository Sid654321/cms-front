<template>
  <el-row>
    <el-col :span="20">
      <table border="0" class="logo">
        <tr>
          <td>
            <img src="../../assets/logo.png">
          </td>
          <td>
            CMS后台管理系统
          </td>
        </tr>
      </table>
    </el-col>
    <el-col :span="4" align="right">
        <el-dropdown trigger="click" @command="handleCommand" style="margin-top: 20px">
          <el-link class="user" :underline="false">
            <table>
              <tr>
                <td valign="middle"><img src="../../assets/image/user.jpg"></td>
                <td valign="top">{{userName}}</td>
                <td valign="top">
                  <el-icon class="el-icon-caret-bottom"></el-icon>
                </td>
              </tr>
            </table>
          </el-link>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="index">网站首页</el-dropdown-item>
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="password">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import token from "@/token";

export default {
  name: "Header",
  data(){
    return{
      userName:token.getUser().userName
    }
  },
  methods:{
    handleCommand(){

    }
  }

}
</script>

<style scoped>
.logo{
  height: 60px;
  color: #FFFFFF;
  font-size: 22px;
  font-weight: bold;
}
.logo img{
  width: 50px;
  height: 50px;
  margin-top: 1px;
}
.user{
  color: #FFFFFF !important;
  font-size: 14px;
}
.user img{
  width: 20px;
  height:20px;
  border-radius: 10px;
}
</style>