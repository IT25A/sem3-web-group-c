<template>
  <div class="page-container">
    <div class="services-header">
      <h1>Unsere Services</h1>
      <h2>Du feierst. Wir übernehmen das Warten</h2>
    </div>
    <div class="services-info">
      <h2>Was bieten wir an?</h2>
      <p>BYEBYELINE bietet einen Warteservice für Konzerte und Events an. Unsere Kunden können einen Jobber buchen, der für sie ansteht und ihnen so Zeit und Aufwand erspart. Dadurch können sie ihren Tag flexibler gestalten und müssen nicht selbst stundenlang in der Schlange stehen.</p>
      <p>Wir kümmern uns um das Anstehen, damit unsere Kunden sich auf das Event freuen können.</p>
    </div>
    <div class="services-howdoes">
      <h2>Wie funktioniert unser Service?</h2>
      <div class="howdoes-card">
        <h3>01 Event auswählen</h3>
        <p>Wähle das gewünschte Konzert oder Event aus.</p>
      </div>
      <div class="howdoes-card">
        <h3>02 Daten angeben und buchen</h3>
        <p>Gib deine Kontaktdaten an und buche deinen Warteservice.</p>
      </div>
      <div class="howdoes-card">
        <h3>03 Zurücklehnen und genießen</h3>
        <p>Unser Warteservice nimmt dir das Anstehen ab, damit du deine Zeit flexibel nutzen kannst.“</p>
      </div>
    </div>
    <div class="book-service">
      <h2>Bereit für dein nächstes Event?</h2>
      <p>Spare Zeit und überlasse uns das Anstehen.</p>
      <ButtonBookLiner>Jetzt Service buchen</ButtonBookLiner>
    </div>
     


  
  </div>
</template>

<script setup lang="ts">
  import ButtonBookLiner from '@/components/button_bookLiner.vue'
  import '@/assets/main.css'
  import { ref, onMounted } from 'vue'

  // Reaktive Variablen oder Logik hier einfügen
</script>

<style scoped>
  /*für lokales css */
</style>