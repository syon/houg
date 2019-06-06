<template>
  <section class="container md:max-w-4xl">
    <div class="w-full m-8 mt-24">
      <input
        v-model="query"
        type="text"
        class="w-full p-2 shadow-inner"
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
          <div class="text-teal-500 text-sm">{{ x.taxo }}</div>
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
        if (re.test(x.taxo)) return true
        if (re.test(x.desc)) return true
        return false
      })
    }
  },

  async asyncData({ params, store }) {
    await store.dispatch('sites/loadSites')
    return {}
  },

  methods: {}
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
