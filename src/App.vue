<template>
  <canvas id="canvas" style="position:fixed;top:0;left:0;z-index: -1;"></canvas>
  <RouterView />
</template>

<script setup lang="ts">
// RouterLink,
import {  RouterView } from 'vue-router'
import { onMounted, nextTick,ref } from 'vue'

  /* 定义x为窗口宽度，y为窗口高度 */
  let x = 0 ,y=0;      
  /* 定义数组，是为了存储每一片雪的信息 */
  let arr=ref<any>([]);
  /* 假设有600片雪 */
  const num = 600;
  window.onresize=resizeCanvas;
  
  function resizeCanvas(canvas:any){
      x=canvas.width=window.innerWidth;
      y=canvas.height=window.innerHeight;
  }
  // let timer = ref(null)

  //  玥瑶   星洛   雨桐    安潼
/* 创建image元素 */
let img = new Image();
/* 设置雪花的地址（网络地址），只有雪花是用图片表示 */
// img.src = "./assets/images/snow.png";
img.src = "https://image.jxc4.com/image/017c57a8f58fbea10afdaf4f75e920f6.tem.png";

window.addEventListener('resize', function(event) {
    const canvas:any = document.getElementById("canvas");
    // const ctx = canvas.getContext("2d");
    resizeCanvas(canvas)
    snowArr()
});

onMounted(() => {
  
  nextTick(() => {
    const canvas:any = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    resizeCanvas(canvas)

    snowArr()
    
    draw(ctx)

    setInterval(function(){
      /* 清屏 */
      ctx.clearRect(0,0,x,y);
      /* 绘制 */
      draw(ctx);
      /* 更新 */
      updated(); 
    },10)
  })
})

/**
 * 雪花数组
 */
 function snowArr() {
  for(let i=0;i<num;i++){
      arr.value.push({
          x: x*Math.random(),
          y: y*Math.random(),
          r: Math.random()*5,
          color:`rgba(255,255,255,${Math.random()})`
      })
  }
}

function draw(ctx:any){
    /* 遍历数组 */
    for(let i=0;i<num;i++){
        var yuan = arr.value[i];     
        /* 创建路径 */          
          ctx.beginPath();
          /* 给雪设置颜色 */
          ctx.fillStyle = yuan.color;
          /* 绘制雪 */
          ctx.arc(yuan.x,yuan.y,yuan.r,0,2*3.14,false); 
          /* 如果i%30==0才绘制雪花，雪花不用太多 */          
          if(i%30==0){
            /* 绘制雪花图片 */
            ctx.drawImage(img,yuan.x,yuan.y,yuan.r*10,yuan.r*10);
          }
          /* 填充路径 */
          ctx.fill();
    }
}


function updated() {
    for(let i=0;i<num;i++){
        const yuan = arr.value[i];
        /* x轴位置+0.1，变化小点 */
        yuan.x = yuan.x + 0.1; 
        /* y轴位置+自身半径一半，这样越大的雪走越快 */
        yuan.y = yuan.y+yuan.r/2;
        /* 如果学已经走出窗口 */
        if(yuan.y>y){
            /* 重新给雪数组赋值 */
            arr.value[i]={ x: x*Math.random(),
            y: -10,
            r: Math.random()*5,
            color:`rgba(255,255,255,${Math.random()})`}
        }
    }

}

</script>

<style scoped lang="scss">
*{
  padding: 0;
  margin: 0;
}

// header {
//   line-height: 1.5;
//   max-height: 100vh;
// }

// .logo {
//   display: block;
//   margin: 0 auto 2rem;
// }

// nav {
//   width: 100%;
//   font-size: 12px;
//   text-align: center;
//   margin-top: 2rem;
// }

// nav a.router-link-exact-active {
//   color: var(--color-text);
// }

// nav a.router-link-exact-active:hover {
//   background-color: transparent;
// }

// nav a {
//   display: inline-block;
//   padding: 0 1rem;
//   border-left: 1px solid var(--color-border);
// }

// nav a:first-of-type {
//   border: 0;
// }

// @media (min-width: 1024px) {
//   header {
//     display: flex;
//     place-items: center;
//     padding-right: calc(var(--section-gap) / 2);
//   }

//   .logo {
//     margin: 0 2rem 0 0;
//   }

//   header .wrapper {
//     display: flex;
//     place-items: flex-start;
//     flex-wrap: wrap;
//   }

//   nav {
//     text-align: left;
//     margin-left: -1rem;
//     font-size: 1rem;

//     padding: 1rem 0;
//     margin-top: 1rem;
//   }
// }
</style>
