<template>
    <q-page class="q-pa-md">
		<div class="row q-mb-lg">
            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ $t('previously_read_news') }}
            </div>
        </div>

        <div class="row q-col-gutter-lg">
			<div class="col-xs-12 col-sm-4 col-lg-3" v-for="item in home_items" :key="item.id">
				<c-news :item="item" />
			</div>
		</div>
    </q-page>
</template>

<script>
import News from 'components/News'
import items from '../json/items.json'

export default {
    name: 'PreviouslyReadNews',

    data() {
		return {
			home_items: items
		}
	},

	components: {
		'c-news': News
	}
}
</script>

<style>

</style>