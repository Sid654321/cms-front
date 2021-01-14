<template>
  <div v-title :data-title="article.title">
    <FHeader></FHeader>
    <article>
      <div class="lbox">
        <div class="content_box whitebg">
          <h2 class="htitle"><span class="con_nav">您现在的位置是：<a href="/">网站首页</a>&gt;<a href="/">博客正文</a></span>博客正文</h2>
          <h1 class="con_tilte">{{article.title}}</h1>
          <p class="bloginfo"><i class="avatar"><img src="@/assets/images/avatar.png"></i><span>{{article.author}}</span><span>2018-10-28</span><span></span><span>99人已围观</span></p>
          <p class="con_info" v-if="article.summary"><b>摘要</b>{{article.summary}}</p>
          <div class="con_text">
            <v-md-preview :text="article.content"></v-md-preview>
            <!--<div class="nextinfo">
              <p>上一篇：<a href="/download/f/886.html">html5 个人博客模板《蓝色畅想》</a></p>
              <p>下一篇：<a href="/download/f/907.html">个人博客模板《tree》-响应式个人网站模板</a></p>
            </div>-->
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
  import FTag from "./FTag"
  import {getArticle} from "../../api/font";

  export default {
    name: "Index",
    components: {
      FHeader, FOrder, FLike, FriendLink,Footer,FTag
    },
    data(){
      return{
        article:{},
      }
    },
    created() {
      getArticle(this.$route.params.id).then(data=>{
        this.article = data.data
        console.log(data)
        console.log(data)
        console.log(data)
        console.log(data)
        console.log(data)
        console.log(data)
      })
    },
    beforeRouteUpdate(to, from, next){
      console.log(to.params)
      next()
    }
  }
</script>

<style scoped>

</style>