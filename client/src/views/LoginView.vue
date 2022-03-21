<template>
        <v-flex xs6 offset-xs3>   
            <panel-component title="Login">
                <v-text-field
                    label="Email"
                    v-model="email"
                ></v-text-field>
                
                <br>
                <v-text-field
                    label="Password"
                    v-model="password"
                    type="password"
                ></v-text-field>
                
                <div class= "error" v-html="error"></div>
                <v-btn color="secondary" @click="login"> Login </v-btn>
            </panel-component>
        </v-flex>
</template>

<script>
//controller
import AuthenticationService from '@/services/AuthenticationService'
//components
import PanelComponent from '../components/PanelComponent.vue'
export default {
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login () {
            try {
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    },
    components: {
        PanelComponent
    }
}
</script>

<style>
    .error {
        color: red;
    }
    .v-layout{
        
    }
</style>
