<template>
    <q-page class="q-pa-md">
        <div class="row justify-center" v-if="loaded">
            <div class="col-xs-12 col-sm-6">
                <div class="row q-col-gutter-md text-blue-grey-8">
                    <div class="col-12">
                        <q-img :src="article.image" />
                    </div>

                    <div class="col-12 text-h6 text-dark text-weight-bold">
                        {{ article.title }}<br>
                    </div>

                    <div class="col-12 q-pt-none text-subtitle2">
                        {{ $t('brought_by') }} {{ article.partner.name }}
                    </div>

                    <div class="col-12">
                        <span v-html="$decodeMarkdown(article.full_article)"></span>
                    </div>

                    <div class="col-12 text-right q-mt-lg">
                        <q-btn no-caps :label="$t('finish_your_reading')" color="primary" @click="show_article_opinion = true" v-if="$route.name === 'article'" />

                        <q-btn no-caps :label="$t('back')" color="primary" @click="$router.replace({ name: 'previously-read-articles' })" v-if="$route.name === 'previously-read-article'" />
                    </div>
                </div>
            </div>
        </div>
		
        <q-dialog v-model="show_article_opinion" persistent>
            <c-article-opinion @markArticleAsRead="markArticleAsRead" />
        </q-dialog>

        <q-dialog v-model="show_congratulations" @hide="$router.replace({ name: 'home' })" persistent>
            <c-article-congratulations :points="article.points" />
        </q-dialog>
	</q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleOpinion from 'components/ArticleOpinion'
import ArticleCongratulations from 'components/ArticleCongratulations'

export default {
    name: 'PageArticle',

    data() {
        return {
            article: {
                partner: {}
            },
            cod_article: null,
            show_article_opinion: false,
            show_congratulations: false,
            loaded: false
        }
    },

    computed: {
        ...mapGetters({
            user: 'persist/user'
        })
    },

    components: {
        'c-article-opinion': ArticleOpinion,
        'c-article-congratulations': ArticleCongratulations
    },

	methods: {
		getArticle() {
			this.$q.loading.show()

			this.$axios.get(`/v1/article/details/${this.cod_article}`)
			.then(response => {
				this.article = response.data
                this.loaded = true
			})
			.catch(e => {
				console.log(e)
			})
			.finally(() => {
				this.$q.loading.hide()
			})
		},

        markArticleAsRead(article_rating) {
            this.$q.loading.show()
            this.show_article_opinion = false

            let data = {
                cod_article: this.cod_article,
                cod_user: this.user.cod_user,
                assessment: article_rating
            }

			this.$axios.post(`/v1/user_article`, data)
			.then(response => {
				this.show_congratulations = true
			})
			.catch(e => {
				console.log(e)
			})
			.finally(() => {
				this.$q.loading.hide()
			})
        }
	},

	created() {
        this.cod_article = parseInt(this.$route.params.id)
		this.getArticle()
	}
}
</script>

<style>

</style>