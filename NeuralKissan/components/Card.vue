<template>
 
  <div v-if="direction=='lr'">
    <div class="flex flex-col-reverse justify-between md:flex-row md:gap-4">
          <div class="md:w-[572px]">
            <h2 class="serif text-[31px]">{{ title }}</h2>
            <p class="poppins font-thin text-[21px]">{{ text }}</p>
          </div>
          <img class="w-screen md:w-[400px] h-[400px] object-cover rounded-xl"  :src="src" alt="" > 
        </div>
      </div>
      <div v-else>
        <div class="flex flex-col justify-between md:flex-row md:gap-4">
          <img class="w-screen md:w-[400px] h-[400px] object-cover rounded-xl"  :src="src" alt="" > 

          <div class="md:w-[572px]">
            <h2 class="serif text-[31px]">{{ title }}</h2>
            <p class="poppins font-thin text-[21px]">{{ text }}</p>
          </div>
        </div>
        
      </div>
      
    
  </template>
    
    <script setup>
      const {src,text,title,direction} = defineProps(['src','text','title','direction'])

    </script>
