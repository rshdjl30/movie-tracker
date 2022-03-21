import Api from '@/services/Api'
// When someone registers
export default {
    register (credentials) {
        return Api().post('register', credentials)
    },
    login (credentials) {
        return Api().post('login', credentials)
    }
}
