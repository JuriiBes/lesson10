<template>
    <div class="container">
        <div class="appointment__body">
            <form-to-appointment />
            <div class="appointment__list">
                <div v-for="appointment in gAppointmentList" :key="appointment.id" class="appointment__item">
                    <div>
                        {{ gReturnDataDriverById(appointment.driverId).driverName }} -
                        {{ gReturnDataBusById(appointment.busId).busPlate }}
                    </div>
                    <custom-button :title-button="'remove'" @click="removeAppointment(appointment.id)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue'
import FormToAppointment from '@/pages/FormToAppointment.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AppointmentPage',
    components: {
        FormToAppointment,
        CustomButton,
    },
    computed: {
        ...mapGetters('drivers', ['gReturnDataDriverById']),
        ...mapGetters('busses', ['gReturnDataBusById']),
        ...mapGetters('appointment', ['gAppointmentList']),
    },
    methods: {
        ...mapActions('appointment', ['removeAppointmentItem']),
        removeAppointment(idItem) {
            this.removeAppointmentItem(idItem)
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    margin: 1.25rem auto;
}

.appointment {
    // .appointment__body
    &__body {
        display: flex;
        flex-direction: column;
        gap: 3.125rem;
        max-width: 43.75rem;
        margin: 0 auto;
        background-color: rgba(240, 248, 255, 0.2);
        padding: 1.5625rem;
    }
    // .appointment__list
    &__list {
        display: flex;
        flex-direction: column;
        row-gap: 0.625rem;
        padding: 0.3125rem 0.625rem;
    }
    // .appointment__item
    &__item {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3125rem 0.625rem;
        justify-content: space-between;
        text-align: start;
        align-items: center;
        padding: 5px;
        &:not(:last-child) {
            border-bottom: 1px solid aqua;
        }
        & > div {
            flex: 1 1 auto;
        }
    }
}
</style>
