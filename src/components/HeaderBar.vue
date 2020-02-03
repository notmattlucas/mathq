<template>
    <div id="header-bar">
        <span id="header-name">mathq</span>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar"
    }
</script>

<style scoped>

    #header-bar {
        background-color: lightblue;
        height: 5rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    @import url('https://fonts.googleapis.com/css?family=Baloo|Montserrat&display=swap');

    #header-name {
        font-family: 'Baloo', cursive;
        font-size: 3rem;
        margin-left: 1.5rem;
        color: whitesmoke;
    }

</style>