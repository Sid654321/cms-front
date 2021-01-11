<template>
  <el-aside width="200px">
    <el-menu
        :unique-opened="false"
        router
        :default-openeds="opens"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
      <template v-for="(menu,index) in menus">
        <el-submenu index="0" :key="index">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </template>
          <template v-for="(child,i) in menu.children">
            <el-menu-item :index="child.route" :key="index+'-'+i" >
              <i :class="child.icon"></i>{{child.name}}
            </el-menu-item>
          </template>

        </el-submenu>
      </template>


    </el-menu>
  </el-aside>
</template>

<script>
import menus from "../../api/menu"
export default {
  name: "Left",
  data(){
    return{
      opens:["0"],
      menus:menus
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-aside{
  background-color: #ffffff;
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 60px;
  border-right: 1px solid #e6e6e6;
  box-shadow: 5px 0px 5px -2px #e0e0e0;
}
</style>