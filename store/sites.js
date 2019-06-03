import { db } from '@/plugins/firebase-client'

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
    const sites = await selectAllSites()
    commit('setSites', { sites })
  },
  async addSite({ commit }, { form }) {
    await updateSite(form)
  }
}

async function selectAllSites() {
  const path = `site`
  const querySnapshot = await db.collection(path).get()
  const dataSet = querySnapshot.docs.map(doc => {
    // Metadata
    const obj = doc.data()
    obj.id = doc.id
    return obj
  })
  console.log(dataSet)
  return dataSet
}

async function updateSite(form) {
  console.log({ form })
  await db
    .collection(`site`)
    .add(form)
    .catch(e => {
      console.error(e)
      console.warn(form)
    })
}
