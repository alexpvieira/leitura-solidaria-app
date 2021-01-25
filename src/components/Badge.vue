<template>
    <q-card style="min-width: 350px">
        <q-card-section class="text-center">
            <q-avatar size="8rem" font-size="3rem" :color="badge.earned ? 'primary' : 'grey-5'" text-color="white" :icon="badge.icon" class="shadow-8" />
        </q-card-section>

        <q-card-section class="q-pt-none">
            <div class="text-body1 text-weight-bold text-blue-grey-8">
                {{ $t(badge.slug) }}
            </div>
        </q-card-section>

        <q-card-section class="q-pt-none text-blue-grey-8">
            {{ $t(badge.description) }}
        </q-card-section>

        <q-card-section class="q-pt-none text-blue-grey-8">
            {{ badge.earned_date ? `${$t('received_in')} ${$d(new Date(badge.earned_date), 'short')}` : $t('not_received_yet') }}
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
            <q-btn flat no-caps :label="$t('ok')" color="primary" v-close-popup />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: 'Badge',

    props: { 
        badge: Object 
    }
}
</script>

<style>

</style>