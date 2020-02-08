<template>
    <div id="question-wrapper">
        <div id="questions">
            <div v-for="question in questions" v-bind:key="question.id">
                <Question :question="question" />
            </div>
        </div>
    </div>
</template>

<script>

    let gen = require('./questions/ks1_generator');
    import Question from "./Question";

    export default {
        name: "Questions",
        components: {
            Question
        },
        data: function() {
            return {
                questions: gen.generate(10),
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

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