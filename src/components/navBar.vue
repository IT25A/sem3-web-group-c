<template>
  <div class="page-container">
    <nav>
      <ul class="nav-Left">
        <li><router-link to="/subpages/home">Home</router-link></li>
        <li><router-link to="/subpages/aboutus">Über uns</router-link></li>
        <li><router-link to="/subpages/services">Services</router-link></li>
        <li><router-link to="/subpages/reviews">Reviews</router-link></li>
        <li><router-link to="/subpages/contact">Kontakt</router-link></li>
        <li><router-link to="/subpages/jobs">Jobs</router-link></li>
        <li><router-link to="/subpages/faq">FAQ</router-link></li>
      </ul>

      <ul class="nav-Right">
        <!-- 
       für rechtsbündig: Liner buchen + User

       KI Bsp. für Inspo

        /* Spezifische Styles nur für das Hauptmenü */
.nav-main {
  font-weight: 500;
}

/* Spezifische Styles nur für das Benutzermenü (z.B. rechts) */
.nav-user {
  font-size: 0.9rem; /* Etwas kleinere Schrift */
}

/* Du kannst sogar gezielt Elemente innerhalb einer bestimmten Liste stylen: */
.nav-user .btn {
  background-color: #007bff;
  color: white;
  padding: 5px 15px;
  border-radius: 4px;
}

        -->

        <button_bookLiner>Liner</button_bookLiner>
      </ul>

      <ul>
        <!-- 
        später für die Länderauswahl
        -->
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import '@/assets/main.css'
import button_bookLiner from './button_bookLiner.vue'
import Button_bookLiner from './button_bookLiner.vue';

// Reaktive Variablen oder Logik hier einfügen
</script>

<style scoped>
/*für lokales css */
</style>