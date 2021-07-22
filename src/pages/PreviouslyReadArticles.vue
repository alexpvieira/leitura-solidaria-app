<template>
    <q-page class="q-pa-md">
		<div class="row q-mb-lg">
            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ $t('previously_read_articles') }}
            </div>
        </div>

        <div class="row q-col-gutter-lg">
			<div class="col-xs-12 col-sm-4 col-lg-3" v-for="item in home_items" :key="item.id">
				<c-article :item="item" />
			</div>
		</div>
    </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import Article from 'components/Article'
import items from '../json/items.json'

export default {
    name: 'PreviouslyReadArticles',

    data() {
		return {
			home_items: items
		}
	},
	
	computed: {
        ...mapGetters({
            user: 'persist/user'
        })
    },

	components: {
		'c-article': Article
	},

	methods: {
		getArticles() {
			this.$q.loading.show()

			this.$axios.get(`/v1/user_article/read/${this.user.cod_user}`)
			.then(response => {
				console.log(response)
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
		this.getArticles()
	}
}
</script>

<style>

</style>