<template>
    <div class="sumq">
        <b-form inline>
            <label class="sum">
                10 + 11 =
            </label>
            <b-input class="answer" />
        </b-form>
    </div>
</template>

<script>
    export default {
        name: "SumQ"
    }
</script>

<style scoped>

    .sumq {
        width: 100%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    .sumq .form-inline {
        text-align: center;
    }

    .sum {
        font-size: 200%;
    }

    .answer {
        width: 3rem;
    }

</style>