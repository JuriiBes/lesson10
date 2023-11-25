<template>
    <button class="custom__button">{{ titleButton }}</button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        titleButton: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss" scoped>
.custom__button {
    display: block;
    position: relative;
    padding: 6px 20px;
    border: 1px solid #2c3e50;
    border-radius: 2px;
    background-color: transparent;
    transition: color ease 0.23s;
    overflow: hidden;
    font-weight: 500;
    color: #ffffffc5;
    font-size: 0.875rem;
    transition: 0.3s;
    &:before,
    &:after {
        content: '';
        z-index: -5;
        position: absolute;
        left: -10%;
        height: 100%;
        width: 130%;
        background-color: #d33707;
        transition: all ease 0.4s;
    }
    &:before {
        top: -50%;
    }
    &:after {
        bottom: -50%;
    }
    &:hover {
        &:before {
            left: -50%;
            transform: rotate(-90deg) translate(0, -250%);
        }
        &:after {
            left: 50%;
            transform: rotate(-90deg) translate(0, 250%);
        }
    }
}
</style>
