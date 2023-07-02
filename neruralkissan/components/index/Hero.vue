<template>
    <div class="h-[90vh]  text-center flex flex-col items-center ">
        <!-- <TopNotification message="Hello im a notif" /> -->
        <h1 class="text-5xl font-bold mt-10 montserrat w-[80%] opacity-0" id="MainTagline">Grow Anything Anytime Anywhere </h1>
        <p class="font-thin mt-5 w-[60%] opacity-0 text-lg poppins" id="tagline">Creating Technology for a sustainable future one plant at a time</p>
        <img src="/PodBlack.png" class="mt-[-12rem] h-[50rem]  opacity-0 object-cover" alt="" id="PodImage">
    </div>
    <img src="~/assets/img/backdrop.png" id="Backdrop" alt="">
    </template>
    
    <script setup>


      onNuxtReady(() => {
  
        useAnime({ targets: '#MainTagline', translateY: 10, opacity:1,duration: 1000 ,easing:'easeInOutCubic'})
        useAnime({ targets: '#tagline', translateY: 5, opacity:1,duration: 500 ,delay:650,easing:'cubicBezier(.5, .05, .1, .3)'})
        useAnime({ targets: '#PodImage', translateY: -20, opacity:1,duration: 800 ,delay:800,easing:'cubicBezier(.5, .05, .1, .3)'})
      })
    </script>

    <style scoped>
    #Backdrop{
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
    </style>