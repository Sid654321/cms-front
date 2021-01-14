<template>
  <div v-title data-title="张芳磊的博客">
    <FHeader></FHeader>
    <article>
      <div class="lbox">
        <FSwiper></FSwiper>
        <HeadLine></HeadLine>
        <FTab></FTab>
        <FNew :articles="articles"></FNew>
      </div>
      <div class="rbox">
        <FMe></FMe>
        <FNotice></FNotice>
        <FOrder></FOrder>
        <FLike></FLike>
        <FriendLink></FriendLink>
      </div>
    </article>
    <Footer></Footer>
  </div>
</template>

<script>
  import '@/assets/css/base.css'
  import '@/assets/css/m.css'
  import FHeader from "./FHeader"
  import FSwiper from "./FSwiper"
  import HeadLine from "./HeadLine"
  import FMe from "./FMe"
  import FTab from "./FTab"
  import FNew from "./FNew"
  import FNotice from "./FNotice"
  import FOrder from "./FOrder"
  import FLike from "./FLike"
  import FriendLink from "./FriendLink"
  import Footer from "./Footer"
  import {getNew} from "../../api/font";

  export default {
    name: "Index",
    components: {
      FHeader, FSwiper, HeadLine, FMe, FTab, FNew, FNotice, FOrder, FLike, FriendLink,Footer
    },
    data(){
      return{
        articles:[],
      }
    },
    mounted(){
      getNew().then(data=>{
        this.articles = data.list
      });
    }
  }
</script>

<style scoped>

</style>