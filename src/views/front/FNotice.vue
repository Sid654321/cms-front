<template>
  <div class="whitebg notice">
    <h2 class="htitle">{{channels.name}}</h2>
    <ul>
      <li v-for="(item,index) in (articles || '').slice(0,4)" :key="index">
        <router-link :to='"/detail/"+item.id' target="_blank">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { queryByPos} from "../../api/font"
  import {getTop} from "../../api/font";
  export default {
    name: "FNotice",
    data(){
      return{
        articles:[],
        channels:{},
      }
    },
    created() {
      queryByPos('c').then(data=>{
        let arr = data.data;
        this.channels =arr[0]
        getTop(this.channels.id,4).then(data=>{
          this.articles = data.data.list
        });
      }).catch(error=>{
          console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>