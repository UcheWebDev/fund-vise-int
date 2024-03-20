import { createStore } from "vuex";
import Enterprenuer from './modules/Enterprenuer'
import Investor from './modules/Investor'

export default createStore({
    modules: {
        Enterprenuer,
        Investor
    }
})

