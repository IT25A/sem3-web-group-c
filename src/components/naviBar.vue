<template>
  <div class="page-container">
    <nav>
         <ul>
            <li><router-link to="/subpages/home">Home</router-link></li>
          <li><router-link to="/subpages/aboutus">Über uns</router-link></li>
          <li><router-link to="/subpages/services">Services</router-link></li>
          <li><router-link to="/subpages/reviews">Reviews</router-link></li>
          <li><router-link to="/subpages/contact">Kontakt</router-link></li>
          <li><router-link to="/subpages/jobs">Jobs</router-link></li>
          <li><router-link to="/subpages/faq">FAQ</router-link></li>
        </ul>
      </nav>
  </div>
</template>

<script setup lang="ts">
  import '@/assets/main.css'
  import { ref, onMounted } from 'vue'

  // Reaktive Variablen oder Logik hier einfügen
</script>

<style scoped>
  /*für lokales css */
</style>