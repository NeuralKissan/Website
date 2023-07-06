<template>
    <div class="md:w-[20%] w-screen ">
        <img class="w-screen md:w-40 aspect-square object-cover rounded" :src="img" alt="">
        <h1 class="serif text-xl mt-1">{{ name }}</h1>
        <h2 class="font-thin text-sm">{{ role }}</h2>
        <p class="poppins text-sm mt-2 text-[#aaa] md:w-[120%]">{{ about }}</p>
       
    </div>
</template>

<script setup>
   const {img,name,role,about} = defineProps(['img','name','role','about'])
</script>

<style scoped>

</style>