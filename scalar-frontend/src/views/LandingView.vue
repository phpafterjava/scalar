<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'

const features = [
  {
    title: 'Test adaptatif réel',
    desc: 'Pas un quiz basique. Un algorithme qui ajuste la difficulté en temps réel pour cerner votre niveau exact en quelques minutes.',
    color: 'indigo' as const,
  },
  {
    title: 'Parcours généré par l\'IA',
    desc: 'Chaque apprenant reçoit un plan unique. Les modules maîtrisés sont sautés, les lacunes comblées en priorité.',
    color: 'green' as const,
  },
  {
    title: 'Sandbox Docker réelle',
    desc: 'Chaque exercice s\'exécute dans un vrai conteneur isolé. Pas de widget bridé — votre code tourne vraiment.',
    color: 'amber' as const,
  },
]

const colorMap = {
  indigo: { bg: 'bg-indigo-500/10', dot: 'bg-indigo-500/50' },
  green:  { bg: 'bg-green-500/10',  dot: 'bg-green-500/50' },
  amber:  { bg: 'bg-amber-400/10',  dot: 'bg-amber-400/50' },
}

const trustItems = [
  'Test gratuit sans carte bancaire',
  'Sandbox Docker incluse',
  'Annulable à tout moment',
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
    <AppNav />

    <!-- Background glow blobs -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="absolute top-1/4 left-1/3 w-[640px] h-[440px] rounded-full blur-[140px]" style="background:rgba(99,102,241,0.08)"></div>
      <div class="absolute top-1/2 right-1/4 w-[400px] h-[300px] rounded-full blur-[100px]" style="background:rgba(34,197,94,0.05)"></div>
    </div>

    <!-- Subtle vertical grid lines -->
    <div
      class="fixed inset-0 pointer-events-none"
      aria-hidden="true"
      style="background-image:repeating-linear-gradient(to right,rgba(148,163,184,0.025) 0px,rgba(148,163,184,0.025) 1px,transparent 1px,transparent 120px)"
    ></div>

    <!-- ── HERO ── -->
    <section class="relative pt-36 pb-20 px-6 text-center">
      <!-- Badge pill -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-sm text-slate-400 mb-8">
        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Test adaptatif · Parcours IA · Sandbox Docker
      </div>

      <!-- Heading -->
      <h1 class="font-mono font-bold text-5xl md:text-[3.5rem] leading-[1.1] text-slate-50 mb-2 tracking-tight">
        Votre niveau réel.
      </h1>
      <h2 class="font-mono font-bold text-5xl md:text-[3.5rem] leading-[1.1] text-green-500 mb-8 tracking-tight">
        Votre parcours, généré par l'IA.
      </h2>

      <!-- Subtext -->
      <p class="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
        Scalar évalue votre code, génère un parcours sur mesure et valide vos exercices dans
        de vrais conteneurs Docker. Gratuit pour démarrer.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
        <RouterLink
          to="/tarifs"
          class="px-8 py-3.5 bg-green-500 hover:bg-green-400 text-[#052e16] font-bold text-base rounded-xl transition-colors shadow-lg"
          style="box-shadow:0 8px 32px rgba(34,197,94,0.2)"
        >
          Commencer gratuitement
        </RouterLink>
        <RouterLink
          to="/tarifs"
          class="px-8 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 font-semibold text-base rounded-xl transition-colors"
        >
          Voir les tarifs
        </RouterLink>
      </div>

      <!-- Trust line -->
      <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
        <span
          v-for="item in trustItems"
          :key="item"
          class="flex items-center gap-2"
        >
          <span class="w-1.5 h-1.5 rounded-full" style="background:rgba(34,197,94,0.6)"></span>
          {{ item }}
        </span>
      </div>
    </section>

    <!-- ── FEATURES ── -->
    <section class="relative px-6 pb-28">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="p-6 rounded-2xl border border-slate-700/60 bg-slate-800/40 backdrop-blur hover:border-slate-600 transition-colors"
        >
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
            :class="colorMap[feature.color].bg"
          >
            <div class="w-4 h-4 rounded" :class="colorMap[feature.color].dot"></div>
          </div>
          <h3 class="font-semibold text-slate-100 mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-slate-400 leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
