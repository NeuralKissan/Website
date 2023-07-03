<template>
    <div class="flex lg:p-12  items-center justify-between lg:px-32 px-3 py-10 mt-[-10px] opacity-1" id="NAV">
        <nuxt-link to="/" ><h1 class="sm:text-2xl font-[200] text-white flex sm:p-3 montserrat ">Neural<span class="text-[#00da88]">Kissan</span></h1></nuxt-link>
        <ul class="text-white flex sm:gap-6 gap-3 items-center ">
            <li><NuxtLink to="/About" class="sm:p-3 ">About</NuxtLink></li>
            <li><NuxtLink to="/Blog" class="sm:p-3">Blog</NuxtLink></li>
            <li class="btn" ><NuxtLink to="" ><Icon name="ph:envelope-simple"/><span class="sm:hidden"> Register</span><span class="sm:inline hidden"> Register For The Launch</span></NuxtLink></li>
        </ul>
    </div>
</template>

<script setup>


</script>

<style scoped>
.btn{
    font-size: .8em;
    background: rgb(215, 215, 215);
    color: #000000;
    padding: 7px;
    display: flex;
    align-items: center;
    gap:10px;
    cursor: pointer;
    transition: .3s;
}
.btn:hover{
    background: rgba(255, 255, 255, 0.053);
    color:var(--accent);
    mix-blend-mode: d;
}
li a{
    transition: .2s;
}
li a:hover{
    color:var(--accent);

}
li .router-link-active,li .router-link-exact-active{
color:var(--accent);
}
</style>