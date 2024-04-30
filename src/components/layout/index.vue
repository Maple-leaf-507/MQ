<template>
  <div class="container" @click="closeModal">
    <!-- 头部 -->
    <div class="top">
      <div @click.stop="clickLeft" :style="{transform: showModal?'translateX(180px)':'translateX(0)'}">
        <img src="@/assets/icons/moreThan.png" alt="" style="width:30px;height:30px">
      </div>
      <h1>梦绮</h1>
      <div>Maple-leaf_507</div>
    </div>

    <!-- 中间的内容 -->
    <div class="content">
      <router-view></router-view>
    </div>

    <!-- 底部 -->
    <div class="bottom">
      人生的路，无需作过多的准备，只要你迈进，路就会在你脚下延伸，只要你扬帆，便会有八面来风。
    </div>

  </div>
   
  <!-- 左侧弹框 -->
  <div class="leftModal" v-show="showModal">
    <div style="margin-top:50px;text-align: center;">
      <img src="@/assets/images/avatar.jpg" alt="" style="width:50px;height:50px;border-radius: 50%;">
      <div class="name">梦绮</div>
      <div class="moodIndex">心情指数：
        <div class="starts">
          <div class="fiveStart"></div>
          <div class="fiveStart"></div>
          <div class="fiveStart"></div>
          <div class="fiveStart"></div>
          <div class="fiveStart"></div>
        </div>
        <!-- 进度条 -->
        <!-- <div class="progressBar"></div> -->
      </div>
    </div>
    <div style="margin-top:50px;margin-left: 30px;">
      <div v-for="item in list">
        <div @click="jump(item)" :class="routeIndex === item.id?'active':''">{{ item.title }}</div>
        <div v-if="item.children" style="margin-left:20px;">
          <div v-for="i in item.children" @click="jump(i)" :class="routeIndex === i.id?'active':''">
            {{ i.title }}
          </div>
        </div>
      </div>
    </div>
    
  </div>

</template>
  
<script lang="ts" setup>
  import { ref } from 'vue'
  import { list } from './data'
  import { useRouter,useRoute } from "vue-router";

  let showModal = ref(false)
  const router = useRouter()
  const route = useRoute()
  const routeIndex = ref(2)

  list.forEach(item => {
    if(item.children && item.children.length>0){
      item.children.forEach(i => {
        if(i.path === route.path){
          routeIndex.value = i.id
        }
      })
    }else{
      if(item.path === route.path){
        routeIndex.value = item.id
      }
    }
  })


  function clickLeft() {
    showModal.value = !showModal.value
  }

  function closeModal() {
    showModal.value = false
  }

  function jump(item:any) {
    if(item.children && item.children.length>0) return
    router.push(item.path)
    routeIndex.value = item.id
  }
</script>

<style lang="scss" scoped>
  @import './index.scss'
</style>