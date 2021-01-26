<template>
    <q-page class="q-pa-md">
        <div class="row q-mb-lg">
            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ $t('send_us_your_feedback') }}
            </div>

            <div class="col-12 text-blue-grey-8">
                {{ $t('your_opinion_is_very_important_so_that_we_can_improve_your_experience_on_our_app') }}
            </div>
        </div>

        <q-form @submit.prevent="sendFeedback()" class="row q-col-gutter-md">
            <div class="col-12">
                <q-select outlined dense v-model="subject" :options="subjects" :label="$t('subject')" :display-value="subject ? $t(subject.label) : ''">
                    <template v-slot:option="scope">
                        <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                            <q-item-section>
                                <q-item-label>
                                    {{ $t(scope.opt.label) }}
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                        </template>
                </q-select>
            </div>

            <div class="col-12">
                <q-input outlined dense v-model="feedback" type="textarea" :label="$t('message')" />
            </div>

            <div class="col-12">
                <q-btn color="primary" class="full-width" type="submit" :label="$t('submit')" />
            </div>
        </q-form>

        <q-dialog v-model="show_feedback_congratulations" @hide="$router.push({ name: 'home' })">
            <c-feedback-congratulations />
        </q-dialog>
    </q-page>
</template>

<script>
import FeedbackCongratulations from 'components/FeedbackCongratulations'

export default {
    name: 'Feedback',

    data() {
        return {
            feedback: '',
            show_feedback_congratulations: false,
            subject: null,
            subjects: [{
                label: 'compliment',
                value: 'compliment'
            }, {
                label: 'suggestion',
                value: 'suggestion'
            }, {
                label: 'doubt',
                value: 'doubt'
            }, {
                label: 'complaint',
                value: 'complaint'
            }]
        }
    },

    components: {
        'c-feedback-congratulations': FeedbackCongratulations
    },

    methods: {
        sendFeedback() {
            this.show_feedback_congratulations = true
        }
    },

    created() {
        if (this.$route.query?.type === 'doubt') {
            this.subject = {
                label: 'doubt',
                value: 'doubt'
            }
        }
    }
}
</script>

<style>

</style>