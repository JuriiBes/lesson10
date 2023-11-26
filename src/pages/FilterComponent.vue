<template>
    <div class="filter">
        <filter class="title">Filters</filter>
        <div class="filter__body">
            <div class="filter__name">
                <label class="filter__label-name"
                    >Name driver: <input v-model="dataFilter.name" type="text" class="filter__input-name" />
                </label>
            </div>
            <div class="filter__experience">
                <div>Experience:</div>
                <div class="filter__input-items">
                    <label class="filter__label-from"
                        >from:<input v-model="dataFilter.expFrom" type="number" class="filter__input-from"
                    /></label>
                    <label class="filter__label-to"
                        >to: <input v-model="dataFilter.expTo" type="number" class="filter__input-to"
                    /></label>
                </div>
            </div>
            <button type="button" class="filter__button" @click="clearFilter">reset</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'FilterComponent',
    data() {
        return {
            dataFilter: {},
        }
    },
    watch: {
        dataFilter: {
            handler(newValue) {
                this.addDataFilter(newValue)
            },
            deep: true,
        },
    },
    methods: {
        ...mapActions('drivers', ['addDataFilter']),
        clearFilter() {
            this.dataFilter = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.filter {
    display: flex;
    max-width: 37rem;
    margin: 0 auto;
    flex-direction: column;
    row-gap: 0.9375rem;
    padding: 0.625rem;
    border-bottom: 2px dotted aqua;
    margin-bottom: 1.25rem;
    font-weight: 600;

    // .filter__body
    &__body {
        display: flex;
        flex-wrap: wrap;
        gap: 0.9375rem;
        justify-content: space-between;
    }
    // .filter__name
    &__name {
    }
    // .filter__label-name
    &__label-name {
        display: flex;
        flex-direction: column;
        row-gap: 0.625rem;
    }
    // .filter__input-name
    &__input-name {
        padding: 0.25rem 0.625rem;
        border-radius: 0.3125rem;
        background-color: transparent;
        border: 1px solid aqua;
        outline: none;
        font-size: 0.9rem;
        font-weight: 400;
    }
    // .filter__experience
    &__experience {
        display: flex;
        flex-direction: column;
        row-gap: 0.625rem;
    }
    // .filter____input-items
    &__input-items {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 0.9375rem;
    }
    // .filter__label-from
    // .filter__label-to
    &__label-from,
    &__label-to {
        display: flex;
        // flex-direction: column;
        gap: 0.625rem;
        align-items: center;
    }
    // .filter__input-from
    // .filter__input-to
    &__input-from,
    &__input-to {
        max-width: 5rem;
        padding: 0.25rem 0.625rem;
        border-radius: 0.3125rem;
        background-color: transparent;
        border: 0.0625rem solid aqua;
        outline: none;
        font-size: 0.9rem;
        font-weight: 400;
    }
    // .filter__button
    &__button {
        padding: 0.1rem;
        transform: rotate(-90deg) translateX(-10px);
        border: 0.0625rem solid aqua;
        height: 2rem;
        width: 50px;
        align-items: flex-end;
        background-color: #d33707c2;
        color: #ffffffb9;
        font-weight: 400;
        font-size: 0.9rem;
        transition: 0.3s;
        &:hover {
            background-color: #fa0404;
            color: rgb(1, 34, 34);
        }
    }
}

.title {
    font-size: 1.3rem;
    font-weight: 600;
    color: aqua;
}
</style>
