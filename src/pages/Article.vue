<template>
    <q-page class="q-pa-md">
        <div class="row justify-center">
            <div class="col-xs-12 col-sm-6">
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
                        <q-btn no-caps :label="$t('finish_your_reading')" color="primary" @click="show_article_opinion = true" v-if="$route.name === 'article'" />

                        <q-btn no-caps :label="$t('back')" color="primary" @click="$router.replace({ name: 'previously-read-articles' })" v-if="$route.name === 'previously-read-article'" />
                    </div>
                </div>
            </div>
        </div>
		
        <q-dialog v-model="show_article_opinion" @hide="show_congratulations = true" persistent>
            <c-article-opinion />
        </q-dialog>

        <q-dialog v-model="show_congratulations" @hide="$router.replace({ name: 'home' })" persistent>
            <c-article-congratulations :points="item.points" />
        </q-dialog>
	</q-page>
</template>

<script>
import items from '../json/items.json'
import ArticleOpinion from 'components/ArticleOpinion'
import ArticleCongratulations from 'components/ArticleCongratulations'

export default {
    name: 'PageArticle',

    data() {
        return {
            item: items.find(e => e.id == this.$route.params.id),
            show_article_opinion: false,
            show_congratulations: false
        }
    },

    components: {
        'c-article-opinion': ArticleOpinion,
        'c-article-congratulations': ArticleCongratulations
    }
}
</script>

<style>

</style>