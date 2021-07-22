<template>
	<q-page class="q-pa-md">
		<div class="row q-col-gutter-lg">
			<div class="col-xs-12 col-sm-4 col-lg-3" v-for="article in articles" :key="article.cod_article" v-if="!loading">
				<c-article :article="article" />
			</div>

			<div class="col-xs-12 col-sm-4 col-lg-3" v-if="!loading && articles.length === 0">
				<c-no-article />
			</div>
		</div>
	</q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import Article from 'components/Article'
import NoArticles from 'components/NoArticles'

export default {
	name: 'PageHome',

	data() {
		return {
			articles: [],
			loading: true
		}
	},

	computed: {
        ...mapGetters({
            user: 'persist/user'
        })
    },

	components: {
		'c-article': Article,
		'c-no-article': NoArticles
	},

	methods: {
		getArticles() {
			this.$q.loading.show()
			this.loading = true

			this.$axios.get(`/v1/user_article/not_read/${this.user.cod_user}`)
			.then(response => {
				this.articles = response.data
			})
			.catch(e => {
				console.log(e)
			})
			.finally(() => {
				this.$q.loading.hide()
				this.loading = false
			})
		}
	},

	created() {
		this.getArticles()
	}
}
</script>
