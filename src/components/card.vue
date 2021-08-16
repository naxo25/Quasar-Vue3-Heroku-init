<template>
  <q-card class="my-card" flat bordered>
    <q-img
      :src="picture.large"
    />

    <q-card-section>
      <div class="text-overline text-orange-9"> {{ name.title }} {{ name.first + ' ' + name.last }} </div>
      <div class="text-h5 q-mt-sm q-mb-xs"> {{ id.value }} </div>
      <div class="text-caption text-grey"> {{ email }} </div>
    </q-card-section>

    <q-card-actions>
      <q-btn flat color="dark" label="Share" />
      <q-btn flat color="primary" label="Book" />

      <q-space />

      <q-btn
        color="grey"
        round
        flat
        dense
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"
      />
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">
          {{ lorem }}
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script>
import { ref } from 'vue'

export default {
	props: {
    name: {
      type: Object,
      required: true,
      default: {
        title: 'User',
        first: 'not',
        last: 'registred'
      }
    },
    id: {
      type: Object,
      default: { value: 'ID not defined' }
    },
    email: {
      type: String,
      default: 'default@email.com'
    },
    picture: {
      type: Object,
      default: {
        large: 'img/noimg.svg'
      }
    }
	},
  setup () {
    return {
      expanded: ref(false),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 298px
</style>