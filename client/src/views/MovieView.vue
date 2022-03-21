<template>
    <v-flex xs6 offset-xs3>   
        <panel-component title="Movies">
            <div v-for="movie in movies" :key="movie.id">
                {{movie.title}} -
                {{movie.artist}}
            </div>
        </panel-component>        
    </v-flex>
</template>

<script>
import MoviesService from '@/services/MoviesService'
import PanelComponent from '../components/PanelComponent.vue'
export default {
    components: {
        PanelComponent
    },
    data () {
        return {
            movies: null
        }
    },
    async mounted() {
        // request to backend for all the movies
        this.movies = (await MoviesService.index()).data
    },
}
</script>

<style scoped>

</style>