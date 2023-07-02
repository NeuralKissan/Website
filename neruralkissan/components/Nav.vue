<template>
    <div class="flex p-7 items-center justify-between ">
        <nuxt-link to="/"><h1 class="text-xl font-black text-white">Neural<span class="text-[#00da88]">Kissan</span></h1></nuxt-link>
        <ul class="text-white flex gap-6  items-center">
            <li><NuxtLink to="/About" class="p-3">About</NuxtLink></li>
            <li><NuxtLink to="/Blog" class="p-3">Blog</NuxtLink></li>
            <li ><NuxtLink to="" class="btn rounded"><Icon name="ph:envelope-simple"/> Register For The Launch</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup>
   
</script>

<style scoped>
.btn{
    background: rgb(215, 215, 215);
    color: black;
    padding: 7px;
    display: flex;
    align-items: center;
    gap:10px;
    cursor: pointer;
}
.btn:hover{
    background: white;
}
</style>