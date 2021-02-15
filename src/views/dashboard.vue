<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row left class="mb-3">
        <v-tooltip top>
        <v-btn small flat dark color="grey" @click="sortBy('title')" slot="activator">
          <v-icon small left>mdi-folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
          <span>sort project by name</span>
        </v-tooltip>

        <v-btn small flat dark color="grey" @click="sortBy('person')">
          <v-icon small left>mdi-account</v-icon>
          <span class="caption text-lowercase">By Person</span>
        </v-btn>

        <v-btn small flat dark color="dark grey" @click="sortBy('status')">
          <v-icon small left>mdi-plus</v-icon>
          <span class="caption text-lowercase">By status</span>
        </v-btn>

      </v-layout>
      <br />

      <v-card flat class="white--text" color="#787878" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-5 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} dark--text my-2 caption`">{{ project.status }}</v-chip>
            </div>
          </v-flex>

        </v-layout>

      </v-card>

    </v-container>

  </div>
</template>

<script>
import db from '../fb'

export default {
  data() {
    return {
      projects: []
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}

</script>

<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid #ffaa2c;
}
.project.overdue{
  border-left: 4px solid #f83e70;
}
.v-chip--no-color.theme--light.complete{
  background-color: #3cd1c2 !important;
}
.v-chip--no-color.theme--light.ongoing{
  background-color: #ffaa2c  !important;
}
.v-chip--no-color.theme--light.overdue{
  background-color: #f83e70  !important;
}
</style>
