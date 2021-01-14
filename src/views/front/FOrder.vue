<template>
  <div class="whitebg paihang">
    <h2 class="htitle">点击排行</h2>
    <ul>
      <li v-for="(item,index) in (articles||'').slice(0,8)" :key="index">
        <router-link :to='"/detail/"+item.id' target="_blank">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import articles from "../../data/articles";
  import {getNew} from "../../api/font";
  export default {
    name: "FOrder",
    data(){
      return{
        articles:articles
      }
    },
    mounted(){
      getNew().then(data=>{
        this.articles = data.data.list
      });
    }
  }
</script>

<style scoped>

</style>