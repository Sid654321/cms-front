<template>
  <div v-title data-title="栏目频道">
    <FHeader></FHeader>
    <article>
      <div class="lbox">
        <FChannelInfo :channel="channel"></FChannelInfo>
        <FNew :articles="articles"></FNew>
      </div>
      <div class="rbox">
        <FOrder></FOrder>
        <FLike></FLike>
        <FTag></FTag>
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
  import FNew from "./FNew"
  import FOrder from "./FOrder"
  import FLike from "./FLike"
  import FriendLink from "./FriendLink"
  import Footer from "./Footer"
  import FChannelInfo from "./FChannelInfo";
  import FTag from "./FTag";
  import {get, getArticlesByChannelId} from "../../api/font";
  export default {
    name: "Index",
    data(){
      return{
        channel:{},
        articles:[],
      }
    },
    components: {
      FHeader, FNew, FOrder, FLike, FriendLink,Footer,FChannelInfo,FTag
    },
    mounted() {
      this.getChannel(this.$route.params.id)
      this.getArticlesByCId(this.$route.params.id)
    },
    beforeRouteUpdate(to, from, next){
      this.getChannel(to.params.id)
      this.getArticlesByCId(to.params.id)
      next()
    },
    methods:{
      getChannel(id){
        get(id).then(data=>{
          this.channel = data.data;
          console.log(this.channel)
        })
      },
      getArticlesByCId(changedId){
        getArticlesByChannelId(changedId).then(data=>{
          this.articles = data.data.list
        });
      }
    }
  }
</script>

<style scoped>

</style>