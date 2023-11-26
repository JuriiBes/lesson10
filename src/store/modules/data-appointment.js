import { removeItem } from '@/store/helpers'
export default {
    namespaced: true,
    state: {
        appointmentList: [
            {
                id: 1,
                driverId: 2,
                busId: 1,
            },
            {
                id: 2,
                driverId: 3,
                busId: 3,
            },
            {
                id: 3,
                driverId: 1,
                busId: 4,
            },
        ],
    },
    getters: {
        gAppointmentList: (state) => state.appointmentList,
    },
    mutations: {
        removeAppointmentItem(state, idAppointment) {
            state.appointmentList = removeItem(state.appointmentList, idAppointment)
        },
        addAppointmentItem(state, dataNewAppointment) {
            // state.appointmentList = addItem(state.appointmentList, dataNewAppointment)
            state.appointmentList.push({
                ...dataNewAppointment,
                id: new Date().getTime(),
            })
        },
        removeDriverOrBusAndAppointment(state, dataItems) {
            if (dataItems.category == 'driver') {
                console.log('driver')
                state.appointmentList = state.appointmentList.filter(
                    (appointment) => appointment.driverId !== dataItems.idItem
                )
            } else if (dataItems.category == 'bus') {
                console.log('bus')
                state.appointmentList = state.appointmentList.filter(
                    (appointment) => appointment.busId !== dataItems.idItem
                )
            }
        },
    },
    actions: {
        removeAppointmentItem({ commit }, idAppointment) {
            commit('removeAppointmentItem', idAppointment)
        },
        addAppointmentItem({ commit }, dataNewAppointment) {
            commit('addAppointmentItem', dataNewAppointment)
        },
        removeDriverOrBusAndAppointment({ commit }, dataItems) {
            console.log('yes')
            commit('removeDriverOrBusAndAppointment', dataItems)
        },
    },
    modules: {},
}
