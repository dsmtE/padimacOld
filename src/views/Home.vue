<template>
  <div class="home">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center" class="grey lighten-5" style="height: 300px;">
            <v-card v-for="n in 8" :key="n" class="ma-3 pa-6" outlined tile>
              Btn {{n}}
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <HelloWorld/>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
