<template>
    <div :class="styleEdit">
        <div class="create__body">
            <label class="create__label"
                >{{ titleFirstInput }}{{ nameFirstIndex
                }}<input v-model="dataInput.titleFirstInput" type="text" class="create__input"
            /></label>
            <label class="create__label"
                >{{ titleSecondInput }} {{ nameSecondIndex
                }}<input v-model="dataInput.titleSecondInput" :type="typeInput" class="create__input"
            /></label>
            <div class="button__body">
                <custom-button :title-button="checkedNameButton" @click="checkedMethodByButton" />

                <custom-button v-show="visibleBackButton" :title-button="'back'" @click="backToMainPage" />
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'EditPageItem',
    components: {
        CustomButton,
    },
    props: {
        titleFirstInput: {
            type: String,
            default: '',
        },
        titleSecondInput: {
            type: String,
            default: '',
        },
        nameClickMethods: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            dataInput: {},
            nameFirstIndex: null,
            nameSecondIndex: null,
        }
    },
    computed: {
        ...mapGetters('drivers', ['gReturnDataDriverById']),
        ...mapGetters('busses', ['gReturnDataBusById']),
        typeInput() {
            return this.nameClickMethods === 'drivers' ? 'number' : 'text'
        },
        styleEdit() {
            return this.$route.params.category ? 'styleDone' : 'styleNone'
        },
        checkedNameButton() {
            return this.$route.params.category ? 'save' : 'add'
        },
        visibleBackButton() {
            return this.$route.params.category ? true : false
        },
    },
    created() {
        if (this.$route.params) this.editItem(this.$route.params)
    },
    methods: {
        ...mapActions('drivers', ['addNewDriver', 'addChangeToDriverItem']),
        ...mapActions('busses', ['addNewBus', 'addChangeToBusItem']),

        saveChangeItem() {
            if (this.$route.params.category === 'drivers') {
                this.addChangeToDriverItem({
                    driverName: this.dataInput.titleFirstInput,
                    experience: this.dataInput.titleSecondInput,
                    id: parseInt(this.$route.params.idItem),
                })
                this.dataInput = {}
                this.backToMainPage()
            } else if (this.$route.params.category === 'busses') {
                this.addChangeToBusItem({
                    busModel: this.dataInput.titleFirstInput,
                    busPlate: this.dataInput.titleSecondInput,
                    id: parseInt(this.$route.params.idItem),
                })
                this.dataInput = {}
                this.backToMainPage()
            }
        },
        addItem() {
            if (this.nameClickMethods == 'drivers') {
                this.addNewDriver({
                    driverName: this.dataInput.titleFirstInput,
                    experience: this.dataInput.titleSecondInput,
                })
                this.dataInput = {}
            } else {
                this.addNewBus({
                    busModel: this.dataInput.titleFirstInput,
                    busPlate: this.dataInput.titleSecondInput,
                })
                this.dataInput = {}
            }
        },
        checkedMethodByButton() {
            this.$route.params.category ? this.saveChangeItem() : this.addItem()
        },
        editItem(params) {
            const category = params.category
            const idItem = params.idItem
            if (category == 'drivers') {
                let driver = this.gReturnDataDriverById(idItem)
                this.dataInput.titleFirstInput = driver.driverName
                this.dataInput.titleSecondInput = driver.experience
                this.nameFirstIndex = 'Driver name'
                this.nameSecondIndex = 'Experience'
            } else if (category == 'busses') {
                let bus = this.gReturnDataBusById(idItem)
                this.dataInput.titleFirstInput = bus.busModel
                this.dataInput.titleSecondInput = bus.busPlate
                this.nameFirstIndex = 'Bus model'
                this.nameSecondIndex = 'Bus plate'
            }
        },
        backToMainPage() {
            if (this.$route.params.category == 'drivers') this.$router.push({ name: 'drivers' })
            else if (this.$route.params.category == 'busses') this.$router.push({ name: 'busses' })
        },
    },
}
</script>

<style lang="scss" scoped>
.create {
    // .create__body
    &__body {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        row-gap: 15px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 600;
        width: 350px;
        justify-content: space-between;
    }
    // .create__label
    &__label {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
    }
    // .create__input
    &__input {
        flex: 0 0 70%;
        padding: 5px;
        background-color: rgba(44, 62, 80, 0.1);
        border-bottom: 1px solid #2c3e50;
        outline: none;
        &:focus-visible {
            outline: 1px solid #d33707;
            border-bottom: none;
        }
    }
}
.styleNone {
    background-color: transparent;
}
.styleDone {
    max-width: 43.75rem;
    margin: 1.25rem auto;
    padding: 1.5625rem;
    background-color: rgba(240, 248, 255, 0.2);
}
.button__body {
    display: flex;
    gap: 0.9375rem;
}
</style>
