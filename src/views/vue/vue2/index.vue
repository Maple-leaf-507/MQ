<template>
    <div>
        vue2
        <div v-html="htmlContent"></div>
        <!-- <div v-html="DemoMd"></div> -->
        <div id="content"></div>
    </div>
   
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