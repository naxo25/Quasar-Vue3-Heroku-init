<template>
  <router-view />
</template>
<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const store = inject('store')
    store.dispatch('handleInit')
    return {
      store
    }
  }
})
</script>
