<template>
  <div class="tab_box whitebg">
    <div class="tab_buttons">
      <ul>
        <li v-for="(item,index) in channels" :key="index" @click="cur=index" :class="{newscurrent:cur==index}">{{item.name}}</li>
      </ul>
    </div>
    <div class="newstab">
      <div class="newsitem" v-show="cur==0">
        <div class="newspic">
          <ul>
            <li>
              <template v-if="articles1 != null && articles1.length>=1">
                <router-link :to='"/detail/"+articles1[0].id' target="_blank">
                  <img :src="articles1[0].titleImg"><span>{{articles1[0].title}}</span>
                </router-link>
              </template>
            </li>
            <li>
              <template v-if="articles1 != null && articles1.length>=2">
                <router-link :to='"/detail/"+articles1[1].id' target="_blank">
                  <img :src="articles1[1].titleImg"><span>{{articles1[1].title}}</span>
                </router-link>
              </template>
            </li>
          </ul>
        </div>
        <ul class="newslist">
          <li v-for="(item,index) in articles1" :key="index">
            <i></i><router-link :to='"/detail/"+item.id' target="_blank">{{item.title}}</router-link>
            <p>{{item.summary}}</p>
          </li>
        </ul>
      </div>

      <div class="newsitem" v-show="cur==1">
        <div class="newspic">
          <ul>
            <li>
              <template v-if="articles2 != null && articles2.length>=1">
                <router-link :to='"/detail/"+articles2[0].id' target="_blank">
                  <img :src="articles2[0].titleImg"><span>{{articles2[0].title}}</span>
                </router-link>
              </template>
            </li>
            <li>
              <template v-if="articles2 != null &&articles2.length>=2">
                <router-link :to='"/detail/"+articles2[1].id' target="_blank">
                  <img :src="articles2[1].titleImg"><span>{{articles2[1].title}}</span>
                </router-link>
              </template>
            </li>
          </ul>
        </div>
        <ul class="newslist">
          <li v-for="(item,index) in articles2" :key="index">
            <i></i><router-link :to='"/detail/"+item.id' target="_blank">{{item.title}}</router-link>
            <p>{{item.summary}}</p>
          </li>
        </ul>
      </div>

      <div class="newsitem" v-show="cur==2">
        <div class="newspic">
          <ul>
            <li>
              <template v-if="articles3 != null && articles3.length>=1">
                <router-link :to='"/detail/"+articles3[0].id' target="_blank">
                  <img :src="articles3[0].titleImg"><span>{{articles3[0].title}}</span>
                </router-link>
              </template>
            </li>
            <li>
              <template v-if="articles3 != null &&articles3.length>=2">
                <router-link :to='"/detail/"+articles3[1].id' target="_blank">
                  <img :src="articles3[1].titleImg"><span>{{articles3[1].title}}</span>
                </router-link>
              </template>
            </li>
          </ul>
        </div>
        <ul class="newslist">
          <li v-for="(item,index) in articles3" :key="index">
            <i></i><router-link :to='"/detail/"+item.id' target="_blank">{{item.title}}</router-link>
            <p>{{item.summary}}</p>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import {queryByPos,getArticlesByChannelId} from "../../api/font"
  export default {
    name: "FTab",
    data(){
      return{
        channels:[],
        articles1:[], //tab1
        articles2:[], //tab2
        articles3:[], //tab3
        cur:0,
      }
    },
    mounted() {
      queryByPos('b').then(data=>{
        this.channels = data.data
        getArticlesByChannelId(this.channels[0].id).then(data=>{
          this.articles1 = data.data.list
        })
        getArticlesByChannelId(this.channels[1].id).then(data=>{
          this.articles2 = data.data.list
        })
        getArticlesByChannelId(this.channels[2].id).then(data=>{
          this.articles3 = data.data.list
        })
      }).catch(error=>{
          console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>