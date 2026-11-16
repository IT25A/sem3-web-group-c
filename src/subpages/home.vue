<template>
  <section class="hero-section">
    <div class="page-container">
      <div class="left">
        <button class="cta-button">PLATZ SICHERN. ZEIT GENIESSEN!</button>
        <h1 class="headline">
          DU FEIERST, <br />
          <span class="highlight">WIR STEHEN AN</span>
        </h1>
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
        <h3 class="countdown-title">Countdown bis Einlass</h3>
        <countdown />
        <buttonBookLiner>
          <span>SERVICE BUCHEN</span>
        </buttonBookLiner>
      </div>
    </div>
  </section>

  <section class="howitworks-section">
    <div class="page-container">
      <div class="how-it-works-text">
        <p class="subtitle">Wie es funktioniert</p>
        <h2 class="section-headline">
          DREI SCHRITTE <br />
          <span class="highlight">NULL WARTEZEITEN</span>
        </h2>
        <p class="description">
          Vom Event bis zur Platzübergabe: transparent, sicher und jederzeit
          nachvollziehbar.
        </p>
        <div class="steps-container">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-text">
              <h3>Event wählen</h3>
              <p>Aus Ticketmaster.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-text">
              <h3>Jobber buchen und bezahlen</h3>
              <p>
                Kreditkarte oder Stripe. Das Geld hält der Zahlungsanbieter.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-text">
              <h3>Job erledigt, Geld freigegeben</h3>
              <p>Erst dann bekommt der Jobber sein Geld.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="how-it-works-image">
        <img
          src="@/assets/concert.png"
          alt="Ein belebtes Konzert"
          class="concert-image"
        />
      </div>
    </div>
  </section>

  <section class="event-feed-section">
    <div class="feed-container">
      <div class="feed-header">
        <div class="header-left">
          <p class="live-feed-subtitle">LIVE EVENT FEED</p>
          <h2 class="feed-headline">Was steht an?</h2>
        </div>
        <div class="header-right">
          <div class="feed-badge">
            <span class="green-dot"></span>
            Ticketmaster Event Feed
          </div>
        </div>
      </div>

      <div class="cards-container">
        <!-- Karte 1 -->
        <div class="event-card bg-green">
          <div class="provider-badge">TICKETMASTER</div>
          <div class="card-content">
            <p class="venue">ARENA BERLIN</p>
            <h3 class="artist">Beispiel-Band</h3>
            <p class="date">19. Nov.</p>
          </div>
          <button class="book-btn">Jobber buchen</button>
          <div class="watermark">01</div>
        </div>

        <!-- Karte 2 -->
        <div class="event-card bg-purple">
          <div class="provider-badge">TICKETMASTER</div>
          <div class="card-content">
            <p class="venue">HALLE HAMBURG</p>
            <h3 class="artist">DJ Beispiel</h3>
            <p class="date">28. Nov.</p>
          </div>
          <button class="book-btn">Jobber buchen</button>
          <div class="watermark">02</div>
        </div>

        <!-- Karte 3 -->
        <div class="event-card bg-peach">
          <div class="provider-badge">TICKETMASTER</div>
          <div class="card-content">
            <p class="venue">OLYMPIASTADION BERLIN</p>
            <h3 class="artist">Sängerin Beispiel</h3>
            <p class="date">06. Dez.</p>
          </div>
          <button class="book-btn">Jobber buchen</button>
          <div class="watermark">03</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "@/assets/main.css";
import { ref, onMounted } from "vue";
import buttonBookLiner from "@/components/button_bookLiner.vue";
import countdown from "@/components/countdown.vue";
</script>

<style scoped>
/* --- HERO SECTION & GRUND-LAYOUT --- */
.hero-section {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 20px;
}

.page-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  gap: 60px;
}

.left,
.right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  gap: 20px;
}

.left {
  text-align: left;
  max-width: 500px;
  gap: 24px;
}

.left p,
.left h1,
.left h2 {
  margin: 0;
  padding: 0;
}

