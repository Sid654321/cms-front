<template>
  <div class="headline">
    <ul>
      <li v-for="(item,index) in articles" :key="index">
        <router-link :to='/detail/+item.id' target="_blank" :title="item.title">
        <img v-if="item.titleImg" :src="item.titleImg" :alt="item.title">
        <img v-else src="@/assets/images/h1.jpg" :alt="item.title">
          <span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getUp} from "../../api/font"

  export default {
    name: "HeadLine",
    data(){
      return {
        articles:[],
      }
    },
    mounted() {
      getUp().then(data=>{
        this.articles = data.data.list
      })
    }

  }
</script>

<style scoped>

</style>