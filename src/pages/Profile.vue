<template>
    <q-page class="q-pa-md">
        <div class="row q-mb-lg">
            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ $t('profile') }}
            </div>
        </div>

        <div class="row q-col-gutter-md text-center q-mb-lg">
            <div class="col-12">
                <q-avatar size="6rem">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
            </div>

            <div class="col-12">
                <q-btn flat dense no-caps :label="$t('change_photo')" />
            </div>
        </div>

        <q-form @submit.prevent="updateProfile()" class="row q-col-gutter-md justify-center">
            <div class="col-xs-12 col-sm-8">
                <q-input outlined dense v-model="full_name" :label="$t('full_name')" />
            </div>

            <div class="col-xs-12 col-sm-8">
                <q-input outlined dense v-model="email" :label="$t('email')" />
            </div>

            <div class="col-xs-12 col-sm-8">
                <q-input outlined dense v-model="password" type="password" :label="$t('password')" />
            </div>

            <div class="col-xs-12 col-sm-8">
                <q-input outlined dense v-model="password_repeat" type="password" :label="$t('confirm_password')" />
            </div>

            <div class="col-xs-12 col-sm-8">
                <q-btn color="primary" class="full-width" type="submit" :label="$t('submit')" />
            </div>
        </q-form>
    </q-page>
</template>

<script>
export default {
    name: 'Profile',

    data() {
        return {
            full_name: '',
            email: '',
            password: '',
            password_repeat: ''
        }
    },

    methods: {
        updateProfile() {
            
        }
    }
}
</script>

<style>

</style>