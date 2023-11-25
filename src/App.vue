<template>
    <div class="background-table">
        <div class="navigation">
            <router-link to="/">Home</router-link>
            <router-link to="/drivers">Drivers</router-link>
            <router-link to="/busses">Busses</router-link>
            <router-link to="/appointment">Appointment</router-link>
            <router-link to="/about">About us</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: inherit;
}

li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: inherit;
    font-size: inherit;
}

html,
body {
    height: 100%;
    line-height: 1;
}

textarea,
button,
input {
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
}

button {
    cursor: pointer;
    background-color: inherit;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.background-table {
    position: fixed;
    background-image: url(./data/image/bgr4.jpg);
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
}

.navigation {
    position: relative;
    // z-index: 5;
    padding: 17px 15px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 25px;
    row-gap: 10px;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.2);
    & a {
        position: relative;
        z-index: 5;
        padding: 7px 15px;
        min-width: 100px;
        text-decoration: none;
        color: antiquewhite;
        font-weight: 600;
        font-size: 14px;
        border-radius: 1px;
        overflow: hidden;
        transition: color ease 0.23s;
        &:before,
        &:after {
            content: '';
            z-index: -5;
            position: absolute;
            left: -25%;
            height: 100%;
            width: 150%;
            background-color: #2c3e50;
            transform: rotate(-15deg);
            transition: all ease 0.5s;
        }
        &:before {
            top: -20%;
        }
        &:after {
            bottom: -20%;
        }
        &:hover {
            &:before {
                // left: -100%;
                top: -110%;
            }
            &:after {
                // left: 100%;
                bottom: -110%;
            }
        }
        &.router-link-exact-active {
            color: #f73f08;
        }
    }
}
</style>
