<template>
    <q-card class="text-blue-grey-8 full-height">
        <img :src="item.image" />

        <q-card-section>
            <div class="text-h6 text-dark text-weight-bold">
                {{ item.title }}
            </div>

            <div class="text-subtitle2">
                {{ $t('brought_by') }} {{ item.company }}
            </div>
        </q-card-section>

        <q-card-section class="article_summary q-pt-none">
            {{ item.article_summary }}
        </q-card-section>

        <q-card-section class="text-right q-pt-none">
            <q-btn flat dense no-caps :label="$t('keep_reading')" color="primary" @click="openArticle()" />
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
    name: 'ComponentArticle',

    props: ['item'],

    methods: {
        openArticle() {
            if (this.$route.name === 'home') this.$router.push({ name: 'article', params: { id: this.item.id } })
            else if (this.$route.name === 'previously-read-articles') this.$router.push({ name: 'previously-read-article', params: { id: this.item.id } })
        }
    }
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