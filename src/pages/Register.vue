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
                            <q-input outlined dense v-model="full_name" :label="$t('full_name')" />
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
                            <router-link :to="{ name: 'login' }">{{ $t('back') }}</router-link>
                        </div>
                    </div>
                </q-form>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'Register',

    data() {
        return {
            email: '',
            full_name: '',
            password: '',
            password_repeat: ''
        }
    }
}
</script>

<style>

</style>