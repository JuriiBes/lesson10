import { removeItem, filterDrivers } from '@/store/helpers'
export default {
    namespaced: true,
    state: {
        driversList: [
            {
                id: 1,
                driverName: 'John',
                experience: 35,
            },
            {
                id: 2,
                driverName: 'Phil',
                experience: 12,
            },
            {
                id: 3,
                driverName: 'Sebastian',
                experience: 5,
            },
            {
                id: 4,
                driverName: 'Jo',
                experience: 22,
            },
        ],
        dataFilter: {},
    },
    getters: {
        gDriversList: (state) => state.driversList,
        gReturnDataDriverById: (state) => (driverId) => state.driversList.find((driver) => driver.id == driverId),
        gFilteredDataDrivers: (state) => state.driversList.filter((driver) => filterDrivers(driver, state.dataFilter)),
    },
    mutations: {
        removeItemDriver(state, idDriver) {
            state.driversList = removeItem(state.driversList, idDriver)
        },
        addNewDriver(state, dataNewDriver) {
            state.driversList.push({
                ...dataNewDriver,
                id: new Date().getTime(),
            })
        },
        addChangeToDriverItem(state, changeDriver) {
            let indexDriver = state.driversList.findIndex((driver) => driver.id == changeDriver.id)
            state.driversList[indexDriver] = { ...changeDriver }
        },
        addDataFilter(state, filterData) {
            state.dataFilter = filterData
        },
    },
    actions: {
        removeItemDriver({ commit, dispatch }, idDriver) {
            commit('removeItemDriver', idDriver)
            dispatch(
                'appointment/removeDriverOrBusAndAppointment',
                { idItem: idDriver, category: 'driver' },
                { root: true }
            )
        },
        addNewDriver({ commit }, dataNewDriver) {
            commit('addNewDriver', dataNewDriver)
        },
        addChangeToDriverItem({ commit }, changeDriver) {
            commit('addChangeToDriverItem', changeDriver)
        },
        addDataFilter({ commit }, filterData) {
            commit('addDataFilter', filterData)
        },
    },
}
