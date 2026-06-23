<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function close() {
  router.push({ name: 'tarifs' })
}

const unlocked = [
  { icon: '⚡', title: 'Parcours complet', desc: 'Tous les modules, sans limite' },
  { icon: '🤖', title: 'IA Socratique', desc: 'Feedback gradué sur chaque exercice' },
  { icon: '🏅', title: 'Certifications', desc: 'PDF téléchargeables sur chaque parcours' },
]
</script>

<template>
  <!-- Dimmed overlay -->
  <div
    class="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 md:p-6 bg-ink/80 backdrop-blur-sm overflow-y-auto"
    @click.self="close"
  >
    <div class="absolute inset-0 bp-grid opacity-40 pointer-events-none" aria-hidden="true"></div>
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full blur-[150px]"
        style="background: rgba(74, 222, 128, 0.06)"
      ></div>
    </div>

    <!-- Modal -->
    <div
      class="relative w-full max-w-lg my-auto rounded-2xl border border-line bg-surface overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
      role="dialog"
      aria-modal="true"
      aria-label="Paiement confirmé"
    >
      <!-- Close -->
      <button
        type="button"
        aria-label="Fermer"
        class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-fg-faint hover:text-fg hover:bg-surface-2 transition-colors text-lg z-10"
        @click="close"
      >
        ✕
      </button>

      <div class="p-6 md:p-8 flex flex-col items-center text-center">
        <!-- Success ring -->
        <div
          class="w-14 h-14 rounded-full flex items-center justify-center bg-signal/12 mb-4"
          style="box-shadow: 0 0 50px rgba(74, 222, 128, 0.25)"
        >
          <div class="w-10 h-10 rounded-full flex items-center justify-center bg-signal/20">
            <span class="text-xl font-bold text-signal">✓</span>
          </div>
        </div>

        <!-- Title -->
        <h1 class="font-mono font-bold text-xl md:text-2xl text-fg tracking-tight mb-1">
          Bienvenue dans Scalar Premium !
        </h1>
        <p class="text-fg-muted text-sm mb-3">
          Votre compte Premium est activé. Tout est déverrouillé.
        </p>

        <!-- Email badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-surface-2/60 text-xs text-fg-muted mb-4"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-signal flex-shrink-0"></span>
          Confirmation envoyée à marie.dupont@exemple.com
        </div>

        <!-- Unlocked list -->
        <div class="w-full flex flex-col gap-2 mb-5">
          <div
            v-for="item in unlocked"
            :key="item.title"
            class="flex items-center gap-3 p-2.5 rounded-xl border border-line bg-surface-2/40 text-left"
          >
            <div
              class="w-8 h-8 rounded-lg flex items-center justify-center text-lg flex-shrink-0 bg-signal/12"
            >
              {{ item.icon }}
            </div>
            <div>
              <p class="font-semibold text-fg text-xs">{{ item.title }}</p>
              <p class="text-[11px] text-fg-muted leading-tight">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <RouterLink
          to="/"
          class="w-full py-3 rounded-xl bg-signal hover:bg-signal/90 text-signal-ink font-bold text-sm transition-colors mb-2 text-center"
          style="box-shadow: 0 8px 32px rgba(74, 222, 128, 0.3)"
        >
          Commencer mon parcours →
        </RouterLink>

        <button
          type="button"
          class="text-xs text-fg-faint hover:text-fg-muted transition-colors underline underline-offset-4 decoration-line"
        >
          Gérer mon abonnement
        </button>
      </div>
    </div>
  </div>
</template>
