<template>
  <div class="page-container">
    <div class="aboutus-header">
      <h1>Über BYEBYELINE</h1>
      <p class="slogan">Warten war gestern!</p>
      <p class="header-content">Warum wertvolle Zeit in Warteschlangen verbringen, wenn man sie auch anders nutzen kann? BYEBYELINE übernimmt das Warten für dich, damit du dich auf das konzentrieren kannst, was wirklich zählt: dein nächstes Event.</p>
    </div>
    <div class="aboutus-content">
      <h2>Wer wir sind</h2>
      <p>BYEBYELINE ist ein Unternehmen, das einen Warteservice für Konzerte und Events anbietet. Wir bringen Menschen zusammen, die ihre Zeit sinnvoll nutzen möchten, und ein Team von Jobbern, das sich um das Anstehen kümmert. Unser Ziel ist es, unseren Kunden einen zuverlässigen und unkomplizierten Service zu bieten.</p>
    </div>
    <div class="aboutus-mission">
      <h2>Unsere Mission</h2>
      <p>Wir glauben, dass jeder seine Freizeit so verbringen sollte, wie er möchte. Deshalb übernehmen wir das Anstehen und schaffen gleichzeitig flexible Arbeitsmöglichkeiten für Menschen, die Teil unseres Teams werden möchten.</p>
    </div>
    <div class="aboutus-why">
      <h2>Warum wir?</h2>
      <div class="why-grid">
        <div class="why-item">
            <h3>Ein zuverlässiges Team</h3> 
            <p>Unsere Jobber werden sorgfältig ausgewählt und verifiziert.</p>
        </div>
        <div class="why-item">
            <h3>Transparenz</h3> 
            <p>Bewertungen helfen unseren Kunden, sich ein Bild von unserem Service zu machen.</p>
        </div>
        <div class="why-item">
            <h3>Sichere Bezahlung</h3> 
            <p>Die Zahlungsabwicklung erfolgt sicher und transparent.</p>
        </div>
        <div class="why-item">
            <h3>Flexibilität</h3> 
            <p>Wir bieten eine unkomplizierte Buchung und eine Stornierungsmöglichkeit innerhalb von 48 Stunden.</p>
        </div>
      </div>
    </div>
    <div class="aboutus-community">
      <h2>Werde Teil unserer Community</h2>
      <p>Du möchtest Teil unseres Teams werden? Wir freuen uns auf motivierte Menschen, die unseren Kunden das Warten abnehmen möchten. Oder möchtest du einfach mehr Zeit für dein nächstes Event haben? Dann buche unseren Service!  </p>
    </div>
  </div>
</template>

<script setup lang="ts">
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

.aboutus-header,
.aboutus-content,
.aboutus-mission,
.aboutus-why,
.aboutus-community {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

/* 1. HEADER */
.aboutus-header {
  text-align: center;
  padding-top: 1.5rem;
}

.aboutus-header h1 {
  display: inline-block;
  background-color: #e3ff54;
  color: #000000;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  margin: 0 0 1.25rem;
}

.aboutus-header .slogan {
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.1;
  color: #000000;
  margin: 0 auto 1.25rem;
  max-width: 18ch;
}

.aboutus-header .header-content {
  max-width: 65ch;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.65;
  color: #222222;
}

/* 2. WER WIR SIND (Estilo tarjeta con borde lateral morado como services-info) */
.aboutus-content {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-left: 6px solid #5f36b0;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 6px 6px 0px #000000;
}

.aboutus-content h2 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #000000;
  margin: 0 0 1rem;
}

.aboutus-content p {
  font-size: 1.05rem;
  line-height: 1.65;
  color: #222222;
  max-width: 75ch;
  margin: 0;
}

/* 3. UNSERE MISSION (Bloque destacado con acento lima) */
.aboutus-mission {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-left: 6px solid #e3ff54;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 6px 6px 0px #5f36b0;
}

.aboutus-mission h2 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #000000;
  margin: 0 0 1rem;
}

.aboutus-mission p {
  font-size: 1.05rem;
  line-height: 1.65;
  color: #222222;
  max-width: 75ch;
  margin: 0;
}

/* 4. WARUM WIR? (Grid de tarjetas con sombra morada y hover lima) */
.aboutus-why h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  margin: 0 0 1.75rem;
  text-align: center;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.why-item {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 5px 5px 0px #5f36b0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.why-item:hover {
  transform: translateY(-4px);
  box-shadow: 7px 7px 0px #e3ff54;
}

.why-item h3 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #000000;
  margin: 0 0 0.65rem;
}

.why-item p {
  font-size: 0.98rem;
  line-height: 1.6;
  color: #333333;
  margin: 0;
}

/* 5. COMMUNITY (Bloque morado igual al CTA de book-service) */
.aboutus-community {
  background-color: #5f36b0;
  color: #ffffff;
  border: 2px solid #000000;
  border-radius: 24px;
  padding: 3.25rem 2rem;
  text-align: center;
  box-shadow: 8px 8px 0px #000000;
}

.aboutus-community h2 {
  font-size: clamp(1.75rem, 3.5vw, 2.4rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 1rem;
}

.aboutus-community p {
  max-width: 65ch;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.65;
  color: #ffffff;
}

/* RESPONSIVE */
@media (max-width: 860px) {
  .why-grid {
    grid-template-columns: 1fr;
  }

  .aboutus-content,
  .aboutus-mission,
  .aboutus-community {
    padding: 2rem 1.5rem;
  }
}
</style>