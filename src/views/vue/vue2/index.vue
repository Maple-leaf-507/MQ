<template>
    <div>
        vue2
        <div v-html="htmlContent"></div>
        <!-- <div v-html="DemoMd"></div> -->
        <div id="content"></div>
    </div>
   
  <!-- 教育：
        1、实事求是，事实有理有据，不要夸大其词（孩子有自己的社交，社交的话题来自于家庭）
        2、教会孩子约束好自己，自律，干净、卫生，漂亮（没有哪一个人不喜欢，更不会因此产生自卑心理）
        3、随着孩子的长大，对于自己的身体结构，周围的人物关系会充满好奇，没必要隐瞒，应及早说清（孩子成熟得早，有一些相关的注意事项，得让他们从小知道，刻在心里，在心中能有一个轻重缓急之分）
        5、多带孩子看看外面的世界，丰富孩子的情感认知，提升其世界观、人生观、价值观，引导孩子对某一件事的判断（需要时间，陪伴）
        4、当孩子鼓起勇气向自己问问题时，寻求帮助时，沉默并不是最好的选择（当孩子接收教育时，如何与父母敞开心扉的说话时，可你们却忽略了）
          不能因为说孩子快期末考试了，不挑明，不说请，那样只会让他无尽的瞎想，更不能专心应对接下来的事
  -->
  </template>
  
  <script lang="ts" setup>
    import { ref,onMounted } from 'vue'
    import fs from 'fs';

    let htmlContent = ref()
    // onMounted(() => {
      
    // })
    console.log('window',fs,'DemoMd',fs.readFileSync)
    // const DemoMd = fs.readFileSync('./log.md', 'utf8');
    // console.log('window',fs,'DemoMd',DemoMd)
    
    // console.log('DemoMd',DemoMd)


    // import { marked } from 'marked';
    // import { readFileSync } from 'fs';
    // import DemoMd from './log.md';
   

   

    // const { marked } = require("marked");
    // htmlContent.value = marked(DemoMd);

    // const response = await fetch('./log.md');
    // // import markdownContent from './log.md'
    // const mdFilePath = './log.md'
    // // const text = await response.text();
    // console.log('response',response)
    // const mdContent = readFileSync(mdFilePath, 'utf-8')
    // htmlContent.value = marked(mdContent)
  </script>
  
  <style lang="scss" scoped>
  @import './index.scss'
  </style>