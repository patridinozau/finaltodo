<template>
<div class="team">
  <h1 class="subheading grey--text">Team</h1>

  <v-container class="my-5">

    <v-row>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
    <v-card align="center" class="text-center ma-3 pink lighten-5 text--lighten-3" >
    <v-responsive class="pt-4">
      <v-avatar size="100" class="blue lighten-2">
        <img :src="person.avatar">
      </v-avatar>
    </v-responsive>
    <v-card-text>
      <div class=" text-subtitle-1 ">{{person.name}}</div>
      <div class="text--lighten-2">- {{person.role}} -</div>
    </v-card-text>
    <v-card-action>
      <v-btn depressed class="grey--text">
        <v-icon small left> mdi-message </v-icon>
        <span>message</span>
      </v-btn>
    </v-card-action>
    </v-card>
    </v-col>
    </v-row>

  </v-container>

</div>
</template>

<script>
export default {
  data () {
    return {
      team: [
        { name: 'Patri', role: 'web developer', avatar: '/avatar-3.png' },
        { name: 'Vladutz', role: 'artist', avatar: '/avatar-3.png' },
        { name: 'Alecs', role: 'graphic designer', avatar: '/avatar-3.png' },
        { name: 'Clau', role: 'sales guru', avatar: '/avatar-3.png' },
      ]
    }
  }
}
</script>
