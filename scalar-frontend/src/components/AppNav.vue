<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { to: '/parcours', label: 'Parcours' },
  { to: '/exercices', label: 'Exercices' },
  { to: '/tarifs', label: 'Tarifs' },
]

const isActive = (to: string) => route.path === to

function onScroll() {
  scrolled.value = window.scrollY > 8
}

watch(
  () => route.path,
  () => {
    mobileOpen.value = false
  },
)

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 bg-ink/80 backdrop-blur-md border-b transition-all duration-200"
    :class="scrolled ? 'border-line shadow-lg shadow-black/30' : 'border-transparent'"
    aria-label="Navigation principale"
  >
    <!-- Left: logo -->
    <RouterLink
      to="/"
      class="font-mono font-bold text-xl text-signal tracking-tight hover:opacity-80 transition-opacity"
    >
      scalar_
    </RouterLink>

    <!-- Center: nav links — absolutely centered to the viewport -->
    <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 h-full items-stretch justify-center gap-8">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="relative h-full flex items-center text-sm font-medium transition-colors"
        :class="isActive(link.to) ? 'text-fg' : 'text-fg-muted hover:text-fg'"
      >
        {{ link.label }}
        <span
          v-if="isActive(link.to)"
          class="absolute bottom-0 left-0 right-0 h-0.5 bg-signal rounded-full"
        ></span>
      </RouterLink>
    </div>

    <!-- Right: account actions (desktop) + hamburger (mobile) -->
    <div class="flex items-center">
      <div class="hidden md:flex items-center gap-3">
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-fg-muted hover:text-fg border border-line hover:border-line-strong rounded-lg transition-colors"
        >
          Connexion
        </button>
        <RouterLink
          to="/tarifs"
          class="px-5 py-2.5 bg-signal hover:bg-signal/90 text-signal-ink font-semibold text-sm rounded-xl transition-colors"
        >
          Commencer gratuitement
        </RouterLink>
      </div>

      <button
        type="button"
        class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-fg hover:bg-surface-2 transition-colors"
        :aria-expanded="mobileOpen"
        aria-label="Ouvrir le menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <template v-if="mobileOpen">
            <path d="M6 6l12 12M18 6L6 18" />
          </template>
          <template v-else>
            <path d="M4 7h16M4 12h16M4 17h16" />
          </template>
        </svg>
      </button>
    </div>

    <!-- Mobile menu panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden absolute top-16 left-0 right-0 bg-ink/95 backdrop-blur-md border-b border-line p-4 flex flex-col gap-1"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-3 py-3 rounded-lg text-sm font-medium transition-colors"
          :class="isActive(link.to) ? 'text-fg bg-surface-2' : 'text-fg-muted hover:text-fg hover:bg-surface-2'"
        >
          {{ link.label }}
        </RouterLink>

        <div class="border-t border-line my-2"></div>

        <button
          type="button"
          class="px-3 py-3 rounded-lg text-sm font-medium text-fg-muted hover:text-fg border border-line text-left transition-colors"
        >
          Connexion
        </button>
        <RouterLink
          to="/tarifs"
          class="px-3 py-3 rounded-lg bg-signal hover:bg-signal/90 text-signal-ink font-semibold text-sm text-center transition-colors"
        >
          Commencer gratuitement
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>
