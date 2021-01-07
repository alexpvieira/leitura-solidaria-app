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
					image: './news-1.png',
					article_summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore voluptatum est aliquid eaque alias!',
					company: 'Acme Inc.',
					type: 'news',
					points: 10,
					minutes: 5
				},
				{
					id: 2,
					title: 'Lorem Ipsum',
					image: './news-2.png',
					article_summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore voluptatum est aliquid eaque alias!',
					company: 'Acme Inc.',
					type: 'news',
					points: 20,
					minutes: 3
				},
				{
					id: 3,
					title: 'Lorem Ipsum',
					video: 'https://www.youtube.com/embed/wnhvanMdx4s?rel=0',
					article_summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore voluptatum est aliquid eaque alias!',
					company: 'Acme Inc.',
					type: 'video',
					points: 40,
					minutes: 8
				}
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
