<template>
  <div class="absolute top-0 h-10 w-full bg-[#020202] text-center grid items-center font-thin">
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
const { message } = defineProps(["message"]);
</script>

<style scoped></style>
