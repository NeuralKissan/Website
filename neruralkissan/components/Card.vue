<template>
 
  <div v-if="direction=='lr'">
    <div class="w-[1045px] flex  flex justify-between">
          <div class="w-[572px]">
            <h2 class="serif text-[31px]">{{ title }}</h2>
            <p class="poppins font-thin text-[21px]">{{ text }}</p>
          </div>
          <img class="w-[400px] h-[400px] object-cover rounded-xl"  :src="src" alt="" > 
        </div>
      </div>
      <div v-else>
        <div class="w-[1045px] flex  flex justify-between">
          <img class="w-[400px] h-[400px] object-cover rounded-xl"  :src="src" alt="" > 

          <div class="w-[572px]">
            <h2 class="serif text-[31px]">{{ title }}</h2>
            <p class="poppins font-thin text-[21px]">{{ text }}</p>
          </div>
        </div>
        
      </div>
      
    
  </template>
    
    <script setup>
      const {src,text,title,direction} = defineProps(['src','text','title','direction'])

    </script>
