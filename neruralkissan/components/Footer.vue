<template>
    <div class="flex flex-col items-center mt-[8rem] h-[13rem]">
<hr class="w-[85%] mb-2">
<div class="w-[85%] flex justify-between ">
    <div>
        <h1 class="montserrat">Neural Kissan © 2022 - 2023</h1>
        <ul class="text-sm font-light">
            <li><nuxt-link to="/Legal/Terms-And-Policies">Terms & policies</nuxt-link></li>
            <li><nuxt-link to="/Legal/Privacy-Policy">Privacy policy</nuxt-link></li>
            <li><nuxt-link to="/Legal/Brand-Guidelines">Brand guidelines</nuxt-link></li>
        </ul>
    </div>
    <div>
        <ul class="flex gap-4 font-thin">
            <!-- <li><nuxt-link to=""><Icon size='18' name="carbon:logo-twitter" /></nuxt-link></li>
            <li><nuxt-link to=""><Icon size='18' name="carbon:logo-youtube" /></nuxt-link></li> -->
            <li><nuxt-link to="https://github.com/NeuralKissan"><Icon size='18' name="carbon:logo-github" /></nuxt-link></li>
            <li><nuxt-link to="https://www.linkedin.com/company/neural-kissan"><Icon size='18' name="carbon:logo-linkedin" /></nuxt-link></li>
        </ul>
    </div>
</div>
    </div>
</template>

<script setup>
 
</script>

<style scoped>
li{
    transition: .3s;
}
li:hover{
    cursor: default;
    color: var(--accent);
}
</style>