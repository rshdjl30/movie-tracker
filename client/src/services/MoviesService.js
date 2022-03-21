import Api from '@/services/Api'
// When someone registers
export default {
    index () {
        return Api().get('movies')
    }
}
