<template>
    <q-page class="q-pa-lg padding-not-authenticated">
        <div class="row justify-center">
            <div class="col-xs-12 col-sm-4">
                <q-form>
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
                            <q-btn class="full-width" color="primary" :label="$t('sign_in')" @click="$router.push({ name: 'home' })" />
                        </div>

                        <div class="col-12 text-center">
                            <q-btn flat dense no-caps color="primary" @click="$router.push({ name: 'register' })">
                                {{ $t('dont_have_an_account') }} <span class="text-weight-bolder q-ml-xs">{{ $t('sign_up_here') }}</span>
                            </q-btn>
                        </div>

                        <div class="col-12 text-center text-caption">
                            <q-btn flat dense no-caps color="primary" :label="$t('recover_password')" @click="$router.push({ name: 'recover-password' })" />
                        </div>
                    </div>
                </q-form>
            </div>
        </div>
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