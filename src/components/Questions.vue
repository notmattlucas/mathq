<template>
    <div id="question-wrapper">
        <div id="questions">
            <div v-for="question in questions" v-bind:key="question">
                <b-card
                    class="question"
                    :header="`Question ${question}`">
                    <SumQ/>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>

    import SumQ from "./questions/SumQ";

    export default {
        name: "Questions",
        components: {
            SumQ
        },
        data: function() {
            return {
                questions: [
                    1,2,3,4,5,6,7,8,9,10
                ]
            }
        }
    }
</script>

<style scoped>

    .question {
        margin: 2rem;
        margin-top: 0rem;
    }

    .question .card-header {
        text-align: left;
    }

    #questions {
        width: device-width;
        max-width: 70rem;
        margin-left: auto;
        margin-right: auto;
    }

    #question-wrapper {
        padding-top: 2rem;
        text-align: center;
        margin-top:0;
    }

</style>