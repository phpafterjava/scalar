<script setup lang="ts">
const unlocked = [
  {
    icon: '⚡',
    title: 'Parcours complet',
    desc: 'Tous les modules, sans limite',
    color: 'green',
  },
  {
    icon: '🤖',
    title: 'IA Socratique',
    desc: 'Feedback gradué sur chaque exercice',
    color: 'indigo',
  },
  {
    icon: '🏅',
    title: 'Certifications',
    desc: 'PDF téléchargeables sur chaque parcours',
    color: 'amber',
  },
]

const colorMap: Record<string, { bg: string }> = {
  green:  { bg: 'rgba(34,197,94,0.12)' },
  indigo: { bg: 'rgba(99,102,241,0.12)' },
  amber:  { bg: 'rgba(245,158,11,0.12)' },
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
    <!-- Minimal nav -->
    <nav class="h-16 flex items-center px-20 bg-slate-900/80 backdrop-blur border-b border-slate-800 flex-shrink-0">
      <RouterLink to="/" class="font-mono font-bold text-xl text-green-500 tracking-tight">
        scalar_
      </RouterLink>
    </nav>

    <!-- Background glows -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[160px]" style="background:rgba(34,197,94,0.04)"></div>
      <div class="absolute top-1/2 right-1/3 w-[500px] h-[400px] rounded-full blur-[120px]" style="background:rgba(99,102,241,0.05)"></div>
    </div>

    <!-- ── CONTENT ── -->
    <main class="relative flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">

      <!-- Success ring -->
      <div class="relative mb-8">
        <div
          class="w-24 h-24 rounded-full flex items-center justify-center"
          style="background:rgba(34,197,94,0.12);box-shadow:0 0 60px rgba(34,197,94,0.2)"
        >
          <div
            class="w-16 h-16 rounded-full flex items-center justify-center"
            style="background:rgba(34,197,94,0.18)"
          >
            <span class="text-3xl font-bold text-green-500">✓</span>
          </div>
        </div>
      </div>

      <!-- Title -->
      <h1 class="font-mono font-bold text-4xl md:text-[2.75rem] text-slate-50 tracking-tight mb-3">
        Bienvenue dans Scalar Premium !
      </h1>
      <p class="text-lg text-slate-400 mb-6">
        Votre compte Premium est activé. Tout est déverrouillé.
      </p>

      <!-- Email confirmation badge -->
      <div class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-sm text-slate-400 mb-10">
        <span class="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
        Confirmation envoyée à votre adresse e-mail
      </div>

      <!-- Unlocked section -->
      <p class="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-5">
        Ce qui est maintenant déverrouillé
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl w-full">
        <div
          v-for="item in unlocked"
          :key="item.title"
          class="flex flex-col items-start gap-3 p-5 rounded-2xl border border-slate-700 bg-slate-800/40"
        >
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            :style="{ background: colorMap[item.color]?.bg }"
          >
            {{ item.icon }}
          </div>
          <div class="text-left">
            <p class="font-semibold text-slate-100 text-sm">{{ item.title }}</p>
            <p class="text-xs text-slate-400 mt-0.5 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <RouterLink
        to="/"
        class="px-10 py-4 bg-green-500 hover:bg-green-400 text-[#052e16] font-bold text-base rounded-xl transition-colors mb-5"
        style="box-shadow:0 8px 32px rgba(34,197,94,0.3)"
      >
        Commencer mon parcours  →
      </RouterLink>

      <!-- Account link -->
      <button class="text-sm text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-4 decoration-slate-700">
        Gérer mon abonnement
      </button>
    </main>
  </div>
</template>
