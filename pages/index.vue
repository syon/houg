<template>
  <section class="container md:max-w-4xl">
    <template v-for="(x, i) in gAllSites">
      <div
        :key="i"
        class="w-full bg-white rounded-lg shadow-lg p-6 m-2 md:flex"
      >
        <div class="md:flex-shrink-0">
          <img
            class="rounded-lg md:w-40"
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
          <a
            :href="x.url"
            class="text-gray-600 hover:underline text-sm"
            target="_blank"
            >{{ x.url }}</a
          >
          <p class="mt-2 text-gray-600">
            {{ x.desc }}
          </p>
          <div class="text-gray-600">#Photo</div>
        </div>
      </div>
    </template>
    <button @click="addSite">addSite</button>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapGetters({
      gAllSites: 'sites/gAllSites'
    }),
    entries() {
      return []
    }
  },

  async asyncData({ params, store }) {
    await store.dispatch('sites/loadSites')
    return {}
  },

  methods: {
    async addSite() {
      for (const e of this.entries) {
        const form = e
        await this.$store.dispatch('sites/addSite', { form })
      }
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
  @apply min-h-screen flex flex-col justify-center items-center mx-auto;
}
</style>
