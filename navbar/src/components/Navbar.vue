<template>
    <div class="navbar">
        Hello {{ name }}
        <button @click="onClick">Click me!</button>
    </div>
</template>

<script setup lang="ts">
    defineProps({name: String});

    const emit = defineEmits(['navbarClick']);

    function onClick() {
        emit('navbarClick', 'hello!');
    }
</script>

<style scoped>
     .navbar {
        background-color: yellow;
     }
</style>
