<template>
  <section class="container md:max-w-4xl">
    <button
      class="fixed bottom-0 right-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      @click="transAdd"
    >
      <svg
        class="fill-current w-4 h-4 mr-2 feather feather-plus sc-dnqmqq jxshSx"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        data-reactid="981"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      <span>add</span>
    </button>
    <div class="w-full m-8 mt-24">
      <input
        v-model="query"
        type="text"
        class="w-full px-8 py-4 shadow-inner rounded"
        placeholder="検索キーワードを入力"
      />
    </div>
    <template v-for="(x, i) in filteredList">
      <div
        :key="i"
        class="w-full bg-white rounded-lg shadow-lg p-6 m-2 md:flex"
      >
        <div class="md:flex-shrink-0">
          <img
            class="rounded-lg md:w-16"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            alt="Woman paying for a purchase"
          />
        </div>
        <div class="mt-4 md:mt-0 md:ml-6">
          <a
            :href="x.url"
            class="mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
            target="_blank"
            >{{ x.name }}</a
          >
          <div class="text-teal-500 text-sm">{{ x.caption }}</div>
          <div class="text-gray-600">#Photo</div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},

  data() {
    return {
      query: ''
    }
  },

  computed: {
    ...mapGetters({
      gAllSites: 'sites/gAllSites'
    }),
    filteredList() {
      const re = new RegExp(this.query, 'gi')
      return this.gAllSites.filter(x => {
        if (re.test(x.url)) return true
        if (re.test(x.name)) return true
        if (re.test(x.caption)) return true
        if (re.test(x.desc)) return true
        return false
      })
    }
  },

  async asyncData({ params, store }) {
    await store.dispatch('sites/loadSites')
    return {}
  },

  methods: {
    transAdd() {
      this.$router.push('/new')
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
body {
  background-color: #f6fafc;
}
.container {
  @apply min-h-screen flex flex-col items-center mx-auto;
}
</style>
