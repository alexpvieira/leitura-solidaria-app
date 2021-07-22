<template>
    <q-card style="min-width: 350px">
        <q-card-section>
            <div class="text-body1 text-weight-bold text-blue-grey-8">
                {{ $t('what_is_your_opinion_about_the_text_you_just_read') }}
            </div>
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
            <q-rating v-model="article_rating" :max="5" size="2.5em" color="primary" icon="fal fa-star" icon-selected="fas fa-star" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
            <q-btn flat no-caps :label="$t('keep_on_reading')" color="secondary" v-close-popup />
            <q-btn no-caps :label="$t('send_my_opinion')" color="primary" v-close-popup />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: 'ArticleOpinion',

    data() {
        return {
            article_rating: 0
        }
    }
}
</script>

<style>

</style>