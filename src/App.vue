<template>
    <div id="mathq">
        <HeaderBar />
        <div class="main">
          <Questions></Questions>
        </div>
    </div>
</template>

<script>

    import HeaderBar from "./components/HeaderBar";
    import Questions from "./components/Questions";
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';

    export default {
        name: 'mathq',
        components: {
            Questions,
            HeaderBar
        }
    }

</script>

<style>

    #mathq {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .main {
        background-color: aliceblue;
    }


</style>
