<template>
    <q-card>
        <q-bar class="bg-primary text-white">
            <q-space />
            <q-btn dense flat icon="fal fa-times" v-close-popup />
        </q-bar>
        
        <q-card-section>
            <q-img src="congratulations.svg" />
        </q-card-section>

        <q-card-section class="q-pt-none">
            <div class="text-body1 text-weight-bold text-blue-grey-8">
                {{ $t('thanks_for_sharing_your_opinion') }}
            </div>
        </q-card-section>

        <q-card-section class="q-pt-none text-blue-grey-8">
            {{ $t('we_will_read_your_message_and_respond_shortly_thank_you_for_the_contact') }}
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
            <q-btn flat no-caps :label="$t('ok')" color="primary" v-close-popup />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: 'FeedbackCongratulations'
}
</script>

<style>

</style>