.right {
  align-items: center;
  text-align: center;
  gap: 16px;
  border: 3px solid #8c52ff;
  border-radius: 20px;
  padding: 24px;
  background-color: #19181a;
}

.btnhook {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
}

.cta-button {
  background-color: #f5f0ff;
  font-weight: bold;
  color: black;
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  margin-bottom: 16px;
}

.countdown-title {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}

h1,
h2,
h3 {
  font-weight: bold;
}

.headline {
  font-size: 32px;
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
  color: #ffffff;
}

.sellpoint {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 32px;
  row-gap: 16px;
  align-items: center;
  margin-top: 8px;
}

.sellpoint p {
  font-size: 14px;
}

.gap {
  margin-left: 50px;
}

/* --- WIE ES FUNKTIONIERT SECTION --- */
.howitworks-section {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 20px;
}

.how-it-works-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  max-width: 500px;
  gap: 16px;
}

.how-it-works-image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  margin-bottom: 0;
}

.subtitle {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  margin: 0;
}

.section-headline {
  font-size: 32px;
  color: #000000;
  margin-top: 0;
  font-family: "Playfair Display", serif;
}

.description {
  margin: 0;
  padding: 0;
}

.concert-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 6px 6px 0px #000000;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  width: 100%;
}

.step {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
}

.step-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #5b42d5;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50%;
  flex-shrink: 0;
}

.step-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.step-text h3 {
  margin: 0;
  font-size: 16px;
  color: #000000;
}

.step-text p {
  margin: 0;
  font-size: 14px;
  color: #333333;
}

/* --- EVENT FEED SECTION --- */
.event-feed-section {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 60px 20px;
}

.feed-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
}

.feed-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.live-feed-subtitle {
  font-size: 12px;
  font-weight: 800;
  color: #5b42d5;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
}

.feed-headline {
  font-size: 48px;
  font-weight: 800;
  color: #111;
  margin: 0;
  font-family: "Playfair Display", serif;
  line-height: 1;
}

.feed-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: white;
  padding: 10px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
  color: #111;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.green-dot {
  width: 10px;
  height: 10px;
  background-color: #54c11b;
  border-radius: 50%;
  display: inline-block;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
}

.event-card {
  position: relative;
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 280px;
}

.bg-green {
  background-color: #e5f0cb;
}
.bg-purple {
  background-color: #e1dcf7;
}
.bg-peach {
  background-color: #f8dcc9;
}

.provider-badge {
  background-color: #ffffff;
  color: #000000;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 20px;
  align-self: flex-start;
  letter-spacing: 0.5px;
  margin-bottom: 32px;
}

.card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}

.venue {
  font-size: 14px;
  font-weight: 800;
  color: #333333;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.artist {
  font-size: 32px;
  font-weight: 800;
  color: #111111;
  margin: 0;
  line-height: 1.1;
}

.date {
  font-size: 18px;
  font-weight: 800;
  color: #111111;
  margin: 0;
}

.book-btn {
  background-color: #181628;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 600;
  align-self: flex-start;
  cursor: pointer;
  margin-top: auto;
  z-index: 2;
  transition: opacity 0.2s ease;
}

.book-btn:hover {
  opacity: 0.85;
}

.watermark {
  position: absolute;
  bottom: -15px;
  right: 15px;
  font-size: 130px;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.08);
  line-height: 1;
  z-index: 1;
  pointer-events: none;
}

/* --- RESPONSIVE DESIGN (HANDY & TABLET) --- */
/* Das hier gehört ganz nach unten und sorgt dafür, dass auf kleinen Bildschirmen alles umbricht */

@media (max-width: 1000px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 800px) {
  /* Hero- & How-It-Works-Sektion umbrechen */
  .page-container {
    flex-direction: column;
    align-items: center;
  }

  .how-it-works-text,
  .how-it-works-image {
    width: 100%;
    align-items: flex-start;
    text-align: left;
    justify-content: center;
  }

  .step {
    text-align: left;
  }
}

@media (max-width: 700px) {
  /* Event-Feed Header & Karten umbrechen */
  .feed-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .cards-container {
    grid-template-columns: 1fr;
  }
}
</style>
