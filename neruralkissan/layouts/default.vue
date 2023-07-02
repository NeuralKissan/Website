<template>
    <div class="bg-[#050505] h-[100vh]">
        <Nav />
        <slot/>
        <!-- <img src="~/assets/img/backdrop.png" alt=""> -->

    </div>
</template>

<script setup>

</script>

<style scoped>
img{
    position: absolute;
    top: 0;
    z-index: -1;
}
</style>