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
.page-container {
  background-color: #ffffff;
  color: #000000;
  min-height: 100vh;
  padding: 4rem 1.5rem 6rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

.services-header,
.services-info,
.services-howdoes,
.book-service {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

/* HEADER */
.services-header {
  text-align: center;
  padding-top: 1.5rem;
}

.services-header h1 {
  display: inline-block;
  background-color: #e3ff54;
  color: #000000;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.25rem;
}

.services-header h2 {
  font-size: clamp(2.1rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: #000000;
  margin: 0 auto;
  max-width: 18ch;
}

/* INFO SECTION */
.services-info {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-left: 6px solid #5f36b0;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 6px 6px 0px #000000;
}

.services-info h2 {
  font-size: 1.75rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 1rem;
  color: #000000;
}

.services-info p {
  color: #222222;
  font-size: 1.05rem;
  line-height: 1.65;
  max-width: 75ch;
  margin-top: 0;
  margin-bottom: 1rem;
}

.services-info p:last-child {
  margin-bottom: 0;
  color: #5f36b0;
  font-weight: 700;
}

/* WIE FUNKTIONIERT ES */
.services-howdoes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.services-howdoes > h2 {
  grid-column: 1 / -1;
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
  text-align: center;
  color: #000000;
}

.howdoes-card {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 5px 5px 0px #5f36b0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.howdoes-card:hover {
  transform: translateY(-4px);
  box-shadow: 7px 7px 0px #e3ff54;
}

.howdoes-card h3 {
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.3;
  color: #000000;
  margin: 0;
}

.howdoes-card p {
  color: #333333;
  font-size: 0.98rem;
  line-height: 1.6;
  margin: 0;
}

/* ENDE */
.book-service {
  background-color: #5f36b0;
  color: #ffffff;
  border: 2px solid #000000;
  border-radius: 24px;
  padding: 3.25rem 2rem;
  text-align: center;
  box-shadow: 8px 8px 0px #000000;
}

.book-service h2 {
  font-size: clamp(1.75rem, 3.5vw, 2.4rem);
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.book-service p {
  color: #ffffff;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 2rem;
}

.book-service :deep(button),
.book-service :deep(a) {
  background-color: #e3ff54;
  color: #000000;
  font-weight: 800;
  padding: 0.95rem 2rem;
  border-radius: 12px;
  border: 2px solid #000000;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.book-service :deep(button:hover),
.book-service :deep(a:hover) {
  transform: scale(1.03);
}

/* RESPONSIVE */
@media (max-width: 860px) {
  .services-howdoes {
    grid-template-columns: 1fr;
  }

  .services-info,
  .book-service {
    padding: 2rem 1.5rem;
  }
}
</style>