<template>
  <div>
    <FHeader></FHeader>
    <article>
      <div class="lbox">
        <FNew></FNew>
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
  import FTag from "./FTag";
  export default {
    name: "Index",
    components: {
      FHeader, FNew, FOrder, FLike, FriendLink,Footer,FTag
    },
    beforeRouteUpdate(to, from, next){
      console.log(to.params)
      next()
    }
  }
</script>

<style scoped>

</style>