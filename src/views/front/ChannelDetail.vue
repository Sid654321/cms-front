<template>
  <div v-title :data-title="channel.name">
    <FHeader></FHeader>
    <article>
      <div class="lbox">
        <div class="content_box whitebg">
          <h2 class="htitle"><span class="con_nav"></span>{{channel.name}}</h2>
          <p class="con_info" v-if="channel.summary">{{channel.summary}}</p>
          <div class="con_text" style="min-height: 1000px">
            <v-md-preview :text="channel.content"></v-md-preview>
          </div>
        </div>
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
  import FOrder from "./FOrder"
  import FLike from "./FLike"
  import FriendLink from "./FriendLink"
  import Footer from "./Footer"
  import FTag from "./FTag";
  import {get} from "../../api/font";
  export default {
    name: "Index",
    components: {
      FHeader, FOrder, FLike, FriendLink,Footer,FTag
    },
    data(){
      return{
        channel:{}
      }
    },
    mounted() {
      this.getChannel(this.$route.params.id)
    },
    beforeRouteUpdate(to, from, next){
      this.getChannel(to.params.id)
      next()
      next()
    },
    methods:{
      getChannel(id){
        get(id).then(data=>{
          this.channel = data.data;
          console.log(this.channel)
        })
      }
    }
  }
</script>

<style scoped>

</style>