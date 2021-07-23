<template>
    <q-drawer v-model="drawerOpen" show-if-above bordered side="right">
        <div class="header-menu q-px-md" style="height: 160px">
            <div class="q-pt-sm">
                <q-img src="logo.png" class="logo-menu" style="width: 50%;" />
            </div>

            <div class="row q-col-gutter-lg q-mt-sm">
                <div class="col-3">
                    <q-avatar size="4rem" color="secondary">
                        <img :src="user.image" v-if="user.image">
                        <q-icon name="fal fa-user" color="white" v-else />
                    </q-avatar>
                </div>

                <div class="col-9 text-white">
                    <div class="text-weight-bold">
                        <q-icon name="far fa-user" /> {{ user.name }}
                    </div>

                    <div>
                        <q-icon name="far fa-at" /> {{ user.mail }}
                    </div>

                    <!-- <div>
                        <q-icon name="far fa-medal" /> {{ $t(currentRanking.name) }}
                    </div>

                    <div>
                        <q-icon name="far fa-trophy" /> {{ $tc('points', points, { count: points }) }}
                    </div> -->
                </div>
            </div>
        </div>

        <q-scroll-area style="height: calc(100% - 160px);">
            <q-list padding separator class="text-blue-grey-8">
                <q-item clickable v-ripple :to="{ name: menu_item.to }" exact v-for="(menu_item, index) in menu_items" :key="index">
                    <q-item-section avatar>
                        <q-icon :name="menu_item.icon" />
                    </q-item-section>

                    <q-item-section>
                        {{ $t(menu_item.label) }}
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple @click="signOut()">
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Sidebar',

    data() {
        return {
            menu_items: [{
                icon: 'fas fa-home',
                label: 'home',
                to: 'home'
            }, {
                icon: 'fas fa-user-edit',
                label: 'profile',
                to: 'profile'
            }, {
                icon: 'fas fa-newspaper',
                label: 'previously_read_articles',
                to: 'previously-read-articles'
            }, {
                icon: 'fas fa-hands-heart',
                label: 'ngos',
                to: 'ngos'
            }, {
                icon: 'fas fa-comments',
                label: 'send_us_your_feedback',
                to: 'feedback'
            }, {
                icon: 'fas fa-question',
                label: 'faq',
                to: 'faq'
            }],
            rankings: [{
                maximum_points: 49,
                minimum_points: 0,
                name: 'cooper_ranking'
            }, {
                maximum_points: 99,
                minimum_points: 50,
                name: 'silver_ranking'
            }, {
                maximum_points: 199,
                minimum_points: 100,
                name: 'gold_ranking'
            }, {
                maximum_points: 1000,
                minimum_points: 200,
                name: 'platinum_ranking'
            }],
            points: 30
        }
    },

    computed: {
        ...mapGetters({
            drawer_open_store: 'common/drawer_open',
            user: 'persist/user'
        }),
        
        drawerOpen: {
            get() {
                return this.drawer_open_store
            },
            set(value) {
                this.$store.dispatch('common/SET_DRAWER_STATE', [value])
            }
        },

        currentRanking() {
            return this.rankings.find(e => this.points >= e.minimum_points && this.points <= e.maximum_points)
        }
	},

    methods: {
        changeLanguage(language) {
            import('quasar/lang/' + language)
            .then(lang => {
                this.$q.lang.set(lang.default)
            })
			this.$i18n.locale = language
        },
        
        signOut() {
            this.$store.dispatch('persist/SET_ACCESS_TOKEN', [''])
            this.$store.dispatch('persist/SET_USER', [{}])
            this.$store.dispatch('common/SET_DRAWER_STATE', [false])
            this.$router.push({ name: 'login' })
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