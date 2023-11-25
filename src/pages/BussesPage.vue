<template>
    <div class="container">
        <div class="busses__body">
            <div class="busses__title">Busses list</div>
            <div class="busses__create">
                <edit-page-item
                    :title-first-input="'Bus model'"
                    :title-second-input="'Bus plate'"
                    :name-click-methods="'busses'"
                />
            </div>
            <div class="busses__list">
                <div v-for="bus in gBussesList" :key="bus.id" class="busses__item bus">
                    <div class="bus__name">{{ bus.busModel }}</div>
                    <div class="bus__experience">{{ bus.busPlate }}</div>
                    <custom-button :title-button="'edit'" @click="editItem(bus.id)" />
                    <custom-button :title-button="'remove'" @click="removeItemBus(bus.id)" />
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
    name: 'BussesPage',
    components: {
        EditPageItem,
        CustomButton,
    },
    computed: {
        ...mapGetters(`busses`, ['gBussesList']),
    },
    methods: {
        ...mapActions(`busses`, ['removeItemBus']),
        removeDriver(idDriver) {
            this.removeItemDriver(idDriver)
        },
        editItem(busId) {
            this.$router.push({
                name: 'editItem',
                params: {
                    category: 'busses',
                    idItem: busId,
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
.busses {
    // .busses__body
    &__body {
        display: flex;
        flex-direction: column;
        gap: 3.125rem;
        max-width: 43.75rem;
        margin: 0 auto;
        background-color: rgba(240, 248, 255, 0.2);
        padding: 1.5625rem;
    }
    // .busses__title
    &__title {
        font-size: 1.5rem;
        font-weight: 600;
        color: aqua;
    }
    // .busses__create
    &__create {
        margin-bottom: 1.5625rem;
    }
    // .busses__list
    &__list {
        display: flex;
        flex-direction: column;
        row-gap: 0.625rem;
        padding: 0.3125rem 0.625rem;
    }
    // .busses__item
    &__item {
    }
}
.bus {
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
    // .bus__name
    &__name {
        flex: 1 1 auto;
        border-right: 1px solid aqua;
        padding: 0.1875rem 0.3125rem;
    }
    // .bus__experience
    &__experience {
        flex: 0 0 20%;
        border-right: 1px solid aqua;
        padding: 0.1875rem 0.3125rem;
    }
}
</style>
