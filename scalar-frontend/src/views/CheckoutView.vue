<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isAnnual = computed(() => route.query.billing !== 'monthly')
const price = computed(() => (isAnnual.value ? 84 : 12))
const periodText = computed(() => (isAnnual.value ? '/an' : '/mois'))

const form = reactive({
  email: '',
  card: '',
  expiry: '',
  cvc: '',
  name: '',
})

function handleSubmit() {
  const umami = (window as any).umami
  if (umami) {
    umami.track('Paiement Soumis', {
      type: isAnnual.value ? 'Annuel' : 'Mensuel',
      price: price.value,
      revenue: price.value,
      currency: 'EUR',
    })
  }
  router.push({ name: 'confirmation', query: route.query })
}

function close() {
  router.push({ name: 'tarifs' })
}

const premiumFeatures = [
  'Parcours illimités',
  'Feedback IA socratique',
  'Certifications PDF',
  'Support prioritaire',
]

const inputClass =
  'w-full h-10 px-3.5 rounded-xl border border-line bg-surface-2 text-fg placeholder:text-fg-faint focus:outline-none focus:border-signal transition-colors text-sm'
</script>

<template>
  <!-- Dimmed overlay -->
  <div
    class="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 md:p-6 bg-ink/80 backdrop-blur-sm overflow-y-auto"
    @click.self="close"
  >
    <div class="absolute inset-0 bp-grid opacity-40 pointer-events-none" aria-hidden="true"></div>

    <!-- Modal -->
    <div
      class="relative w-full max-w-3xl my-auto rounded-2xl border border-line bg-surface overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.65)] text-fg"
      role="dialog"
      aria-modal="true"
      aria-label="Paiement"
    >
      <!-- Close button -->
      <button
        type="button"
        aria-label="Fermer"
        class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-fg-faint hover:text-fg hover:bg-surface-2 transition-colors text-lg z-10"
        @click="close"
      >
        ✕
      </button>

      <div class="grid md:grid-cols-[300px_1fr]">
        <!-- ── LEFT: ORDER SUMMARY ── -->
        <div class="bg-surface-2/50 p-6 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-line">
          <h2 class="text-xs font-semibold uppercase tracking-widest text-fg-faint mb-1">
            Récapitulatif
          </h2>

          <div class="flex flex-col gap-4">
            <!-- Plan header -->
            <div class="flex items-center justify-between">
              <span class="font-bold text-lg text-fg">Scalar Premium</span>
              <span
                class="px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 border"
                style="background:rgba(99,102,241,0.15);border-color:rgba(99,102,241,0.35)"
              >
                {{ isAnnual ? 'Annuel' : 'Mensuel' }}
              </span>
            </div>

            <div class="border-t border-line"></div>

            <!-- Price -->
            <div class="flex items-center justify-between">
              <span class="text-fg-muted text-sm">{{ isAnnual ? 'Total annuel' : 'Total mensuel' }}</span>
              <div class="flex items-baseline gap-1.5">
                <span class="font-mono font-bold text-2xl text-fg">{{ price }}€</span>
                <span class="text-fg-muted text-xs">{{ periodText }}</span>
              </div>
            </div>
            <p v-if="isAnnual" class="text-xs text-signal -mt-2">soit 7€/mois · économisez -35% vs mensuel</p>
            <p v-else class="text-xs text-fg-muted -mt-2">sans engagement · résiliable à tout moment</p>

            <div class="border-t border-line"></div>

            <!-- Features -->
            <ul class="flex flex-col gap-2">
              <li
                v-for="feat in premiumFeatures"
                :key="feat"
                class="flex items-center gap-3 text-sm text-fg-muted"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-signal flex-shrink-0"></span>
                {{ feat }}
              </li>
            </ul>
          </div>

          <!-- Guarantee -->
          <div class="flex items-center gap-2 text-sm text-fg-faint mt-auto pt-4">
            <span class="w-1.5 h-1.5 rounded-full bg-heat/70 flex-shrink-0"></span>
            Garantie satisfait ou remboursé 7 jours
          </div>

          <p class="text-xs text-fg-faint leading-relaxed">
            Renouvellement automatique {{ isAnnual ? 'annuel' : 'mensuel' }}.<br>
            Annulable à tout moment depuis votre profil.
          </p>
        </div>

        <!-- ── RIGHT: PAYMENT FORM ── -->
        <div class="p-6 flex flex-col justify-center">
          <h2 class="font-bold text-lg text-fg mb-4">Informations de paiement</h2>

          <form class="flex flex-col gap-3.5" @submit.prevent="handleSubmit">
            <!-- Email -->
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-fg-muted" for="email">Adresse e-mail</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="vous@exemple.com"
                required
                :class="inputClass"
              >
            </div>

            <!-- Card number -->
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-fg-muted" for="card">Numéro de carte</label>
              <input
                id="card"
                v-model="form.card"
                type="text"
                autocomplete="cc-number"
                inputmode="numeric"
                placeholder="1234  5678  9012  3456"
                maxlength="19"
                required
                :class="[inputClass, 'font-mono tracking-wider']"
              >
            </div>

            <!-- Expiry + CVC -->
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <label class="text-xs font-medium text-fg-muted" for="expiry">Date d'expiration</label>
                <input
                  id="expiry"
                  v-model="form.expiry"
                  type="text"
                  autocomplete="cc-exp"
                  placeholder="MM / AA"
                  maxlength="7"
                  required
                  :class="[inputClass, 'font-mono']"
                >
              </div>
              <div class="flex flex-col gap-1">
                <label class="text-xs font-medium text-fg-muted" for="cvc">CVC</label>
                <input
                  id="cvc"
                  v-model="form.cvc"
                  type="password"
                  autocomplete="cc-csc"
                  inputmode="numeric"
                  placeholder="•••"
                  maxlength="4"
                  required
                  :class="[inputClass, 'font-mono']"
                >
              </div>
            </div>

            <!-- Cardholder name -->
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-fg-muted" for="name">Nom sur la carte</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                autocomplete="cc-name"
                placeholder="Marie Dupont"
                required
                :class="inputClass"
              >
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="w-full py-2.5 rounded-xl bg-signal hover:bg-signal/90 text-signal-ink font-bold text-sm transition-colors mt-1"
              style="box-shadow:0 8px 24px rgba(74,222,128,0.25)"
            >
              Payer {{ price }}€ / {{ isAnnual ? 'an' : 'mois' }}  →
            </button>

            <!-- Stripe attribution -->
            <div class="flex items-center justify-center gap-2 text-xs text-fg-faint">
              <span class="w-1 h-1 rounded-full bg-line-strong"></span>
              Paiement traité par Stripe · PCI DSS Level 1
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
