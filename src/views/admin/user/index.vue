<template>
  <div>
    <div>
      <el-form :inline="true" :model="queryForm" class="demo-form-inline">
        <el-form-item >
          <el-input v-model="queryForm.userName" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="queryForm.nickName" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="id"
          label="ID"
          width="180">
      </el-table-column>
      <el-table-column
          prop="userName"
          label="用户名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="nickName"
          label="昵称">
      </el-table-column>
      <el-table-column
          prop="email"
          label="邮箱">
      </el-table-column>
      <el-table-column
          prop="createDate"
          label="创建时间">
      </el-table-column>
      <el-table-column
          prop="status"
          label="状态">
      </el-table-column>
      <el-table-column
          align="center"
          width="150px"
          label="操作">
        <template slot-scope="scope">
          <el-link :underline="false" type="primary" class="el-icon-edit" @click="edit(scope.row)">编辑</el-link>
          <el-link :underline="false" type="danger" class="el-icon-delete" @click="del(scope.row)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="total,prev, pager, next, jumper"
        @current-change="pageChange"
        :current-page="pageNo"
        :total="total">
    </el-pagination>

    <el-dialog title="用户新增" :visible.sync="addVisible" v-if="addVisible" :center="true">
      <add @after="show" @hideDialog="close"></add>
    </el-dialog>
    <el-dialog title="编辑用户" :visible.sync="editVisible" v-if="editVisible" :center="true">
      <edit @after="show" :data="formData" @hideDialog="close"></edit>
    </el-dialog>
  </div>



</template>

<script>
import {query,del} from "@/api/user";
import add from "@/views/admin/user/add";
import edit from "@/views/admin/user/edit";
import Add from "@/views/admin/user/add";
import Edit from "@/views/admin/user/edit";

export default {
  name: "index",
  components: {Edit, Add},
  comments:{
    add,
    edit
  },
  data() {
    return {
      tableData: [],
      queryForm: {
        userName:'',
        nickName:''
      },
      total:0,
      pageNo:1,
      addVisible:false,
      editVisible:false,
      formData:{}

    }
  },
  mounted() {
    this.list({"page":this.pageNo})
  },
  methods: {
    list(param){
      query(param).then(data=>{
        this.tableData = data.data.list
        this.total = data.data.total
      }).catch(error=>{
        this.$message.error(error)
      })
    },
    search(){
      this.pageNo = 1
      let param = this.queryForm
      param.page = this.pageNo
      this.list(param)
    },show(){
      let param = this.queryForm
      param.page = this.pageNo
      this.list(param)
    },
    pageChange(val){
      this.pageNo = val
      let param = this.queryForm
      param.page = this.pageNo
      this.list(param)
    },
    del(row){
      this.$confirm("确定要删除吗","提示").then(()=>{
        del(row.id).then(data=>{
          let param = this.queryForm
          param.page = this.pageNo
          this.list(param)
          this.$message.success(data.msg)
        })
      }).catch(()=>{

      })

    },
    add(){
      this.addVisible = true
    },
    close(){
      this.addVisible = false
      this.editVisible = false
    },
    edit(row){
      this.editVisible = true;
      this.formData = row

    }

  }
}
</script>

<style scoped>

</style>