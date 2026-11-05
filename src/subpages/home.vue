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
        <buttonBookLiner>
          <span>Liner buchen</span>
        </buttonBookLiner>
        <buttonBookLiner>
          <span>Wie es funktioniert</span>
        </buttonBookLiner>
        <br />
        <p>⏳ 48h stornierbar</p>
        <p>✅ Verifizierte Liner</p>
        <p>🔒 Sicher bezahlt</p>
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

/* Linke und rechte Spalte */
.left,
.right {
  display: flex;
  flex-direction: column; /* Elemente INNERHALB der Spalte sollen UNTEREINANDER stehen */
  justify-content: flex-start;
  align-items: flex-start; /* Bindestrich hinzugefügt */
  flex: 1; /* Beide Spalten teilen sich den Platz 50/50 auf */
  gap: 20px; /* Etwas Abstand zwischen den Überschriften/Buttons in den Spalten */
}

.cta-button {
  background-color: #faf4f4;
  color: black;
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  margin-bottom: 16px;
}

.headline {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #000000;
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

  .left,
  .right {
    width: 100%;
    align-items: center; /* Zentriert den Text auf dem Handy */
    text-align: center;
  }
}
</style>
