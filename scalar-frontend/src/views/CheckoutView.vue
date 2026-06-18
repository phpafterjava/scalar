<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  email: '',
  card: '',
  expiry: '',
  cvc: '',
  name: '',
})

function handleSubmit() {
  router.push({ name: 'confirmation' })
}

const premiumFeatures = [
  'Parcours illimités',
  'Feedback IA socratique',
  'Certifications PDF',
  'Support prioritaire',
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <!-- Minimal nav -->
    <nav class="h-16 flex items-center justify-between px-20 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <RouterLink to="/" class="font-mono font-bold text-xl text-green-500 tracking-tight">
        scalar_
      </RouterLink>
      <div class="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50">
        <span class="w-2 h-2 rounded-full bg-green-500"></span>
        <span class="text-sm text-slate-400 font-medium">Paiement sécurisé</span>
      </div>
    </nav>

    <!-- Breadcrumb -->
    <div class="flex items-center gap-3 px-20 py-3 text-sm border-b border-slate-800/50">
      <RouterLink to="/tarifs" class="text-slate-500 hover:text-slate-300 transition-colors">
        Tarifs
      </RouterLink>
      <span class="text-slate-600">›</span>
      <span class="text-slate-100 font-semibold">Paiement</span>
    </div>

    <!-- Background glow -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="absolute top-1/2 right-1/3 w-[500px] h-[400px] rounded-full blur-[120px]" style="background:rgba(99,102,241,0.05)"></div>
    </div>

    <!-- ── MAIN LAYOUT ── -->
    <main class="relative px-6 pb-20 pt-8">
      <div class="max-w-4xl mx-auto grid md:grid-cols-[420px_1fr] gap-10">

        <!-- ── LEFT: ORDER SUMMARY ── -->
        <div class="flex flex-col gap-4">
          <h2 class="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
            Récapitulatif
          </h2>

          <div class="rounded-2xl border border-slate-700 bg-slate-800/50 p-7 flex flex-col gap-5">
            <!-- Plan header -->
            <div class="flex items-center justify-between">
              <span class="font-bold text-lg text-slate-100">Scalar Premium</span>
              <span
                class="px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 border"
                style="background:rgba(99,102,241,0.15);border-color:rgba(99,102,241,0.35)"
              >
                Annuel
              </span>
            </div>

            <div class="border-t border-slate-700"></div>

            <!-- Price -->
            <div class="flex items-center justify-between">
              <span class="text-slate-400 text-sm">Total annuel</span>
              <div class="flex items-baseline gap-1.5">
                <span class="font-mono font-bold text-3xl text-slate-50">84€</span>
                <span class="text-slate-400 text-sm">/an</span>
              </div>
            </div>
            <p class="text-xs text-green-500 -mt-2">soit 7€/mois · économisez -35% vs mensuel</p>

            <div class="border-t border-slate-700"></div>

            <!-- Features -->
            <ul class="flex flex-col gap-3">
              <li
                v-for="feat in premiumFeatures"
                :key="feat"
                class="flex items-center gap-3 text-sm text-slate-200"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                {{ feat }}
              </li>
            </ul>
          </div>

          <!-- Guarantee -->
          <div class="flex items-center gap-2 text-sm text-slate-500">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400/70 flex-shrink-0"></span>
            Garantie satisfait ou remboursé 7 jours
          </div>

          <p class="text-xs text-slate-600 leading-relaxed">
            Renouvellement automatique annuel.<br>
            Annulable à tout moment depuis votre profil.
          </p>
        </div>

        <!-- ── RIGHT: PAYMENT FORM ── -->
        <div>
          <h2 class="font-bold text-xl text-slate-100 mb-6">Informations de paiement</h2>

          <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
            <!-- Email -->
            <div class="flex flex-col gap-2">
              <label class="text-sm font-medium text-slate-400" for="email">Adresse e-mail</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="vous@exemple.com"
                required
                class="w-full h-12 px-4 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
              >
            </div>

            <!-- Card number -->
            <div class="flex flex-col gap-2">
              <label class="text-sm font-medium text-slate-400" for="card">Numéro de carte</label>
              <input
                id="card"
                v-model="form.card"
                type="text"
                autocomplete="cc-number"
                inputmode="numeric"
                placeholder="1234  5678  9012  3456"
                maxlength="19"
                required
                class="w-full h-12 px-4 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-mono tracking-wider"
              >
            </div>

            <!-- Expiry + CVC -->
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-medium text-slate-400" for="expiry">Date d'expiration</label>
                <input
                  id="expiry"
                  v-model="form.expiry"
                  type="text"
                  autocomplete="cc-exp"
                  placeholder="MM / AA"
                  maxlength="7"
                  required
                  class="w-full h-12 px-4 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-mono"
                >
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-medium text-slate-400" for="cvc">CVC</label>
                <input
                  id="cvc"
                  v-model="form.cvc"
                  type="password"
                  autocomplete="cc-csc"
                  inputmode="numeric"
                  placeholder="•••"
                  maxlength="4"
                  required
                  class="w-full h-12 px-4 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-mono"
                >
              </div>
            </div>

            <!-- Cardholder name -->
            <div class="flex flex-col gap-2">
              <label class="text-sm font-medium text-slate-400" for="name">Nom sur la carte</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                autocomplete="cc-name"
                placeholder="Marie Dupont"
                required
                class="w-full h-12 px-4 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
              >
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 text-[#052e16] font-bold text-base transition-colors mt-2"
              style="box-shadow:0 8px 24px rgba(34,197,94,0.25)"
            >
              Payer 84€ / an  →
            </button>

            <!-- Stripe attribution -->
            <div class="flex items-center justify-center gap-2 text-xs text-slate-600">
              <span class="w-1 h-1 rounded-full bg-slate-700"></span>
              Paiement traité par Stripe · PCI DSS Level 1
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>
