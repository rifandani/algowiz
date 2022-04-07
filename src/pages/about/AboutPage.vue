<script lang="ts" setup>
  import { defineProps } from 'vue'

  defineProps<{ name: string }>()
</script>

<template>
  <div>
    <p>About Me: {{ name }}</p>
  </div>
</template>
