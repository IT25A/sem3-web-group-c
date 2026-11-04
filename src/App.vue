<script setup lang="ts">
//Bsp. für Import einer Komponente
//import HelloWorld from './components/HelloWorld.vue'
import '@/assets/main.css'
import Navbar from './components/navBar.vue';

</script>

<template>
  <div class="navbar">
    <!-- Navigation erscheint auf jeder Seite oben -->
    <Navbar />
  </div>

  <header>
    <!-- Hier werden die Seiten je nach Route geladen -->
    <router-view />
  </header>

  <main>

  </main>

</template>

<style scoped></style>
