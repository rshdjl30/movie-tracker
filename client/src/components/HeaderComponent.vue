<template>
    <v-toolbar fixed color="secondary">
        <v-toolbar-title class="mr-4">
            <span class="home" @click="navigateTo({name: 'root'})">
                Movie Tracker
            </span> 
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat color="primary" @click="navigateTo({name: 'movies'})">
                Browse 
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat color="primary" @click="navigateTo({name: 'login'})">
                Log In 
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat color="primary" @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
            <v-btn v-if="$store.state.isUserLoggedIn" flat color="primary" @click="logout">
                Log Out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    
</template>

<script>
export default {
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        },
        logout () {
            // setting states
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'root'
            })
        }
    }
}
</script>

<style scoped>
    .home{
        cursor: pointer;
    }
    .home:hover{
        color: #e9e;
    }
</style>