<template>
    <div class="flex lg:p-12 items-center justify-between lg:px-32 sm:px-10 sm:p-10 mt-[-10px] opacity-1" id="NAV">
        <nuxt-link to="/"><h1 class="text-2xl font-[200] text-white flex p-3 montserrat">Neural<span class="text-[#00da88]">Kissan</span></h1></nuxt-link>
        <ul class="text-white flex gap-6  items-center">
            <li><NuxtLink to="/About" class="p-3 ">About</NuxtLink></li>
            <li><NuxtLink to="/Blog" class="p-3">Blog</NuxtLink></li>
            <li ><NuxtLink to="" class="btn rounded"><Icon name="ph:envelope-simple"/> Register For The Launch</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup>
// onMounted(() => {
//     useAnime({ targets: '#NAV', translateY: 10, opacity:1,duration: 1200,delay:1000 ,easing:'easeInOutCubic'})
//   })
</script>

<style scoped>
.btn{
    background: rgb(215, 215, 215);
    color: #000000;
    padding: 8px;
    display: flex;
    align-items: center;
    gap:10px;
    cursor: pointer;
    transition: .1s;
}
.btn:hover{
    background: rgba(255, 255, 255, 0.053);
    color: white;
    mix-blend-mode: d;
}
li .router-link-active,li .router-link-exact-active{
color:var(--accent);
}
</style>