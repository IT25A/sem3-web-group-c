<template>
  <button class="liner-btn">
    <slot />
  </button>
</template>

<script setup lang="ts">
import "@/assets/main.css";

// Reaktive Variablen oder Logik hier einfügen
</script>

<style scoped>
.liner-btn {
  background-color: #ffffff;
  color: #000000;
  font-weight: 700;
  font-family: sans-serif;
  padding: 12px 24px;
  border: 2px solid #000000;
  border-radius: 9999px; /* Macht die Form pillenartig */

  box-shadow: 4px 4px 0px #000000;

  cursor: pointer;
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

/* Klick-Effekt: Der Button drückt sich nach unten */
.liner-btn:active {
  box-shadow: 0px 0px 0px #000000;
  transform: translate(4px, 4px);
}
</style>
