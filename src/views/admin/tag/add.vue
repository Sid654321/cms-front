<template>
  <div>
    <el-form :model="form" ref="form" :rules="rule">
      <el-form-item label="标签名称" :label-width="formLabelWidth" prop="tagName">
        <el-input v-model="form.tagName" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div  slot="footer" class="dialog-footer" align="center">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </div>
  </div>
</template>

<script>
import {create} from "@/api/tag";

export default {
  name: "add",
  data(){
    return{
      form: {
        tagName:''
      },
      formLabelWidth: '80px',
      rule:{
        tagName: [{required:true,message:"必填项不能为空"}]
      }
    }
  },
  methods:{
    close(){
      this.$emit("hideDialog")
    },
    submitForm(){
      this.$refs['form'].validate(valid=>{
        if(valid){
          create(this.form).then(data=>{
            this.$message.success(data.msg)
            this.$refs['form'].resetFields()
            this.$emit("after")
            this.close()
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

</style>