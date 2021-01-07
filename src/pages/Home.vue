<template>
	<q-page class="flex flex-center q-ma-md">
		<div class="row q-col-gutter-lg">
			<div class="col-12" v-for="item in home_itens" :key="item.id">
				<c-news v-if="item.type === 'news'" :item="item" />
				
				<c-video v-if="item.type === 'video'" :item="item" />
			</div>
		</div>

		<c-ad />
	</q-page>
</template>

<script>
import Ad from 'components/Ad'
import News from 'components/News'
import Video from 'components/Video'


export default {
	name: 'PageHome',

	data() {
		return {
			home_itens: [
				{	
					id: 1,
					title: 'Lorem Ipsum',
					image: './news-1.jpg',
					text: '',
					company: '',
					type: 'news'
				},
				{
					id: 2,
					title: 'Lorem Ipsum',
					image: './news-2.jpg',
					text: '',
					company: '',
					type: 'news'
				},
				{
					id: 3,
					title: 'Lorem Ipsum',
					video: 'https://www.youtube.com/embed/wnhvanMdx4s?rel=0',
					text: '',
					company: '',
					type: 'video'
				},
			]
		}
	},

	components: {
		'c-ad': Ad,
		'c-news': News,
		'c-video': Video
	}
}
</script>
