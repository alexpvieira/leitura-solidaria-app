<template>
    <q-page class="flex flex-center q-pa-md">
		<div class="row q-col-gutter-md text-blue-grey-8">
            <div class="col-12">
                <q-img :src="item.image" />
            </div>

            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ item.title }}<br>
            </div>

            <div class="col-12 q-pt-none text-subtitle2">
                {{ $t('brought_by') }} {{ item.company }}
            </div>

			<div class="col-12">
				<span v-html="item.full_article"></span>
			</div>

            <div class="col-12 text-right q-mt-lg">
                <q-btn no-caps :label="$t('finish_your_reading')" color="primary" @click="show_news_opinion = true" />
            </div>
		</div>

        <q-dialog v-model="show_news_opinion" @hide="show_congratulations = true" persistent>
            <c-news-opinion />
        </q-dialog>

        <q-dialog v-model="show_congratulations" @hide="$router.replace({ name: 'home' })" persistent>
            <c-news-congratulations :points="item.points" />
        </q-dialog>
	</q-page>
</template>

<script>
import items from '../json/items.json'
import NewsOpinion from 'components/NewsOpinion'
import NewsCongratulations from 'components/NewsCongratulations'

export default {
    name: 'PageNews',

    data() {
        return {
            item: items.find(e => e.id == this.$route.params.id),
            show_news_opinion: false,
            show_congratulations: false
        }
    },

    components: {
        'c-news-opinion': NewsOpinion,
        'c-news-congratulations': NewsCongratulations
    }
}
</script>

<style>

</style>