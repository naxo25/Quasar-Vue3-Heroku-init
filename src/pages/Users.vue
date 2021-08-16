<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <Card
      v-for="user in $store.state.users"
      :key="user"
      v-bind="user"
    />
  </div>
</template>

<script>

import Card from '../components/card.vue'
import { ref } from 'vue'

export default ({
  name: 'MainLayout',

  components: {
    Card
  }
})
</script>
