<template>
    <b-card class="question" :class="this.status">
        <template v-slot:header>
            <transition name="fade">
                <b-button v-if="status === 'pending'" variant="warning" class="submit" @click="check($refs['question-view'])">
                    <b-icon icon="arrow-right"></b-icon>
                </b-button>
            </transition>
            <h5 class="header mb-0">Question {{question.id}}</h5>
        </template>
        <SumQ ref="question-view" :question="question.logic"/>
    </b-card>
</template>

<script>
    import SumQ from "./questions/SumQ";

    export default {
        name: "Question",
        components: {
            SumQ
        },
        props: {
            question: Object
        },
        data: function() {
            return {
                status: 'pending'
            }
        },
        methods: {
            check: function(question) {
                this.status = question.check() ? 'pass': 'fail';
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
        height: 4rem;
    }

    .submit {
        float: right;
        border-radius: 0.5rem;
    }

    .header {
        vertical-align: center;
        float:left;
    }

    .pass .card-header {
        background-color: #d6f5d6;
        transition: background 2s ease;
    }

    .fail .card-header {
        background-color: #ffcccc;
        transition: background 2s ease;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>