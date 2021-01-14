<template>
  <div class="whitebg bloglist">
    <h2 class="htitle">最新博文</h2>
    <ul>
      <!--多图模式 置顶设计-->
      <li v-for="(item,index) in tops" :key="index">
        <h3 class="blogtitle"><router-link :to='"/detail/"+item.id' target="_blank"><b>【顶】</b>{{item.title}}</router-link></h3>
        <span class="blogpic imgscale">
          <i><router-link :to='"/detail/"+item.id' target="_blank">原创模板</router-link>
        </i>
          <router-link :to='"/detail/"+item.id' target="_blank">
          <img v-if="item.titleImg" :src="item.titleImg" alt="">
          <img v-else src="@/assets/images/b01.jpg" alt="">
        </router-link>
        </span>
        <p class="blogtext">{{item.summary}}</p>
        <p class="bloginfo"><i class="avatar"><img src="@/assets/images/avatar.png"></i><span>{{item.author}}</span><span>{{item.createDate}}</span></p>
        <router-link :to='"/detail/"+item.id' class="viewmore" target="_blank">阅读更多</router-link>
      </li>

      <!--单图-->
      <li v-for="(item,index) in articles" :key="index">
        <h3 class="blogtitle"><router-link :to='"/detail/"+item.id' target="_blank">{{item.title}}</router-link></h3>
        <span class="blogpic imgscale">
          <i><router-link :to='"/detail/"+item.id' target="_blank">原创模板</router-link>
        </i>
          <router-link :to='"/detail/"+item.id' target="_blank">
          <img v-if="item.titleImg" :src="item.titleImg" alt="">
          <img v-else src="@/assets/images/b01.jpg" alt="">
        </router-link>
        </span>
        <p class="blogtext">{{item.summary}}</p>
        <p class="bloginfo"><i class="avatar"><img src="@/assets/images/avatar.png"></i><span>{{item.author}}</span><span>{{item.createDate}}</span></p>
        <router-link :to='"/detail/"+item.id' class="viewmore" target="_blank">阅读更多</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  import {getUp} from "../../api/font"
  export default {
    name: "FNew",
    props:['articles'],
    data(){
      return{
        tops:[],
      }
    },
    mounted() {
      getUp().then(data=>{
        this.tops = data.data.list
      })
    }
  }
</script>

<style scoped>

</style>