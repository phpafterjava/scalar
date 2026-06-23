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
    cta: 'Choisir Premium →',
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
  billing.value === 'annual' ? 'Facturé 84€/an · soit 5€ de moins/mois qu\'en mensuel' : null,
)

const toggleClass = (active: boolean) =>
  active ? 'bg-surface-2 text-fg shadow-sm' : 'text-fg-muted hover:text-fg'
</script>

<template>
  <div class="relative min-h-screen bg-ink text-fg overflow-x-hidden">
    <AppNav />

    <!-- Blueprint grid + glow -->
    <div class="fixed inset-0 bp-grid pointer-events-none" aria-hidden="true"></div>
    <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[680px] h-[480px] rounded-full blur-[150px]"
        style="background: rgba(74, 222, 128, 0.05)"
      ></div>
    </div>

    <div class="relative pt-24 pb-16 px-6 min-h-screen flex flex-col justify-center">
      <!-- ── HERO ── -->
      <div class="text-center mb-10">
        <h1 class="font-mono font-bold text-4xl md:text-[2.75rem] text-fg tracking-tight mb-3">
          Simple, honnête, sans surprise.
        </h1>
        <p class="text-fg-muted text-lg">
          Commencez gratuitement — upgradez quand vous êtes prêt.
        </p>
      </div>

      <!-- ── BILLING TOGGLE ── -->
      <div class="flex items-center justify-center gap-2 mb-12">
        <div class="flex items-center gap-1 p-1.5 rounded-full border border-line bg-surface/60">
          <button
            class="px-4 py-2 rounded-full text-sm font-semibold transition-all"
            :class="toggleClass(billing === 'monthly')"
            @click="billing = 'monthly'"
          >
            Mensuel
          </button>
          <button
            class="px-4 py-2 rounded-full text-sm font-semibold transition-all"
            :class="toggleClass(billing === 'annual')"
            @click="billing = 'annual'"
          >
            Annuel
          </button>
        </div>
        <span
          v-if="billing === 'annual'"
          class="px-2.5 py-1 rounded-full text-xs font-bold text-signal bg-signal/15"
        >
          -35%
        </span>
      </div>

      <!-- ── PLAN CARDS ── -->
      <div class="flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-3xl mx-auto mb-10 w-full">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="w-full md:w-[400px] rounded-2xl border p-8 flex flex-col gap-4 transition-all"
          :class="plan.highlight ? 'border-gold bg-surface/60' : 'border-line bg-surface/60'"
          :style="plan.highlight ? 'box-shadow: 0 8px 40px rgba(212, 165, 55, 0.12)' : ''"
        >
          <!-- Badge -->
          <div
            v-if="plan.badge"
            class="inline-flex self-start px-3.5 py-1.5 rounded-full text-xs font-semibold text-signal-ink bg-gold"
          >
            {{ plan.badge }}
          </div>

          <div>
            <h2 class="text-xl font-bold text-fg mb-1">{{ plan.name }}</h2>
            <p class="text-sm text-fg-muted whitespace-pre-line leading-relaxed">{{ plan.desc }}</p>
          </div>

          <div class="border-t border-line"></div>

          <!-- Price -->
          <div>
            <div class="flex items-baseline gap-1.5">
              <span class="font-mono font-bold text-4xl text-fg">{{ displayPrice(plan) }}€</span>
              <span class="text-fg-muted text-base">/mois</span>
            </div>
            <p v-if="plan.highlight && billingSubLabel" class="text-xs text-fg-faint mt-1">
              {{ billingSubLabel }}
            </p>
          </div>

          <!-- CTA -->
          <RouterLink
            :to="plan.ctaTo === '/checkout' ? { path: plan.ctaTo, query: { billing } } : plan.ctaTo"
            class="w-full py-3 rounded-xl text-center text-sm font-bold transition-colors"
            :class="plan.highlight
              ? 'bg-signal hover:bg-signal/90 text-signal-ink'
              : 'border border-line-strong hover:border-fg-faint text-fg-muted hover:text-fg'"
            data-umami-event="Choisir un plan"
            :data-umami-event-plan="plan.name"
          >
            {{ plan.cta }}
          </RouterLink>

          <div class="border-t border-line"></div>

          <!-- Features -->
          <ul class="flex flex-col gap-3">
            <li
              v-for="feat in plan.features"
              :key="feat.label"
              class="flex items-center gap-3 text-sm"
              :class="plan.highlight && feat.label !== 'Tout le plan Free' ? 'text-fg font-medium' : 'text-fg-muted'"
            >
              <span
                class="w-1.5 h-1.5 rounded-full flex-shrink-0"
                :class="plan.highlight && feat.label !== 'Tout le plan Free' ? 'bg-signal' : 'bg-fg-faint'"
              ></span>
              {{ feat.label }}
            </li>
          </ul>
        </div>
      </div>

      <!-- ── TRUST STRIP ── -->
      <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-fg-faint">
        <span
          v-for="item in ['Annulez à tout moment', 'Paiement sécurisé Stripe', 'Garantie satisfait 7 jours']"
          :key="item"
          class="flex items-center gap-2"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-signal/60"></span>
          {{ item }}
        </span>
      </div>
    </div>

    <!-- Render nested modal routes (checkout / confirmation) -->
    <RouterView />
  </div>
</template>
