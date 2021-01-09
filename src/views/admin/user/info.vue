<template>
  <div>
    <el-form :model="form" ref="form" :rules="rule">
      <el-form-item label="头像" :label-width="formLabelWidth" >
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :http-request="uploadImg"
            :before-upload="beforeAvatarUpload">
          <img v-if="form.avatar" :src="form.avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="账号" :label-width="formLabelWidth" prop="userName">
        <el-input v-model="form.userName" autocomplete="off" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
        <el-input v-model="form.password" autocomplete="off" type="password" placeholder="不填写即为保持原密码"></el-input>
      </el-form-item>
      <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickName">
        <el-input v-model="form.nickName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>

    </el-form>
    <div  slot="footer" class="dialog-footer" align="center">
      <el-button type="primary" @click="submitForm">保 存</el-button>
    </div>
  </div>
</template>

<script>
import token from "@/token";
import {update, upload} from "@/api/user";

export default {
  name: "info",
  data(){
    return{
      form: {
        id:'',
        userName:'',
        password:'',
        nickName:'',
        email:'',
        avatar:"",
      },
      formLabelWidth: '60px',
      rule:{
        userName: [{required:true,message:"必填项不能为空"}],
      },

    }
  },
  created() {
    this.form = token.getUser()
  },
  methods: {
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    uploadImg(param){
      const formData = new FormData();
      formData.append("file",param.file)
      upload(formData).then(data=>{
        this.form.avatar=data.data
      }).catch(error=>{
        this.$message.error(error)
      })

    },
    submitForm(){
      this.$refs['form'].validate(valid =>{
        if (valid){
          update(this.form).then(data=>{
            this.$message.success(data.msg)
            token.setUser(data.data)
          }).catch(error=>{
            this.$message.error(error)
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  width: 178px;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>