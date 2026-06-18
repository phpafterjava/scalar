<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
  { to: '/parcours', label: 'Parcours' },
  { to: '/exercices', label: 'Exercices' },
  { to: '/tarifs', label: 'Tarifs' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <RouterLink to="/" class="font-mono font-bold text-xl text-green-500 tracking-tight hover:text-green-400 transition-colors">
      scalar_
    </RouterLink>

    <div class="flex items-center gap-8">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="text-sm font-medium transition-colors"
        :class="route.path === link.to ? 'text-slate-100 font-semibold' : 'text-slate-400 hover:text-slate-100'"
      >
        {{ link.label }}
      </RouterLink>
    </div>

    <div class="flex items-center gap-4">
      <button class="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors">
        Connexion
      </button>
      <RouterLink
        to="/tarifs"
        class="px-5 py-2.5 bg-green-500 hover:bg-green-400 text-[#052e16] font-semibold text-sm rounded-xl transition-colors"
      >
        Commencer gratuitement
      </RouterLink>
    </div>
  </nav>
</template>
