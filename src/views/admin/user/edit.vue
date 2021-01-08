<template>
  <div>
    <el-form :model="form" ref="form" :rules="rule">
      <el-form-item label="账号" :label-width="formLabelWidth" prop="userName">
        <el-input v-model="form.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
        <el-input v-model="form.password" autocomplete="off" type="password"></el-input>
      </el-form-item>
      <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickName">
        <el-input v-model="form.nickName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth" prop="status">
        <el-select v-model="form.status" placeholder="请选择状态">
          <el-option
              v-for="item in this.utils.status"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div  slot="footer" class="dialog-footer" align="center">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </div>
  </div>
</template>

<script>
import {update} from "@/api/user";

export default {
  name: "edit",
  props:['data'],
  data(){
    return{
      form: {
        id:'',
        userName:'',
        password:'',
        nickName:'',
        email:'',
        status:'T',
      },
      formLabelWidth: '60px',
      rule:{
        userName: [{required:true,message:"必填项不能为空"}],
        password: [{required:true,message:"必填项不能为空"}]
      }
    }
  },
  created() {
    this.form = JSON.parse(JSON.stringify(this.data))
  },
  methods:{
    close(){
      this.$emit("hideDialog")
    },
    submitForm(){
      this.$refs["form"].validate(valid=>{
        if (valid){
          console.log(this.form)
          update(this.form).then(data=>{
            this.$message.success(data.msg);
            this.$emit("after")
            this.$refs['form'].resetFields()
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