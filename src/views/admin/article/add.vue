<template>
  <div>
    <el-form :model="form" ref="form" :rules="rule">
      <el-form-item label="文章名称" :label-width="formLabelWidth" prop="title">
        <el-input v-model="form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所属栏目" :label-width="formLabelWidth" prop="channelId">
        <treeselect v-model="form.channelId" :multiple="false" :options="options" placeholder="请选择父栏目"/>
      </el-form-item>
      <el-form-item label="图片" prop="titleImg" :label-width="formLabelWidth">
        <el-upload
            class="avatar-uploader"
            action="string"
            :show-file-list="false"
            :http-request="uploadImg"
            :before-upload="beforeAvatarUpload">
          <img v-if="form.titleImg" :src="form.titleImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="摘要" :label-width="formLabelWidth" prop="summary">
        <el-input v-model="form.summary" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="外链" :label-width="formLabelWidth" prop="url">
        <el-input v-model="form.url" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="作者" :label-width="formLabelWidth" prop="author">
        <el-input v-model="form.author" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="评论状态" :label-width="formLabelWidth" prop="commentStatus">
        <el-switch
            v-model="form.commentStatus"
            active-color="#13ce66"
            inactive-color="#999999">
        </el-switch>
      </el-form-item>
      <el-form-item label="是否轮播" :label-width="formLabelWidth" prop="rotation">
        <el-switch
            v-model="form.rotation"
            active-color="#13ce66"
            inactive-color="#999999">
        </el-switch>
      </el-form-item>
      <el-form-item label="是否置顶" :label-width="formLabelWidth" prop="top">
        <el-switch
            v-model="form.top"
            active-color="#13ce66"
            inactive-color="#999999">
        </el-switch>
      </el-form-item>

      <el-form-item label="选择标签" prop="tagList" :label-width="formLabelWidth">
        <el-checkbox-group v-model="form.tagList">
          <el-checkbox  v-for="(item,index) in tagListAll" :key="index" :label="item.id" >{{item.tagName}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="附件上传" :label-width="formLabelWidth" prop="attachmentList">
        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :http-request="uploadAttachment"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="form.attachmentList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
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
import {tree} from "@/api/channel";
import {create,upload} from "@/api/article";
import {getAllTag} from "@/api/tag";
import Treeselect from '@riophae/vue-treeselect'
export default {
  name: "add",
  components: {
    Treeselect,
  },
  data(){
    return{
      tagListAll:[],
      form: {
        title:'',
        channelId:null,
        titleImg:'',
        summary:'',
        commentStatus:'',
        rotation:'',
        url:'',
        author:'',
        top:false,
        content:'',
        attachmentList:[],
        tagList:[]
      },
      formLabelWidth: '130px',
      rule:{
        title: [{required:true,message:"必填项不能为空"}]
      },
      // define options
      options: [],
      posList:['A','B','C','D','E','F','G'],
    }
  },
  created() {
    this.getTree()
    this.getTagListAll()
  },
  methods:{
    close(){
      this.$router.push('/article')
    },
    submitForm(){
      this.$refs['form'].validate(valid=>{
        if(valid){
          if(this.form.commentStatus){
            this.form.commentStatus = 0;
          }else{
            this.form.commentStatus = 1;
          }
          if(this.form.rotation){
            this.form.rotation = 1;
          }else{
            this.form.rotation = 0;
          }
          if(this.form.top){
            this.form.top = 1;
          }else{
            this.form.top = 0;
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
        this.form.titleImg=data.data
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
    },
    uploadAttachment(param){
      const formData = new FormData();
      formData.append("file",param.file);
      upload(formData).then(data=>{
        this.form.attachmentList.push({name:param.file.name,url:data.data})
      }).catch(error=>{
        this.$message.error(error)
      })
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      console.log(fileList)
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    getTagListAll(){
      getAllTag().then(data=>{
        this.tagListAll = data.data
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