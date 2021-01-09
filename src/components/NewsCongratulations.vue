<template>
    <q-card style="min-width: 350px">
        <q-card-section>
            <q-img src="congratulations.svg" />
        </q-card-section>

        <q-card-section class="q-pt-none">
            <div class="text-body1 text-weight-bold text-blue-grey-8">
                {{ $t('thanks_for_reading_with_us_today') }}
            </div>
        </q-card-section>

        <q-card-section class="q-pt-none text-blue-grey-8">
            {{ $t('the_text_you_just_read_helped_a_lot_of_people_thank_you_very_much') }}
            {{ $tc('you_just_earn_points_for_reading_this_text', points, { count: points }) }}
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
            <q-btn flat no-caps :label="$t('ok')" color="primary" v-close-popup />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: 'NewsCongratulations',

    props: { 
        points: Number 
    }
}
</script>

<style>

</style>