<template>
    <div>
        <h1>Host app with async component from navbar app (Micro-Frontend)</h1>
        <ClientOnly>
            <Navbar name="Navbar" @navbar-click="onClick" />
        </ClientOnly>
    </div>
  </template>
  
<script setup lang="ts">
  import { defineAsyncComponent} from 'vue'

  const Navbar = defineAsyncComponent(() => import('navbar/Navbar'));

  function onClick(payload: string) {
    console.log(payload);
  }
</script>
  
  