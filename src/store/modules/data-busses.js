import { removeItem } from '@/store/helpers'
export default {
    namespaced: true,
    state: {
        bussesList: [
            {
                id: 1,
                busModel: 'Man 2215',
                busPlate: 'AA254S',
            },
            {
                id: 2,
                busModel: 'Scania 2-15',
                busPlate: 'AE254DQ',
            },
            {
                id: 3,
                busModel: 'Bogdan 1544',
                busPlate: 'AB2545AE',
            },
            {
                id: 4,
                busModel: 'Man 2215',
                busPlate: 'AE54886I',
            },
        ],
    },
    getters: {
        gBussesList: (state) => state.bussesList,
        gReturnDataBusById: (state) => (busId) => state.bussesList.find((bus) => bus.id == busId),
    },
    mutations: {
        removeItemBus(state, idBus) {
            state.bussesList = removeItem(state.bussesList, idBus)
        },
        addNewBus(state, dataNewBus) {
            // state.bussesList = addItem(state.bussesList, dataNewBus)
            state.bussesList.push({
                ...dataNewBus,
                id: new Date().getTime(),
            })
        },
        addChangeToBusItem(state, changeBus) {
            let indexBus = state.bussesList.findIndex((bus) => bus.id === changeBus.id)
            state.bussesList[indexBus] = { ...changeBus }
        },
    },
    actions: {
        removeItemBus({ commit, dispatch }, idBus) {
            commit('removeItemBus', idBus)
            dispatch('appointment/removeDriverOrBusAndAppointment', idBus, 'bus', { root: true })
        },
        addNewBus({ commit }, dataNewBus) {
            commit('addNewBus', dataNewBus)
        },
        addChangeToBusItem({ commit }, changeBus) {
            commit('addChangeToBusItem', changeBus)
        },
    },
    modules: {},
}
