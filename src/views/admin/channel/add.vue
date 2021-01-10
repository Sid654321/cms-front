<template>
  <div>
    <el-form :model="form" ref="form" :rules="rule">
      <el-form-item label="栏目名称" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="栏目图" prop="channelImg" :label-width="formLabelWidth">
        <el-upload
            class="avatar-uploader"
            action="string"
            :show-file-list="false"
            :http-request="uploadImg"
            :before-upload="beforeAvatarUpload">
          <img v-if="form.channelImg" :src="form.channelImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

      </el-form-item>
      <el-form-item label="父栏目" :label-width="formLabelWidth" prop="parentId">
          <treeselect v-model="form.parentId" :multiple="false" :options="options" placeholder="请选择父栏目"/>
      </el-form-item>
      <el-form-item label="摘要" :label-width="formLabelWidth" prop="summary">
        <el-input v-model="form.summary" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="位置" prop="pos" :label-width="formLabelWidth">
        <el-select v-model="form.pos" placeholder="请选择位置">
          <el-option
              v-for="item in this.posList"
              :key="item"
              :label="item"
              :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否单页" :label-width="formLabelWidth" prop="single">
        <el-switch
            v-model="form.single"
            active-color="#13ce66"
            inactive-color="#999999">
        </el-switch>
      </el-form-item>
      <el-form-item label="外链" :label-width="formLabelWidth" prop="summary">
        <el-input v-model="form.url" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="seo title" :label-width="formLabelWidth" prop="seoTitle">
        <el-input v-model="form.seoTitle" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="seo keyword" :label-width="formLabelWidth" prop="seoKeyword">
        <el-input v-model="form.seoKeyword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="seo description" :label-width="formLabelWidth" prop="seoDescription">
        <el-input v-model="form.seoDescription" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="content" :label-width="formLabelWidth" prop="content">
        <v-md-editor v-model="form.content" height="400px"></v-md-editor>
      </el-form-item>

    </el-form>
    <div  slot="footer" class="dialog-footer" align="center">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </div>
  </div>
</template>

<script>
import {create,upload,tree} from "@/api/channel";
import Treeselect from '@riophae/vue-treeselect'
export default {
  name: "add",
  components: {
    Treeselect,
  },
  data(){
    return{
      form: {
        name:'',
        channelImg:'',
        parentId:'0',
        summary:"",
        single:'false',
        url:'',
        pos:'A',
        seoTitle:'',
        seoKeyword:'',
        seoDescription:'',
        content:'',

      },
      formLabelWidth: '130px',
      rule:{
        name: [{required:true,message:"必填项不能为空"}]
      },
      // define options
      options: [ {
        id: 'a',
        label: 'a',
        children: [ {
          id: 'aa',
          label: 'aa',
        }, {
          id: 'ab',
          label: 'ab',
        } ],
      }, {
        id: 'b',
        label: 'b',
      }, {
        id: 'c',
        label: 'c',
      } ],
      posList:['A','B','C','D','E','F','G'],
    }
  },
  created() {
    this.getTree()
  },
  methods:{
    close(){
      this.$router.push('/channel')
    },
    submitForm(){
      this.$refs['form'].validate(valid=>{
        if(valid){
          if(this.form.single){
            this.form.single = 'Y';
          }else{
            this.form.single = 'N';
          }
          create(this.form).then(data=>{
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
        this.form.channelImg=data.data
      }).catch(error=>{
        this.$message.error(error)
      })

    },
    getTree(){
      tree().then(data=>{
        this.options = data.data
      }).catch(error=>{
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