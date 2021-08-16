import { createStore } from 'vuex'
import { useRouter } from 'vue-router'
import { getDataUsers } from '../api/api.js'

export default createStore({
  state: {
    users: {},
    auth: true
  },
  mutations: {
  },
  actions: {

    handleInit({ dispatch, state }) {
      const router = useRouter()
      // console.log(router)

      if (state.auth)
        dispatch('getUsers')
    },

    async getUsers({ state }) {
      state.users = await getDataUsers()
      state.users.push({})
    }
  }
})