<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" height="800">
      <template v-slot:activator="{ on }">
        <v-btn dark color="pink" v-on="on">Add New Project</v-btn>
      </template>
      <v-card color="dark grey" class="text--lighten-4 padding-bottom-10">
        <v-card-title dark color="pink" class="text--lighten-3">Add a new project</v-card-title>
        <v-form class="px-3" ref="form">
          <v-text-field v-model="title" :rules="inputRules" label="Title" prepend-icon="mdi-folder"></v-text-field>
          <v-textarea v-model="content" :rules="inputRules" label="Description" prepend-icon="mdi-edit"></v-textarea>

          <v-menu max-width="290" >
            <template v-slot:activator="{ on }">
              <v-text-field :value="formattedDate" clearable temporary label="Due date" :rules="inputRules" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
            </template>
            <v-date-picker  clearable dark v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>
          <div align="left"><v-btn flat @click="submit" :loading="loading" dark color="pink" class="mx-0 mt-3">Add Project</v-btn></div>

        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import db from '../fb'

export default {

  data() {
    return {
      title: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 2 || 'Minimum length is 2 characters'
      ],
      loading:false,
      dialog: false,

    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {

        this.loading=true
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), 'do MMM yyyy'),
          person: 'Patri',
          status: 'ongoing'
        }
        db.collection('projects').add(project).then(() => {
          this.loading=false
          this.dialog=false,
              this.$emit('projectAdded')
        })
      }
    }
  },
  computed: {
    formattedDate() {
      console.log(this.due)
      return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
    }
  }
}
</script>