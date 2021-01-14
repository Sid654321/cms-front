<template>
  <div class="whitebg lanmu">
    <img v-if="channel.channelImg ==null || channel.channelImg == ''" width="120px" height="100px" src="@/assets/images/lm01.jpg">
    <img v-else :src="channel.channelImg">
    <h1>{{channel.name}}</h1>
    <p>{{channel.summary}}</p>
  </div>
</template>

<script>


  export default {
    name: "FChannelInfo",
    props:['channel'],
    data(){
      return {
      }
    },

  }
</script>

<style scoped>

</style>