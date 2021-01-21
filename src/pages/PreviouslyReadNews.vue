<template>
    <q-page class="q-pa-md">
        <div class="row q-col-gutter-lg">
			<div class="col-12" v-for="item in home_items" :key="item.id">
				<c-news v-if="item.type === 'news'" :item="item" />
				
				<c-video v-if="item.type === 'video'" :item="item" />
			</div>
		</div>
    </q-page>
</template>

<script>
import News from 'components/News'
import Video from 'components/Video'
import items from '../json/items.json'

export default {
    name: 'PreviouslyReadNews',

    data() {
		return {
			home_items: items
		}
	},

	components: {
		'c-news': News,
		'c-video': Video
	}
}
</script>

<style>

</style>