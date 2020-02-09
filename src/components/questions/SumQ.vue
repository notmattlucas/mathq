<template>
    <div class="sumq">
        <b-container>
            <b-row class="justify-content-md-center">
                <b-col md="auto">
                    <b-form inline class="text-center" @submit="submit" v-on:submit.prevent>
                        <label class="sum">
                            {{question.left}} + {{question.right}} =
                        </label>
                        <b-form-input v-model="answer"
                                      class="answer"
                                      type="number"/>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

    export default {
        name: "SumQ",
        props: {
            question: Object
        },
        data: () => {
            return {
                answer: null
            }
        },
        methods: {
            check: function() {
                let answer = parseInt(this.answer);
                return this.question.check(answer)
            },
            submit: function() {
                this.$emit('complete');
            }
        }
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
        text-align: center;
        width: 4rem;
        max-width: 4rem;
        border: solid 1px black;
        margin-left: 1rem;
        height: 4rem;
        font-size: 150%;
        padding: 0px;
    }

</style>