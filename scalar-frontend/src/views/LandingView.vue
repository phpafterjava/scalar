<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'

const features = [
  {
    num: '01',
    title: 'Test adaptatif',
    desc: 'Ton niveau mesuré en 10–20 questions. Difficulté ajustée en temps réel.',
  },
  {
    num: '02',
    title: 'Parcours IA',
    desc: 'Curriculum généré uniquement pour toi depuis ton diagnostic réel.',
  },
  {
    num: '03',
    title: 'Sandbox Docker',
    desc: 'Ton code tourne dans un vrai conteneur isolé — pas un widget.',
  },
]

const trustItems = ['Gratuit', 'Sans carte bancaire', '2 modules offerts']
</script>

<template>
  <div class="relative min-h-screen bg-ink text-fg overflow-x-hidden">
    <AppNav />

    <!-- Blueprint coordinate grid -->
    <div class="fixed inset-0 bp-grid pointer-events-none" aria-hidden="true"></div>

    <!-- Background glow -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        class="absolute top-1/4 left-1/3 w-[640px] h-[440px] rounded-full blur-[140px]"
        style="background: rgba(74, 222, 128, 0.05)"
      ></div>
    </div>

    <!-- ── HERO ── -->
    <section class="relative pt-28 pb-20 px-6 text-center">
      <!-- Badge pill -->
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-surface/60 text-sm text-fg-muted mb-8"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-signal animate-pulse"></span>
        Test adaptatif · Parcours IA · Sandbox Docker
      </div>

      <!-- Heading -->
      <h1
        class="font-mono font-bold text-5xl md:text-[3.5rem] leading-[1.1] text-fg mb-2 tracking-tight"
      >
        Apprends à coder.
      </h1>
      <h2
        class="font-mono font-bold text-5xl md:text-[3.5rem] leading-[1.1] text-signal mb-8 tracking-tight"
      >
        À ton niveau. Sur ta voie.
      </h2>

      <!-- Subtext -->
      <p class="text-lg text-fg-muted max-w-2xl mx-auto mb-10 leading-relaxed">
        Diagnostic adaptatif · Parcours générés par IA · Exercices en sandbox Docker. Apprends en
        profondeur. Pas en surface.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <RouterLink
          to="/tarifs"
          class="px-8 py-3.5 bg-signal hover:bg-signal/90 text-signal-ink font-bold text-base rounded-xl transition-colors"
          style="box-shadow: 0 8px 32px rgba(74, 222, 128, 0.2)"
        >
          Passer le test de niveau — Gratuit
        </RouterLink>
        <RouterLink
          to="/tarifs"
          class="px-8 py-3.5 border border-line-strong hover:border-fg-faint text-fg-muted hover:text-fg font-semibold text-base rounded-xl transition-colors"
        >
          Voir un cours d'essai
        </RouterLink>
      </div>

      <!-- Trust line -->
      <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-fg-faint">
        <span v-for="item in trustItems" :key="item" class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-signal/60"></span>
          {{ item }}
        </span>
      </div>
    </section>

    <!-- ── FEATURES ── -->
    <section class="relative px-6 pb-28">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div
          v-for="feature in features"
          :key="feature.num"
          class="p-6 rounded-2xl border border-line bg-surface/60 backdrop-blur hover:border-line-strong transition-colors"
        >
          <div
            class="inline-flex items-center justify-center w-9 h-7 rounded-md bg-signal/12 font-mono text-xs font-bold text-signal mb-4"
          >
            {{ feature.num }}
          </div>
          <h3 class="font-semibold text-fg mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-fg-muted leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
