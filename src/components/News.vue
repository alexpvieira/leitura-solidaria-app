<template>
    <q-card class="text-blue-grey-8">
        <img :src="item.image" />

        <q-card-section>
            <div class="text-h6 text-dark text-weight-bold">
                {{ item.title }}
            </div>

            <div class="text-subtitle2">
                {{ $t('brought_by') }} {{ item.company }}
            </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            {{ item.article_summary }}
        </q-card-section>

        <q-separator />

        <q-card-actions>
            <q-btn flat no-caps color="primary" icon="fal fa-clock" size="sm" :label="$tc('minutes_of_reading', item.minutes, { count: item.minutes })" />
            <q-btn flat no-caps color="primary" icon="fal fa-trophy" size="sm" :label="$tc('points', item.points, { count: item.points })" />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: 'ComponentNews',

    props: { 
        item: Object 
    }
}
</script>

<style>

</style>