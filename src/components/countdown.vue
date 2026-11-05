<template>
  <div class="countdown-wrapper">
    <!-- Das ref="countdownDiv" ist die Brücke zwischen HTML und deinem Script -->
    <div ref="countdownDiv" class="simply-countdown"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// Den Countdown aus der Bibliothek importieren
import simplyCountdown from "simplycountdown.js";

// Das HTML-Element referenzieren
const countdownDiv = ref<HTMLElement | null>(null);

onMounted(() => {
  // Sobald die Seite geladen ist, initialisieren wir den Countdown
  if (countdownDiv.value) {
    simplyCountdown(countdownDiv.value, {
      year: 2026, // Dein Ziel-Jahr
      month: 12, // Dein Ziel-Monat (z.B. August)
      day: 15, // Dein Ziel-Tag
      hours: 19, // Ziel-Uhrzeit (optional)

      // Deutsche Wörter für den Countdown
      words: {
        days: {
          root: "Tag",
          lambda: (root: string, n: number) => (n > 1 ? root + "e" : root),
        },
        hours: {
          root: "Stunde",
          lambda: (root: string, n: number) => (n > 1 ? root + "n" : root),
        },
        minutes: {
          root: "Minute",
          lambda: (root: string, n: number) => (n > 1 ? root + "n" : root),
        },
        seconds: {
          root: "Sekunde",
          lambda: (root: string, n: number) => (n > 1 ? root + "n" : root),
        },
      },
      plural: true,
      inline: false,
      enableUtc: false,
    });
  }
});
</script>

<style scoped>
.countdown-wrapper {
  margin: 32px 0;
}

/* Das umschließende Element - ordnet die Boxen nebeneinander an */
:deep(.simply-countdown) {
  display: flex;
  gap: 16px; /* Abstand zwischen den Blöcken */
  flex-wrap: wrap; /* Bricht um, falls der Bildschirm zu schmal wird */
}

/* Die einzelnen Kacheln */
:deep(.simply-section) {
  background-color: #e2ff54; /* Helles Grau-Weiß */
  border-radius: 24px; /* Starke Rundung wie auf dem Bild */
  width: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Die großen Zahlen */
:deep(.simply-amount) {
  display: block;
  font-size: 36px;
  font-weight: 800; /* Sehr fett */
  color: #1a202c; /* Dunkles Schwarz/Blau */
  line-height: 1;
  margin-bottom: 8px; /* Abstand zum Text darunter */
}

/* Der Text (DAYS, HOURS, etc.) */
:deep(.simply-word) {
  font-size: 11px;
  font-weight: 700;
  color: #718096; /* Grau */
  text-transform: uppercase;
  letter-spacing: 2px; /* Zieht die Buchstaben leicht auseinander */
}
</style>
