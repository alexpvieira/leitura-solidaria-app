<template>
    <q-page class="q-pa-lg" style="padding-top: 30vh;">
        <q-form class="full-width">
            <div class="row q-col-gutter-sm">
                <div class="col-12">
                    <q-img src="logo.png" />
                </div>

                <div class="col-12">
                    <q-input outlined dense v-model="email" :label="$t('email')" />
                </div>

                <div class="col-12">
                    <q-input outlined dense v-model="password" type="password" :label="$t('password')" />
                </div>

                <div class="col-12">
                    <q-input outlined dense v-model="password_repeat" type="password" :label="$t('confirm_password')" />
                </div>

                <div class="col-12">
                    <q-btn class="full-width" color="primary" :label="$t('create_new_account')" />
                </div>

                <div class="col-12 q-mt-md text-center text-caption">
                    <router-link to="/">{{ $t('back') }}</router-link>
                </div>
            </div>
        </q-form>
    </q-page>
</template>

<script>
export default {
    name: 'Register',

    data() {
        return {
            email: '',
            password: '',
            password_repeat: ''
        }
    }
}
</script>

<style>

</style>