<template>
    <q-card class="text-blue-grey-8 full-height">
        <q-img src="news-1.png" />

        <q-card-section>
            <div class="text-h6 text-dark text-weight-bold">
                {{ $t('no_articles_currently_available') }}
            </div>
        </q-card-section>

        <q-card-section class="article_summary q-pt-none">
            {{ $t('you_are_an_avid_reader_and_have_read_all_of_our_partner_articles_for_today_remember_to_always_check_back_for_news_thanks_for_helping') }}
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    name: 'ComponentNoArticle'
}
</script>

<style lang="stylus" scoped>
.article_summary
    @media (min-width: $breakpoint-sm-min)
        line-height 1.5rem
        min-height 9rem
        display -webkit-box
        -webkit-line-clamp 5
        -webkit-box-orient vertical
        overflow hidden
</style>