<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <Card
      v-for="user in users"
      :key="user"
      v-bind="user"
      :user='user'
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
  },

  setup () {
    const users = ref({})

    fetch('https://randomuser.me/api/?results=5').then(async response => {
      const data = await response.json()
      users.value = data.results
    })

    return {
			users
    }
  }
})
</script>
