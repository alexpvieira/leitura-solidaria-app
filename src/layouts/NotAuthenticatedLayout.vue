<template>
	<q-layout view="lHh Lpr lFf" class="background-layout">
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
export default {
	name: 'NotAuthenticatedLayout',
}
</script>

<style lang="stylus" scoped>
.background-layout
	background-image url('../assets/background.png')
	background-repeat no-repeat
	background-attachment fixed
	background-position 50% 0%
	background-size contain
</style>
