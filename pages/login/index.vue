<script setup lang="ts">
definePageMeta({
    layout: 'login'
})

</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <NuxtImg src="/backgroundImg.jpg" class="absolute w-full h-full z-10" fit="cover" />
        <SheredLogin v-if="false" />
        <SheredRegister />
    </div>
</template>
