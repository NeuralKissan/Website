<template>
    <div class="flex flex-col items-center mt-[8rem] h-[13rem]">
<hr class="w-[85%] mb-2">
<div class="w-[85%] flex justify-between ">
    <div>
        <h1 class="montserrat">Neural Kissan © 2022 - 2023</h1>
        <ul class="text-sm font-light">
            <li><nuxt-link to="">Terms & policies</nuxt-link></li>
            <li><nuxt-link to="">Privacy policy</nuxt-link></li>
            <li><nuxt-link to="">Brand guidelines</nuxt-link></li>
        </ul>
    </div>
    <div>
        <ul class="flex gap-4 font-thin">
            <li><nuxt-link to="">Twitter</nuxt-link></li>
            <li><nuxt-link to="">Youtube</nuxt-link></li>
            <li><nuxt-link to="">Github</nuxt-link></li>
            <li><nuxt-link to="">LinkedIn</nuxt-link></li>
        </ul>
    </div>
</div>
    </div>
</template>

<script setup>
 
</script>

<style scoped>
li:hover{
    cursor: default;
    color: var(--accent);
}
</style>