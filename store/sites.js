import Dao from '@/database/dao'

export const state = () => ({
  sites: []
})

export const getters = {
  gAllSites(state) {
    return state.sites
  }
}

export const mutations = {
  setSites(state, { sites }) {
    state.sites = sites
  }
}

export const actions = {
  async loadSites({ commit }) {
    const sites = await Dao.selectAllSites()
    commit('setSites', { sites })
  },
  async addSite({ commit }, { form }) {
    await Dao.addSite(form)
  }
}
