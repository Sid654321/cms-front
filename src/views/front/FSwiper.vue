<template>
  <!--banbox begin-->
  <div class="banbox">
      <swiper class="swiper" style="height: 260px;">
        <swiper-slide v-for="(item,index) in sliders" :key="index">
          <router-link :to="item.url"  target="_blank">
            <img :src="item.img">
          </router-link>
        </swiper-slide>
      </swiper>
  </div>
  <!--banbox end-->
</template>

<script>
  import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  import {queryByPos,getArticlesByChannelId} from "../../api/font"

  export default {
    name: "FSwiper",
    components: {
      Swiper,
      SwiperSlide
    },
    mounted() {
      queryByPos('D').then(data=>{
        getArticlesByChannelId(data.data[0].id).then(d=>{
            d.list.forEach(channel=>{
              var obj = {};
              obj.img = channel.titleImg
              obj.url = '/detail/'+channel.id
              this.sliders.push(obj)
            })
        })
      })
    },
    data(){
      return {
        sliders:[
         {
            "img": "https://img3.doubanio.com/img/files/file-1485236684-0.jpg",
            "url": "/"
          },
          {
            "img": "https://img3.doubanio.com/img/files/file-1487144115-0.jpg",
            "url": "/"
          },
          {
            "img": "https://img3.doubanio.com/img/files/file-1486953805-0.jpg",
            "url": "/"
          }
        ],
      }
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  }
</script>

<style scoped>

</style>