<template>
    <div class="container">
        <div class="drivers__body">
            <div class="drivers__title">Drivers list</div>
            <div class="drivers__create">
                <edit-page-item
                    :title-first-input="'Driver name'"
                    :title-second-input="'Experience'"
                    :name-click-methods="'drivers'"
                />
            </div>
            <div class="drivers__list">
                <div v-for="driver in gDriversList" :key="driver.id" class="drivers__item driver">
                    <div class="driver__name">{{ driver.driverName }}</div>
                    <div class="driver__experience">{{ driver.experience }}</div>
                    <custom-button :title-button="'edit'" @click="editItem(driver.id)" />
                    <custom-button :title-button="'remove'" @click="removeDriver(driver.id, 'driver')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EditPageItem from '@/pages/EditPageItem.vue'
import CustomButton from '@/components/CustomButton.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DriversPage',
    components: {
        EditPageItem,
        CustomButton,
    },
    computed: {
        ...mapGetters(`drivers`, ['gDriversList']),
    },
    methods: {
        ...mapActions(`drivers`, ['removeItemDriver']),
        removeDriver(idDriver, category) {
            this.removeItemDriver(idDriver, category)
        },
        editItem(driverId) {
            this.$router.push({
                name: 'editItem',
                params: {
                    category: 'drivers',
                    idItem: driverId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    margin: 1.25rem auto;
}
.drivers {
    // .drivers__body
    &__body {
        display: flex;
        flex-direction: column;
        gap: 3.125rem;
        max-width: 43.75rem;
        margin: 0 auto;
        background-color: rgba(240, 248, 255, 0.2);
        padding: 1.5625rem;
    }
    // .drivers__title
    &__title {
        font-size: 1.5rem;
        font-weight: 600;
        color: aqua;
    }
    // .drivers__create
    &__create {
        margin-bottom: 1.5625rem;
    }
    // .drivers__list
    &__list {
        display: flex;
        flex-direction: column;
        row-gap: 0.625rem;
        padding: 0.3125rem 0.625rem;
    }
    // .drivers__item
    &__item {
    }
}
.driver {
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
    // .driver__name
    &__name {
        flex: 1 1 auto;
        border-right: 1px solid aqua;
        padding: 0.1875rem 0.3125rem;
    }
    // .driver__experience
    &__experience {
        flex: 0 0 20%;
        border-right: 1px solid aqua;
        padding: 0.1875rem 0.3125rem;
    }
}
</style>
