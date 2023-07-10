<template>
    <div class="w-[38%] md:w-auto relative card">
        <p v-if="quote != undefined && quote != '' " class="absolute text-sm poppins font-light w-44 z-10 rounded-lg  p-2 " id="Quote">  "{{ quote }}""</p>
        <img class="w-screen md:w-44 aspect-square object-cover " :src="img" alt="">
        <h1 class="serif text-sm mt-1 md:text-xl">{{ name }}</h1>
        <h2 class="font-thin text-xs md:text-base">{{ role }}</h2>
        <p class="poppins text-[9px] text-[#aaa] md:w-56 md:text-sm md:mt-2">{{ about }}</p>
        <div class="mt-1 flex  gap-2">
            <nuxt-link v-if="Socials_Linkedin != undefined" class="Socials" :to="Socials_Linkedin"><Icon name="ph:linkedin-logo"/></nuxt-link>
            <nuxt-link v-if="Socials_Github != undefined" class="Socials" :to="Socials_Github"><Icon name="mdi:github"/></nuxt-link>
            <nuxt-link v-if="Socials_Website != undefined" class="Socials" :to="Socials_Website"><Icon name="gg:website"/></nuxt-link>
            
        </div>
    </div>
</template>

<script setup>
   const {img,name,role,about,quote,Socials_Linkedin,Socials_Github,Socials_Website} = defineProps(['img','name','role','about','quote','Socials_Linkedin','Socials_Github','Socials_Website'])
</script>

<style scoped>
.Socials{
    aspect-ratio: 1 / 1; 
display: block; 
display: flex; 
justify-content: center; 
align-items: center; 
border-radius: 9999px; 
height: 2rem; 
text-align: center; 
transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 300ms; 

}

.Socials:hover{
    background-color: #3b455a; 
}
#Quote{
    --bg:#0F86FCcc;

    background: var(--bg);
    /* background: linear-gradient(to right top, var(--bg), var(--bg2)); */
    transition: .2s;
    opacity: 0;
    right:2rem;
    top: -1rem;
    backdrop-filter: blur(10px);
}

.card:hover #Quote{
    opacity: 1;
    right:-5rem;

}

</style>