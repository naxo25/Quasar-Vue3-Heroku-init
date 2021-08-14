<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list v-for='link in linksList' :key='link'>
        <q-item clickable tag="a" :to='link.to'>
          <q-item-section avatar>
            <q-icon :name="link.ico" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{link.title}}</q-item-label>
            <q-item-label caption> {{ link.caption }} </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

const linksList = [
  {
    title: 'Home',
    caption: 'quasar.dev',
    ico: 'school',
    to: 'Home'
  },
  {
    title: 'Ej api users',
    caption: 'Ej api',
    ico: 'people',
    to: 'Users'
  }
]

import { ref } from 'vue'

export default ({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
