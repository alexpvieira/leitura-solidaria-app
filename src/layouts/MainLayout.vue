<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="left_drawer_open = !left_drawer_open" />

				<q-toolbar-title>
					{{ $t('solidary_reading') }}
				</q-toolbar-title>
			</q-toolbar>
		</q-header>

		<q-drawer v-model="left_drawer_open" show-if-above bordered content-class="bg-grey-1">
			<q-img class="absolute-top header-menu" style="height: 180px">
				<div class="absolute-bottom bg-transparent">
					<div class="text-center">
						<q-img src="logo.png" class="logo-menu" style="width: 80%;" />
					</div>

					<div class="row q-mt-lg">
						<div class="col-3">
							<q-avatar size="56px">
								<img src="https://cdn.quasar.dev/img/boy-avatar.png">
							</q-avatar>
						</div>

						<div class="col-9">
							<div class="text-weight-bold">
								<q-icon name="far fa-user" /> José Roberto da Silva
							</div>

							<div>
								<q-icon name="far fa-medal" /> {{ $t('gold_ranking') }}
							</div>

							<div>
								<q-icon name="far fa-trophy" /> {{ $tc('points', 100, { count: 100 }) }}
							</div>
						</div>
					</div>
				</div>
			</q-img>

			<q-scroll-area style="height: calc(100% - 180px); margin-top: 180px;">
				<q-list padding separator>
					<q-item active clickable v-ripple>
						<q-item-section avatar>
							<q-icon name="fas fa-home" />
						</q-item-section>

						<q-item-section>
							{{ $t('home') }}
						</q-item-section>
					</q-item>

					<q-item clickable v-ripple>
						<q-item-section avatar>
							<q-icon name="fas fa-user-edit" />
						</q-item-section>

						<q-item-section>
							{{ $t('profile') }}
						</q-item-section>
					</q-item>

					<q-item clickable v-ripple>
						<q-item-section avatar>
							<q-icon name="fas fa-comments" />
						</q-item-section>

						<q-item-section>
							{{ $t('send_us_your_feedback') }}
						</q-item-section>
					</q-item>

					<q-item clickable v-ripple @click="$router.push({ name: 'login' })">
						<q-item-section avatar>
							<q-icon name="fas fa-sign-out-alt" />
						</q-item-section>

						<q-item-section>
							{{ $t('sign_out') }}
						</q-item-section>
					</q-item>
				</q-list>
			</q-scroll-area>

			<div class="absolute-bottom text-center q-pa-md text-grey text-caption">
				<div class="row q-col-gutter-md">
					<div class="col-12">
						<q-img src="flags/br.svg" class="flag q-mr-md" @click="changeLanguage('pt-br')" />
						<q-img src="flags/us.svg" class="flag" @click="changeLanguage('en-us')" />
					</div>

					<div class="col-12">
						{{ $t('created_by_the_b_group_for_the_software_engeneering_mba') }}
					</div>
				</div>
			</div>
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
			left_drawer_open: false
        }
	},

	methods: {
		changeLanguage(language) {
			this.$i18n.locale = language
		}
	}
}
</script>

<style lang="stylus" scoped>
.header-menu
	background-color $primary

.logo-menu
	filter brightness(0) invert(1)

.flag
	max-width 1.5rem
</style>
