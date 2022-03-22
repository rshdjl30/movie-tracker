<template>
    <v-flex xs6 offset-xs3>   
        <panel-component title="Movies">
            <div class="movie" v-for="movie in movies" :key="movie.id">
                <v-layout row wrap>
                    <v-flex xs6>
                        <div class="movie-title">
                            {{movie.title}}
                        </div>
                        <div class="movie-artist">
                            {{movie.artist}}
                        </div>
                        <div class="movie-genre">
                            {{movie.genre}}
                        </div>
                        <v-btn 
                        @click="navigateTo({
                            name: 'movie', 
                            params: {
                                movieId: movie.id
                            }
                        })" 
                        color="blue">
                        View
                        </v-btn>
                    </v-flex>
                    <v-flex xs6>
                        <img class="movie-image" :src="movie.movieImageUrl" alt="">
                    </v-flex>
                </v-layout>
                
            </div>
                <v-btn 
                    @click="navigateTo({name: 'movies-create'})"
                    medium 
                    absolute 
                    color="blue" 
                    class="create-btn">
                    Create Movie
                </v-btn>
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
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    },
    async mounted() {
        // request to backend for all the movies
        this.movies = (await MoviesService.index()).data
    },
}
</script>

<style scoped>

.create-btn{
    margin-top: 10px;
}
.movie{
    padding: 20px;
    height: 330px;
    overflow: hidden;
}
.movie-image{
    width: 50%;
    margin: auto;
    margin-left: 50px;
    
}
.movie-title{
    font-size: 30px;
}
.movie-artist{
    font-size: 24px;
}
.movie-genre{
    font-size: 18px;
}
</style>