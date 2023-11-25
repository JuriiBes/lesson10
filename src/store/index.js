import { createStore } from 'vuex'
import drivers from './modules/data-drivers'
import busses from './modules/data-busses'
import appointment from './modules/data-appointment'

export default createStore({
    modules: {
        drivers,
        busses,
        appointment,
    },
})
