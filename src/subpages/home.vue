<template>
  <section class="hero-section">
    <div class="page-container">
      <div class="left">
        <!-- Hier kommt der Inhalt der Seite hin -->
        <button class="cta-button">PLATZ SICHERN. ZEIT GENIESSEN!</button>
        <h2 class="headline">
          DU FEIERST, <br />
          <span class="highlight">WIR STEHEN AN</span>
        </h2>
        <p>
          Buche verifizierte Queue-Pros für dein nächstes Konzert. Dein Platz
          wartet schon auf dich – Snacks, Updates und gute Sicht inklusive
        </p>
        <div class="btnhook">
          <buttonBookLiner>
            <span>Liner buchen</span>
          </buttonBookLiner>
          <buttonBookLiner>
            <span>Wie es funktioniert</span>
          </buttonBookLiner>
        </div>
        <div class="sellpoint">
          <p>⏳ 48h stornierbar</p>
          <p class="gap">✅ Verifizierte Liner</p>
          <p>🔒 Sicher bezahlt</p>
        </div>
      </div>
      <div class="right">
        <h2 class="TheWeeknd">The Weeknd</h2>
        <h3>Countdown bis Einlass</h3>
        <countdown />
        <buttonBookLiner>
          <span>SERVICE BUCHEN</span>
        </buttonBookLiner>
      </div>
    </div>
  </section>
  <section class="howitworks-section">
    <div class="page-container">
      <div class="how-it-works-content">
        <p class="subtitle">Wie es funktioniert</p>
        <h2 class="section-headline">DREI SCHRITTE NULL WARTEZEITEN</h2>
        Vom Event bis zur Platzübergabe: transparent, sicher und jederzeit
        nachvollziehbar.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "@/assets/main.css";
import { ref, onMounted } from "vue";
import buttonBookLiner from "@/components/button_bookLiner.vue";
import countdown from "@/components/countdown.vue";
// Reaktive Variablen oder Logik hier einfügen
</script>
<style scoped>
/* Zentriert den gesamten Block auf dem Bildschirm */
.hero-section {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 20px; /* Etwas Abstand nach oben/unten und zu den Rändern */
}

/* Teilt den Inhalt in zwei Spalten auf */
.page-container {
  display: flex;
  flex-direction: row; /* Elemente nebeneinander */
  justify-content: space-between;
  align-items: flex-start; /* Alles bündig am oberen Rand ausrichten */
  width: 100%;
  max-width: 1200px; /* Maximale Breite, damit es auf großen Monitoren nicht zu weit auseinander zieht */
  gap: 60px; /* Abstand zwischen der linken und rechten Seite */
}

/* Linke und rechte Spalte teilen sich das Grund-Layout */
.left,
.right {
  display: flex;
  flex-direction: column; /* Elemente INNERHALB der Spalte stehen untereinander */
  justify-content: flex-start;
  align-items: flex-start; /* Schiebt Container und Buttons an den linken Rand */
  flex: 1; /* Beide Spalten teilen sich den Platz 50/50 auf */
  gap: 20px; /* Abstand zwischen den Elementen */
}

/* Spezifische Text-Ausrichtung nur für links (optional, falls nötig) */
.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Zwingt Buttons und Container an den linken Rand */
  text-align: left; /* Hält den Text linksbündig */
  flex: 1;
  max-width: 500px; /* Begrenzt die Breite leicht, damit der Text exakt so umbricht wie auf deinem Bild */
  gap: 24px; /* Gleichmäßiger Abstand zwischen Überschrift, Text und Buttons */
}
/* Entfernt unsichtbare Standard-Abstände von Texten, die das Layout nach rechts verschieben könnten */
.left p,
.left h2 {
  margin: 0;
  padding: 0;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: center; /* Zentriert die Countdown-Box und den Button */
  text-align: center; /* Zentriert den Text */
  flex: 1;
  gap: 16px; /* Abstand zwischen Countdown, Überschrift und Button */
  border: 3px solid #8c52ff;
  border-radius: 20px;
  padding: 24px; /* Abstand innerhalb der Box */
  background-color: #f5f0ff;
}

.btnhook {
  display: flex;
  flex-direction: row; /* Buttons nebeneinander */
  gap: 20px; /* Abstand zwischen den Buttons */
  margin-top: 20px; /* Etwas Abstand nach oben */
}
.cta-button {
  background-color: #faf4f4;
  font-weight: bold;
  color: black;
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  margin-bottom: 16px;
}
h2 {
  font-weight: bold;
}
.headline {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #000000;
  font-family: "Playfair Display", serif;
}

.highlight {
  color: #8c52ff;
  font-weight: bold;
}

span {
  font-weight: bold;
}

.TheWeeknd {
  font-size: 50px;
  font-weight: bold;
  color: #000000;
}

/* Responsive Design: Auf kleinen Bildschirmen (Handys) alles untereinander anzeigen */
@media (max-width: 800px) {
  .page-container {
    flex-direction: column;
    align-items: center; /* Zentriert die Spalten auf dem Handy */
  }
}

/* Die Checkliste (Verifizierte Liner etc.) als sauberes 2-Spalten-Raster */
.sellpoint {
  display: grid;
  grid-template-columns: auto auto; /* Baut zwei exakte Spalten */
  column-gap: 32px; /* Abstand zwischen linker und rechter Spalte */
  row-gap: 16px; /* Abstand nach unten */
  align-items: center; /* Zentriert Emojis und Text auf einer Höhe */
  margin-top: 8px;
}

.sellpoint p {
  font-size: 14px;
}
.gap {
  margin-left: 50px; /* Abstand zwischen den beiden Punkten */
}
.howitworks-section {
  padding: 40px 75px; /* Etwas Abstand nach oben/unten und zu den Rändern */
  width: 100%;
  justify-content: center;
  margin-left: 40px;
}
/* Container für den Text, damit er die volle Breite des page-containers nutzt */
.how-it-works-content {
  width: 100%;
  text-align: left; /* Hält den Text auf der linken Seite */
}

/* Das kleine "Wie es funktioniert" */
.subtitle {
  font-size: 16px;
  color: #4a5568; /* Leichtes Grau, damit die große Überschrift mehr knallt */
  margin-bottom: 8px;
}

/* Die große Überschrift */
.section-headline {
  font-size: 36px;
  font-weight: 800; /* Sehr fett */
  color: #000000;
  margin: 0;
  font-family: serif; /* Setzt hier deine Serifenschrift ein, z.B. 'Playfair Display' */
}
</style>
