<template>
  <section class="container md:max-w-5xl">
    <table class="w-full">
      <tbody>
        <tr v-for="(x, i) in gAllSites" :key="i">
          <td>
            <img
              class="rounded-lg md:w-16"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt="Woman paying for a purchase"
            />
          </td>
          <td>{{ x.url }}</td>
          <td class="mt-4 md:mt-0 md:ml-6">
            <a
              :href="x.url"
              class="mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
              target="_blank"
              >{{ x.name }}</a
            >
          </td>
          <td class="text-teal-500 text-sm">{{ x.taxo }}</td>
          <td class="text-gray-600">#Photo</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapGetters({
      gAllSites: 'sites/gAllSites'
    })
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
  @apply min-h-screen flex flex-col justify-center items-center mx-auto;
}
</style>
