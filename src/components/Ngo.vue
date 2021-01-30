<template>
    <q-card>
        <q-bar class="bg-primary text-white">
            <q-space />
            <q-btn dense flat icon="fal fa-times" v-close-popup />
        </q-bar>

        <img :src="ngo.logo" />

        <q-card-section class="q-pt-none">
            <div class="text-body1 text-weight-bold text-blue-grey-8">
                {{ ngo.name }}
            </div>
        </q-card-section>

        <q-card-section class="q-pt-none text-blue-grey-8">
            <span v-html="ngo.description"></span>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
            <q-btn flat no-caps :label="$t('ok')" color="primary" v-close-popup />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: 'Ngo',

    props: { 
        ngo: Object 
    }
}
</script>

<style>

</style>