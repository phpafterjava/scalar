<script setup lang="ts">
import { ref, computed } from 'vue'
import AppNav from '@/components/AppNav.vue'

type Billing = 'monthly' | 'annual'

const billing = ref<Billing>('annual')

const plans = computed(() => [
  {
    id: 'free',
    name: 'Free',
    desc: 'Pour découvrir Scalar\net tester la boucle de valeur.',
    price: 0,
    priceAnnual: 0,
    cta: 'Commencer gratuitement',
    ctaTo: '/confirmation',
    highlight: false,
    badge: null,
    features: [
      { label: 'Test de niveau adaptatif', included: true },
      { label: '2 modules par parcours', included: true },
      { label: 'Éditeur de code sandbox', included: true },
      { label: 'Tests automatiques pass/fail', included: true },
      { label: 'Accès aux cours d\'essai', included: true },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    desc: 'Accès complet, feedback IA,\ncertifications incluses.',
    price: 12,
    priceAnnual: 7,
    cta: 'Choisir Premium',
    ctaTo: '/checkout',
    highlight: true,
    badge: 'Le plus choisi',
    features: [
      { label: 'Tout le plan Free', included: true },
      { label: 'Parcours illimités (tous modules)', included: true },
      { label: 'Feedback IA socratique sur le code', included: true },
      { label: 'Certifications téléchargeables PDF', included: true },
      { label: 'Support prioritaire', included: true },
    ],
  },
])

const displayPrice = (plan: { price: number; priceAnnual: number }) =>
  billing.value === 'annual' ? plan.priceAnnual : plan.price

const billingSubLabel = computed(() =>
  billing.value === 'annual' ? 'Facturé 84€/an · soit 5€ de moins/mois qu\'en mensuel' : null
)
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
    <AppNav />

    <!-- Background glow -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px]" style="background:rgba(168,85,247,0.06)"></div>
    </div>

    <div class="relative pt-24 pb-20 px-6">
      <!-- ── HERO ── -->
      <div class="text-center mb-10">
        <h1 class="font-mono font-bold text-[2.5rem] text-slate-50 tracking-tight mb-4">
          Simple, honnête, sans surprise.
        </h1>
        <p class="text-slate-400 text-lg">
          Commencez gratuitement — upgradez quand vous êtes prêt.
        </p>
      </div>

      <!-- ── BILLING TOGGLE ── -->
      <div class="flex items-center justify-center gap-2 mb-12">
        <div class="flex items-center gap-1 p-1.5 rounded-full border border-slate-700 bg-slate-800/50">
          <button
            class="px-4 py-2 rounded-full text-sm font-medium transition-all"
            :class="billing === 'monthly' ? 'bg-slate-700 text-slate-100' : 'text-slate-400 hover:text-slate-200'"
            @click="billing = 'monthly'"
          >
            Mensuel
          </button>
          <button
            class="px-4 py-2 rounded-full text-sm font-semibold transition-all"
            :class="billing === 'annual' ? 'bg-slate-900 text-slate-100' : 'text-slate-400 hover:text-slate-200'"
            @click="billing = 'annual'"
          >
            Annuel
          </button>
        </div>
        <span
          v-if="billing === 'annual'"
          class="px-2.5 py-1 rounded-full text-xs font-bold text-green-400"
          style="background:rgba(34,197,94,0.15)"
        >
          -35%
        </span>
      </div>

      <!-- ── PLAN CARDS ── -->
      <div class="flex flex-col md:flex-row items-start justify-center gap-6 max-w-3xl mx-auto mb-10">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="w-full md:w-[400px] rounded-2xl border p-8 flex flex-col gap-4 transition-all"
          :class="plan.highlight
            ? 'border-indigo-500 bg-slate-800/60 shadow-2xl -mt-2'
            : 'border-slate-700 bg-slate-800/40'"
          :style="plan.highlight ? 'box-shadow:0 8px 40px rgba(99,102,241,0.25)' : ''"
        >
          <!-- Badge -->
          <div
            v-if="plan.badge"
            class="inline-flex self-start px-3.5 py-1.5 rounded-full text-xs font-semibold text-indigo-400 border"
            style="background:rgba(99,102,241,0.15);border-color:rgba(99,102,241,0.4)"
          >
            {{ plan.badge }}
          </div>

          <div>
            <h2 class="text-xl font-bold text-slate-100 mb-1">{{ plan.name }}</h2>
            <p class="text-sm text-slate-400 whitespace-pre-line leading-relaxed">{{ plan.desc }}</p>
          </div>

          <div class="border-t border-slate-700"></div>

          <!-- Price -->
          <div>
            <div class="flex items-baseline gap-1.5">
              <span class="font-mono font-bold text-4xl text-slate-50">
                {{ displayPrice(plan) }}€
              </span>
              <span class="text-slate-400 text-base">/mois</span>
            </div>
            <p v-if="plan.highlight && billingSubLabel" class="text-xs text-slate-500 mt-1">
              {{ billingSubLabel }}
            </p>
          </div>

          <!-- CTA -->
          <RouterLink
            :to="plan.ctaTo"
            class="w-full py-3 rounded-xl text-center text-sm font-bold transition-colors"
            :class="plan.highlight
              ? 'bg-green-500 hover:bg-green-400 text-[#052e16]'
              : 'border border-slate-600 hover:border-slate-400 text-slate-400 hover:text-slate-200'"
          >
            {{ plan.cta }}
          </RouterLink>

          <div class="border-t border-slate-700"></div>

          <!-- Features -->
          <ul class="flex flex-col gap-3">
            <li
              v-for="feat in plan.features"
              :key="feat.label"
              class="flex items-center gap-3 text-sm"
              :class="plan.highlight && feat.label !== 'Tout le plan Free' ? 'text-slate-100 font-medium' : 'text-slate-400'"
            >
              <span
                class="w-1.5 h-1.5 rounded-full flex-shrink-0"
                :class="plan.highlight && feat.label !== 'Tout le plan Free' ? 'bg-green-500' : 'bg-slate-600'"
              ></span>
              {{ feat.label }}
            </li>
          </ul>
        </div>
      </div>

      <!-- ── TRUST STRIP ── -->
      <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
        <span
          v-for="item in ['Annulez à tout moment', 'Paiement sécurisé Stripe', 'Garantie satisfait 7 jours']"
          :key="item"
          class="flex items-center gap-2"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-green-500/60"></span>
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>
