<template>
        <v-card xs10>
            
            <panel-component title="Movie Metadata">
                <v-text-field
                    label="Title "
                    required
                    :rules="[required]"
                    v-model="movie.title"
                ></v-text-field>
                <v-text-field
                    label="Artist"
                    required
                    v-model="movie.artist"
                ></v-text-field>
                <v-text-field
                    label="Genre"
                    v-model="movie.genre"
                ></v-text-field>
                <v-text-field
                    label="Year"
                    v-model="movie.year"
                ></v-text-field>
                <v-text-field
                    label="Movie Image Url"
                    v-model="movie.movieImageUrl"
                ></v-text-field>
                <v-text-field
                    label="Trailer Link"
                    v-model="movie.trailerLink"
                ></v-text-field>
                <v-btn @click="create" color="primary">Create Movie</v-btn>
            </panel-component>
        </v-card>
</template>

<script>
import PanelComponent from '../components/PanelComponent.vue'
import MoviesService from '@/services/MoviesService.js'
export default {
    data () {
        return {
            movie: {
                title: null,
                artist: null,
                genre: null,
                year: null,
                movieImageUrl: null,
                trailerLink: null
            },
            required: (value) => !!value || 'Required.'         
        }
    },
    components: {
        PanelComponent
    },
    methods: {
        async create () {
            try{
                await MoviesService.post(this.movie)
                this.$router.push({
                    name: 'movies'
                })
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>