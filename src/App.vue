<template>
  <v-app >

    <navbar />

      <v-main  class="px-4 pb-4 grey darken-3" >
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
import navbar from './components/navbar'
export default {
  components: { navbar },
  name: 'App',
  data () {
    return {

    }
  }
}
</script>
