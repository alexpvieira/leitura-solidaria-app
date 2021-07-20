<template>
    <q-page class="q-pa-lg padding-not-authenticated">
        <div class="row justify-center">
            <div class="col-xs-12 col-sm-4">
                <q-form>
                    <div class="row q-col-gutter-sm">
                        <div class="col-xs-12 col-sm-10">
                            <q-img src="logo.png" />
                        </div>

                        <div class="col-12 q-mt-lg">
                            <q-input outlined dense hide-bottom-space v-model="full_name" :label="$t('full_name')" :error="$v.full_name.$error" @input="$v.full_name.$touch" />
                        </div>

                        <div class="col-12">
                            <q-input outlined dense hide-bottom-space v-model="email" :label="$t('email')" :error="$v.email.$error" @input="$v.email.$touch" @blur="checkEmail()">
                                <template v-slot:error>
                                    <span slot="error-label" v-if="email_in_use">
                                        {{ $t('email_already_used') }}
                                    </span>
                                </template>
                            </q-input>
                        </div>

                        <div class="col-12">
                            <q-input outlined dense hide-bottom-space v-model="password" type="password" :label="$t('password')" :error="$v.password.$error" @input="$v.password.$touch">
                                <template v-slot:error>
                                    <span slot="error-label" v-if="password.length < 6">
                                        {{ $t('password_must_have_at_least_6_characters') }}
                                    </span>
                                </template>
                            </q-input>
                        </div>

                        <div class="col-12">
                            <q-input outlined dense hide-bottom-space v-model="password_repeat" type="password" :label="$t('confirm_password')" :error="$v.password_repeat.$error" @input="$v.password_repeat.$touch">
                                <template v-slot:error>
                                    <span slot="error-label" v-if="password !== password_repeat">
                                        {{ $t('passwords_do_not_match') }}
                                    </span>
                                </template>
                            </q-input>
                        </div>

                        <div class="col-12">
                            <q-btn class="full-width" color="primary" :label="$t('create_new_account')" @click="saveUser()" />
                        </div>

                        <div class="col-12 q-mt-md text-center text-caption">
                            <router-link :to="{ name: 'login' }">{{ $t('back') }}</router-link>
                        </div>
                    </div>
                </q-form>
            </div>
        </div>
    </q-page>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
    name: 'Register',

    data() {
        return {
            email: '',
            email_in_use: null,
            full_name: '',
            password: '',
            password_repeat: ''
        }
    },

    computed: {
        ...mapGetters({
            user: 'persist/user'
        })
    },

    methods: {
        saveUser() {
            this.$v.$touch()

            if (!this.$v.$error) {
                this.$q.loading.show()

                let data = {
                    full_name: this.full_name,
                    mail: this.email,
                    password: this.password
                }

                this.$axios.post(`/v1/users/profile_user`, data)
                .then(response => {
                    this.login()
                })
                .catch(e => {
                    console.log(e)

                    this.$q.loading.hide()

                    this.$q.notify({
                        message: this.$t('error_creating_user'),
                        type: 'negative',
                        icon: 'fal fa-ban'
                    })
                })
            }
        },

        login() {
            let data = {
                mail: this.email,
                password: this.password
            }

            this.$axios.post(`/login`, data)
            .then(response => {
                this.$store.dispatch('persist/SET_ACCESS_TOKEN', [response.data.Authorization])
                this.getUserData()
            })
            .catch(e => {
                console.log(e)

                this.$q.loading.hide()

                this.$q.notify({
                    message: this.$t('invalid_email_or_password'),
                    type: 'negative',
                    icon: 'fal fa-ban'
                })
            })
        },

        getUserData() {
            this.$axios.get(`/v1/users/mail?mail=${this.$jwtDecode()}`)
            .then(response => {
                this.$store.dispatch('persist/SET_USER', [response.data])

                if (this.user?.profiles?.type === 'USER') {
                    this.$router.replace({ name: 'home' })
                }
                else {
                    this.$q.notify({
                        message: this.$t('this_user_does_not_have_access_to_the_app'),
                        type: 'negative',
                        icon: 'fal fa-ban'
                    })
                }
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                this.$q.loading.hide()
            })
        },

        checkEmail() {
            if (this.email) {
                let data = {
                    mail: this.email
                }

                this.$axios.post(`/v1/users/check_mail`, data)
                .then(response => {
                    this.email_in_use = response.data.in_use
                })
                .catch(e => {
                    console.log(e)
                })
            }
            else this.email_in_use = null
        }
    },

    validations() {
        return {
            email: { required, email,
                emailUnique() {
                    if (!this.email_in_use) return true
                    else return false
                }
            },
            full_name: { required },
            password: { required, minLength: minLength(6) },
            password_repeat: { required, sameAsPassword: sameAs('password') }
        }
    }
}
</script>

<style>

</style>