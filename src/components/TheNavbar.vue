<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered height-hint="98" class="text-white bg-primary">
      <q-toolbar>
        <q-btn
          dense
          flat
          rounded
          icon="menu"
          class="mr-4"
          @click="toggleLeftDrawer"
        />

        <q-avatar>
          <img
            src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
            alt="Quasar Logo"
          />
        </q-avatar>

        <q-toolbar-title
          >Algowiz - Javascript Data Structures and Algorithms
          Visualizer</q-toolbar-title
        >
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered side="left">
      <!-- drawer content -->
      <NavbarDrawerContent />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import NavbarDrawerContent from './NavbarDrawerContent.vue'

  const leftDrawerOpen = ref(false)

  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
</script>
