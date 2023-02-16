<template>
  <div>
    <h1>Micro-Frontend playground</h1>
    <Navbar name="Navbar" @navbar-click="onClick" />
  </div>
</template>

<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
  
  function onClick(payload: string) {
      console.log(payload);
  }
</script>

