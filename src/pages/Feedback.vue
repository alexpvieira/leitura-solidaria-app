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

        <q-form @submit.prevent="sendFeedback()" class="row q-col-gutter-md justify-center">
            <div class="col-xs-12 col-sm-8">
                <q-select outlined dense hide-bottom-space v-model="subject" :options="subjects" :label="$t('subject')" :display-value="subject ? $t(subject.label) : ''" :error="$v.subject.$error" @input="$v.subject.$touch">
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

            <div class="col-xs-12 col-sm-8">
                <q-input outlined dense hide-bottom-space v-model="feedback" type="textarea" :label="$t('message')" :error="$v.feedback.$error" @input="$v.feedback.$touch" />
            </div>

            <div class="col-xs-12 col-sm-8">
                <q-btn color="primary" class="full-width" type="submit" :label="$t('submit')" />
            </div>
        </q-form>

        <q-dialog v-model="show_feedback_congratulations" @hide="$router.push({ name: 'home' })">
            <c-feedback-congratulations />
        </q-dialog>
    </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
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

    computed: {
        ...mapGetters({
            user: 'persist/user'
        })
    },

    components: {
        'c-feedback-congratulations': FeedbackCongratulations
    },

    methods: {
        sendFeedback() {
            this.$v.$touch()

            if (!this.$v.$error) {
                this.$q.loading.show()

                let data = {
                    subject: this.$t(this.subject.label),
                    message: this.feedback,
                    cod_user: this.user.cod_user,
                    name: this.user.name,
                    mail: this.user.mail
                }

                this.$axios.post(`/v1/opinion`, data)
                .then(response => {
                    this.show_feedback_congratulations = true
                })
                .catch(e => {
                    console.log(e)

                    this.$q.notify({
                        message: this.$t('error_sending_a_message'),
                        type: 'negative',
                        icon: 'fal fa-ban'
                    })
                })
                .finally(() => {
                    this.$q.loading.hide()
                })
            }
        }
    },

    created() {
        if (this.$route.query?.type === 'doubt') {
            this.subject = {
                label: 'doubt',
                value: 'doubt'
            }
        }
    },

    validations() {
        return {
            feedback: { required },
            subject: { required }
        }
    }
}
</script>

<style>

</style>