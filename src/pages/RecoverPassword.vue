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
                    <q-btn class="full-width" color="primary" :label="$t('submit')" />
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
    name: 'RecoverPassword',

    data() {
        return {
            email: ''
        }
    }
}
</script>

<style>

</style>