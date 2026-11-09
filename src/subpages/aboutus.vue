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
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 40px;
}

.aboutus-header {
  text-align: center;
  padding: 60px 40px;
  background-color: #f5f0ff;
  border-radius: 20px;
}

.aboutus-header h1 {
  font-size: 42px;
  font-weight: 800;
  color: #17151d;
  margin-bottom: 15px;
}

.aboutus-header .slogan {
  font-size: 24px;
  font-weight: 700;
  color: #8c52ff;
  margin-bottom: 20px;
}

.aboutus-header .header-content {
  max-width: 900px;
  margin: 0 auto;
  font-size: 17px;
  line-height: 1.7;
  color: #6b6873;
}

.aboutus-content {
  margin-top: 30px;
}

.aboutus-content h2 {
  font-size: 32px;
  font-weight: 800;
  color: #17151d;
  margin-bottom: 20px;
}

.aboutus-content p {
  font-size: 17px;
  text-align:justify;
  line-height: 1.8;
  color: #6b6873;
}

.aboutus-mission {
  background-color: #f5f0ff;
  padding: 50px 40px;
  margin-top: 30px;
  border-radius: 20px;
}

.aboutus-mission h2 {
  font-size: 32px;
  font-weight: 800;
  color: #17151d;
  margin-bottom: 20px;
}

.aboutus-mission p {
  font-size: 17px;
  line-height: 1.8;
  color: #6b6873;
  max-width: 900px;
}
.aboutus-why {
  margin-top: 60px;
  padding: 30px 0;
}

.aboutus-why h2 {
  font-size: 32px;
  font-weight: 800;
  color: #17151d;
  margin-bottom: 30px;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.why-item {
  padding: 25px;
  background-color: #faf8ff;
  border-radius: 15px;
  border: 1px solid #e8e1f2;
}

.why-item h3 {
  font-size: 20px;
  font-weight: 700;
  color: #8c52ff;
  margin-bottom: 10px;
}

.why-item p {
  font-size: 16px;
  line-height: 1.7;
  color: #6b6873;
}

.aboutus-community {
  margin-top: 60px;
  margin-bottom: 30px;
  padding: 50px 40px;
  text-align: center;
  background-color: #f5f0ff;
  border-radius: 20px;
}

.aboutus-community h2 {
  font-size: 32px;
  font-weight: 800;
  color: #17151d;
  margin-bottom: 20px;
}

.aboutus-community p {
  max-width: 1000px;
  margin: 0 auto;
  font-size: 17px;
  line-height: 1.8;
  color: #6b6873;
}


</style>