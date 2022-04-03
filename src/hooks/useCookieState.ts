import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import Cookies from 'js-cookie'
function useCookieState(cookieKey:string,value:any) {
    console.log('test',value)
    watch(value, () => {
        Cookies.set(cookieKey, value)
    })
    return value
}

export default useCookieState