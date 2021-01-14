<template>
  <header id="header">
    <div class="navbox">
      <h2 id="mnavh"><span class="navicon"></span></h2>
      <div class="logo"><a href="#">张芳磊的博客</a></div>
      <nav>
        <ul id="starlist">
          <li><a href="/">首页</a></li>
          <li v-for="(item,index) in channels" :key="index" :class="{menu:item.children}">
            <router-link v-if="item.single" :to='"/channel_detail/"+item.id'>{{item.name}}</router-link>
            <router-link v-else :to='"/list/"+item.id'>{{item.name}}</router-link>
            <ul class="sub" v-if="item.children">
              <li v-for="(sub,sindex) in item.children" :key="sindex">
                <router-link v-if="sub.single" :to='"/channel_detail/"+sub.id'>{{sub.name}}</router-link>
                <router-link v-else :to='"/list/"+sub.id'>{{sub.name}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  import {queryByPos} from "../../api/font"
  export default {
    name: "FHeader",
    data(){
      return {
        channels:[],
      }
    },
    mounted() {
      queryByPos('a').then(data=>{
        console.log(data.data)
        this.channels = data.data
      }).catch(error=>{
        console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>