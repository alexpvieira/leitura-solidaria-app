<template>
    <q-page class="q-pa-lg" style="padding-top: 30vh;">
        <q-form class="full-width">
            <div class="row q-col-gutter-sm">
                <div class="col-12">
                    <q-img src="logo.png" />
                </div>

                <div class="col-12 q-mt-lg">
                    <q-input outlined dense v-model="email" :label="$t('email')" />
                </div>

                <div class="col-12">
                    <q-input outlined dense v-model="password" type="password" :label="$t('password')" />
                </div>

                <div class="col-12">
                    <q-btn class="full-width" color="primary" :label="$t('submit')" @click="$router.push({ name: 'home' })" />
                </div>

                <div class="col-12 text-center text-caption">
                    <router-link to="/recover-password">{{ $t('recover_password') }}</router-link>
                </div>

                <div class="col-12 q-mt-lg text-center">
                    <q-btn flat dense no-caps color="secondary" :label="$t('dont_have_an_account_sign_up_here')" @click="$router.push({ name: 'register' })" />
                </div>
            </div>
        </q-form>
    </q-page>
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>

<style>

</style>