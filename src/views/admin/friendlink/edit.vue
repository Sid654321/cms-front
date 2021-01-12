<template>
  <div>
    <el-form :model="form" ref="form" :rules="rule">
      <el-form-item label="标题" :label-width="formLabelWidth" prop="title">
        <el-input v-model="form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="图片" prop="path" :label-width="formLabelWidth">
        <el-upload
            class="avatar-uploader"
            action="string"
            :show-file-list="false"
            :http-request="uploadImg"
            :before-upload="beforeAvatarUpload">
          <img v-if="form.path" :src="form.path" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

      </el-form-item>
      <el-form-item label="链接" :label-width="formLabelWidth" prop="url">
        <el-input v-model="form.url" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="打开方式" :label-width="formLabelWidth" prop="target">
        <el-radio v-model="form.target" label="_blank">新建页</el-radio>
        <el-radio v-model="form.target" label="_self">当前页</el-radio>
      </el-form-item>
    </el-form>
    <div  slot="footer" class="dialog-footer" align="center">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </div>
  </div>
</template>

<script>
import {update,upload,detail} from "@/api/friendLink";
export default {
  name: "add",
  data(){
    return{
      form: {
        title:'',
        url:'',
        path:'',
        target:'_blank'

      },
      formLabelWidth: '130px',
      rule:{
        title: [{required:true,message:"必填项不能为空"}]
      },
    }
  },
  created() {
    this.getDetails()
  },
  methods:{
    close(){
      this.$router.push('/friend')
    },
    submitForm(){
      this.$refs['form'].validate(valid=>{
        if(valid){
          update(this.form).then(data=>{
            this.$message.success(data.msg)
            this.$refs['form'].resetFields()
            this.close()
          }).catch(error=>{
            this.$message.error(error)
          })
        }
      })
    },
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
        this.form.path=data.data
      }).catch(error=>{
        this.$message.error(error)
      })

    },
    getDetails(){
      let id = this.$route.query.id
      detail(id).then(data=>{
        this.form =data.data;
      }).then(error=>{
        this.$message.error(error)
      })
    }
  }
}
</script>

<style scoped>
.avatar-uploader{
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  width:80px;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>