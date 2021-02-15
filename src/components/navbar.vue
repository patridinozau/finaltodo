<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" dark top color="pink lighten-3">
      <span>your project has been added.</span>
      <v-btn text temporary dark @click="snackbar = false">close</v-btn>
    </v-snackbar>

    <v-toolbar flex-sm-grow-1-sm-row flat app dark color="pink">
      <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ">
        <span class="font-weight-light">Todo</span>
        <span>Patri</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    <v-btn flat drak >
      <span>Sign Out</span>
      <v-icon right>mdi-exit-to-app</v-icon>
    </v-btn>
    </v-toolbar>

    <v-navigation-drawer flex-sm-grow-1-sm-row temporary app v-model="drawer" class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-left" src="/avatar-3.png">
          </v-avatar>
          <p class="white--text heading mt-1" align="center">Patri</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-subtitle class="white--text">{{ link.text }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>

import popup from './popup.vue'


export default {
  components: { popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-home', text: 'home', route: '/home'},
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
        { icon: 'mdi-account', text: 'Team', route: '/team'},
      ],
      snackbar: false
    }
  }
}
</script>

<style>
</style>