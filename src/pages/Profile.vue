<template>
    <q-page class="q-pa-md">
        <div class="row q-mb-lg">
            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ $t('profile') }}
            </div>
        </div>

        <div class="row q-col-gutter-md text-center q-mb-lg">
            <div class="col-12">
                <q-avatar size="6rem" color="secondary">
                    <img :src="image" v-if="image">
                    <q-icon name="fal fa-user" color="white" v-else />
                </q-avatar>
            </div>

            <div class="col-12">
                <q-btn flat dense no-caps :label="$t('change_photo')" @click="pickFile()" />

                <q-file outlined dense clearable bg-color="white" v-model="avatar" accept=".jpg, image/*" max-file-size="1048576" @rejected="rejectFile" @input="pickedFile" ref="image" v-show="false" />
            </div>
        </div>

        <q-form @submit.prevent="updateProfile()" class="row q-col-gutter-md justify-center">
            <div class="col-xs-12 col-sm-8">
                <q-input outlined dense hide-bottom-space v-model="full_name" :label="$t('full_name')" :error="$v.full_name.$error" @input="$v.full_name.$touch" />
            </div>

            <div class="col-xs-12 col-sm-8">
                <q-input outlined dense hide-bottom-space v-model="email" :label="$t('email')" :error="$v.email.$error" @input="$v.email.$touch" @blur="checkEmail()">
                    <template v-slot:error>
                        <span slot="error-label" v-if="email_in_use">
                            {{ $t('email_already_used') }}
                        </span>
                    </template>
                </q-input>
            </div>

            <div class="col-xs-12 col-sm-8">
                <q-input outlined dense hide-bottom-space v-model="password" type="password" :label="$t('password')" :error="$v.password.$error" @input="$v.password.$touch" />
            </div>

            <div class="col-xs-12 col-sm-8">
                <q-input outlined dense hide-bottom-space v-model="password_repeat" type="password" :label="$t('confirm_password')" :error="$v.password_repeat.$error" @input="$v.password_repeat.$touch" />
            </div>

            <div class="col-xs-12 col-sm-8">
                <q-btn color="primary" class="full-width" type="submit" :label="$t('submit')" />
            </div>
        </q-form>
    </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { required, requiredIf, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'Profile',

    data() {
        return {
            avatar: null,
            cod_user: null,
            email: '',
            email_in_use: null,
            full_name: '',
            password: '',
            password_repeat: '',
            image: null
        }
    },

    computed: {
        ...mapGetters({
            user: 'persist/user'
        })
    },

    methods: {
        updateProfile() {
            this.$v.$touch()

            if (!this.$v.$error) {
                this.$q.loading.show()

                let data = {
                    full_name: this.full_name,
                    mail: this.email,
                    password: this.password,
                    image: this.image
                }

                this.$axios.put(`/v1/users/change_profile/${this.cod_user}`, data)
                .then(response => {
                    let user = {
                        cod_user: this.cod_user,
                        mail: this.email,
                        name: this.full_name,
                        ong: this.user.ong,
                        partner: this.user.partner,
                        profiles: this.user.profiles,
                        image: this.image
                    }

                    this.$store.dispatch('persist/SET_USER', [user])

                    this.$q.notify({
                        message: this.$t('user_updated_successfully'),
                        type: 'positive',
                        icon: 'fal fa-save'
                    })

                    this.$router.push({ name: 'home' })
                })
                .catch(e => {
                    console.log(e)

                    this.$q.notify({
                        message: this.$t('error_updating_user'),
                        type: 'negative',
                        icon: 'fal fa-ban'
                    })
                })
                .finally(() => {
                    this.$q.loading.hide()
                })
            }
        },

        checkEmail() {
            if (this.email) {
                let data = {
                    mail: this.email,
                    cod_user: this.cod_user
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
        },

        pickFile() {
            this.$refs.image.pickFiles()
        },

        async pickedFile(value) {
            if (!value) this.image = null
            else this.image = await this.$imageBase64(value)
        },

        rejectFile() {
            this.$q.notify({
                type: 'negative',
                icon: 'fal fa-ban',
                message: this.$t('invalid_file_size_or_type')
            })
        }
    },

    created() {
        this.cod_user = this.user.cod_user
        this.email = this.user.mail
        this.full_name = this.user.name
        this.image = this.user.image
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
            password: { minLength: minLength(6), 
                requiredIf: requiredIf(() => {
                    return this.password_repeat.length > 0
                })
            },
            password_repeat: { sameAsPassword: sameAs('password'), 
                requiredIf: requiredIf(() => {
                    return this.password.length > 0
                })
            }
        }
    }
}
</script>

<style>

</style>