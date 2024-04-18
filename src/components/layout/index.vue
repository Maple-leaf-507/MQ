<template>
  <div class="container" @click="closeModal">
    <!-- 头部 -->
    <div class="top">
      <div @click.stop="clickLeft" :style="{transform: showModal?'translateX(180px)':'translateX(0)'}">
        <img src="@/assets/icons/moreThan.png" alt="" style="width:30px;height:30px">
      </div>
      <div>头部内容</div>
      <div>右边内容</div>
    </div>

    <!-- 中间的内容 -->
    <div class="content">
      <router-view></router-view>
    </div>

    <!-- 底部 -->
    <div class="bottom">底部内容</div>

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
        <div>{{ item.title }}</div>
        <div v-if="item.children" style="margin-left:20px;">
          <div v-for="i in item.children" >
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

  let showModal = ref(false)

  function clickLeft() {
    showModal.value = !showModal.value
  }

  function closeModal() {
    showModal.value = false
  }
</script>

<style lang="scss" scoped>
  @import './index.scss'
</style>