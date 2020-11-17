<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="left_drawer_open = !left_drawer_open" />

				<q-toolbar-title>
					Quasar App
				</q-toolbar-title>

				<q-btn-toggle v-model="color_mode" toggle-color="primary" color="grey" :options="color_options" @input="changeColorMode()" />
			</q-toolbar>
		</q-header>

		<q-drawer v-model="left_drawer_open" show-if-above bordered content-class="bg-grey-1">
			<q-list>
				<q-item-label header class="text-grey-8">
					Essential Links
				</q-item-label>
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
export default {
	name: 'MainLayout',

	data () {
		return {
            color_mode: 'light',
            color_options: [{
                label: 'Light',
                value: 'light'
            }, {
                label: 'Dark',
                value: 'dark'
            }],
            left_drawer_open: false
        }
	},

	methods: {
		changeColorMode() {
			if (this.color_mode === 'light') this.$q.dark.set(false)
			else this.$q.dark.set(true)
		}
	}
}
</script>
