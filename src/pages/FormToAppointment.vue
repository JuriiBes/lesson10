<template>
    <div class="appointment__container">
        <div class="appointment__title">Appointment</div>
        <div class="appointment__body">
            <div class="appointment__drivers">
                <div>Drivers</div>
                <select v-model="appointment.driver" name="drivers" class="appointment__select">
                    <option
                        v-for="driver in gDriversList"
                        :key="driver.id"
                        :disabled="disabledOptions(driver.id, 'driver') == true"
                        :value="driver.id"
                        class="appointment__option"
                    >
                        {{ driver.driverName }}
                    </option>
                </select>
            </div>
            <div class="appointment__busses">
                <div>Busses</div>
                <select v-model="appointment.bus" name="busses" class="appointment__select">
                    <option
                        v-for="bus in gBussesList"
                        :key="bus.id"
                        :value="bus.id"
                        :disabled="disabledOptions(bus.id, 'bus') == true"
                        class="appointment__option"
                    >
                        {{ bus.busModel }}-{{ bus.busPlate }}
                    </option>
                </select>
            </div>
            <custom-button
                :title-button="'appoint'"
                :disabled="activeButton == true"
                :class="disabledButton"
                @click="addAppointment"
            />
        </div>
    </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'FormToAppointment',
    components: {
        CustomButton,
    },
    data() {
        return {
            appointment: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['gDriversList']),
        ...mapGetters('busses', ['gBussesList']),
        ...mapGetters('appointment', ['gAppointmentList']),
        activeButton() {
            if (this.appointment.driver && this.appointment.bus) return false
            else return true
        },
        disabledButton() {
            return !this.appointment.driver || !this.appointment.bus ? 'disable-button' : 'active-button'
        },
    },
    methods: {
        ...mapActions('appointment', ['addAppointmentItem']),
        disabledOptions(idItem, categoryItem) {
            if (categoryItem == 'driver') {
                return this.gAppointmentList.some((appointment) => appointment.driverId == idItem)
            }
            return this.gAppointmentList.some((appointment) => appointment.busId == idItem)
        },
        addAppointment() {
            this.addAppointmentItem({
                driverId: this.appointment.driver,
                busId: this.appointment.bus,
            })
            this.appointment = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.appointment {
    // .appointment__container
    &__container {
    }
    // .appointment__title
    &__title {
        font-size: 1.5rem;
        font-weight: 600;
        color: aqua;
        margin-bottom: 1.5625rem;
    }
    // .appointment__body
    &__body {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;
        align-items: flex-end;
        justify-content: center;
    }
    // .appointment__drivers
    &__drivers {
        display: flex;
        flex-direction: column;
        row-gap: 0.625rem;
        & > div {
            font-size: 1rem;
            font-weight: 500;
            color: aqua;
        }
    }
    // .appointment__select
    &__select {
        font-size: 1rem;
        font-weight: 500;
        border-bottom: 1px solid #2c3e50;
        background-color: transparent;
        outline: none;
        min-width: 10rem;
        padding: 0.3125rem;
    }
    // .appointment__option
    &__option {
        background-color: aqua;
        margin: 25px 5px;
    }
    // .appointment__busses
    &__busses {
        display: flex;
        flex-direction: column;
        row-gap: 0.625rem;
        & > div {
            font-size: 1rem;
            font-weight: 500;
            color: aqua;
        }
    }
}
.disable-button {
    background-color: #8baacc;
}
.active-button {
    background-color: transparent;
}
</style>
