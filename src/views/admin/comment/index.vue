<template>
  <div>
    <div>
      <el-form :inline="true" :model="queryForm" class="demo-form-inline">
        <el-form-item >
          <el-input v-model="queryForm.content" placeholder="根据内容查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
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
          prop="author"
          label="评论者">
      </el-table-column>
      <el-table-column
          prop="email"
          label="邮箱">
      </el-table-column>
      <el-table-column
          prop="createDate"
          label="评论时间">
      </el-table-column>
      <el-table-column
          prop="content"
          label="内容">
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

<!--    <el-dialog title="栏目新增" :visible.sync="addVisible" v-if="addVisible" :center="true">-->
<!--      <add @after="show" @hideDialog="close"></add>-->
<!--    </el-dialog>-->
<!--    <el-dialog title="编辑栏目" :visible.sync="editVisible" v-if="editVisible" :center="true">-->
<!--      <edit @after="show" :data="formData" @hideDialog="close"></edit>-->
<!--    </el-dialog>-->
  </div>



</template>

<script>
//https://vue-treeselect.js.org
//https://github.com/code-farmer-i/vue-markdown-editor
import {query,del} from "@/api/comment";

export default {
  name: "index",

  data() {
    return {
      tableData: [],
      queryForm: {
        content:''
      },
      total:0,
      pageNo:1,
      // addVisible:false,
      // editVisible:false,
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
      this.$router.push('channel_add')
    },
    // close(){
    //   this.addVisible = false
    //   this.editVisible = false
    // },
    edit(row){
      this.$router.push({
        path:'channel_edit',
        query:{id:row.id}
      })
    }

  }
}
</script>

<style scoped>

</style>