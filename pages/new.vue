<template>
  <section
    class="container md:max-w-4xl min-h-screen flex flex-col justify-center items-center mx-auto"
  >
    <div class="w-full bg-white rounded-lg shadow-lg p-6 m-2">
      <h1 class="text-3xl">New site</h1>
      <div>
        <span>name</span>
        <input
          v-model="form.name"
          type="text"
          class="w-full p-1 border border-gray-300"
        />
      </div>
      <div>
        <span>taxo</span>
        <input
          v-model="form.taxo"
          type="text"
          class="w-full p-1 border border-gray-300"
        />
      </div>
      <div>
        <span>url</span>
        <input
          v-model="form.url"
          type="text"
          class="w-full p-1 border border-gray-300"
        />
      </div>
      <div>
        <span>desc</span>
        <textarea
          v-model="form.desc"
          class="w-full p-1 border border-gray-300"
        />
      </div>
      <div>
        <button class="bg-teal-500 rounded-full py-2 px-4" @click="send">
          send
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return { form: {} }
  },
  computed: {},

  methods: {
    async send() {
      const form = this.form
      await this.$store.dispatch('sites/addSite', { form })
    }
  }
}
</script>

<style>
body {
  background-color: #f6fafc;
}
</style>
