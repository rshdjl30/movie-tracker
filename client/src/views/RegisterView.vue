<template>
        <v-flex xs6 offset-xs3>
            <panel-component title="Register">   
                <form name="move-tracker-form">
                    <v-text-field
                        label="Email"
                        v-model="email"
                    ></v-text-field>
                    <br>
                    <v-text-field
                        label="Password"
                        v-model="password"
                        type="password"
                        autocomplete="new-password"
                    ></v-text-field>
                </form>
                
                <div class= "error" v-html="error"></div>
                <v-btn color="secondary" @click="register"> Register</v-btn>
            </panel-component>
        </v-flex>
</template>

<script>
//controller
import AuthenticationService from '@/services/AuthenticationService'
//component
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
        async register () {
            try {
                const response = await AuthenticationService.register({
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
