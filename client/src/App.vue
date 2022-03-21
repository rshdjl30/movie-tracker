<template>
  <v-app>
    <page-header/>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
      
    </v-main>
  </v-app>
</template>

<script>
import PageHeader from '@/components/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  },
  data: () => ({
    //
  }),
}
</script>
