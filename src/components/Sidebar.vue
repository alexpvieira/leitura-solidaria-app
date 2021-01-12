<template>
    <q-drawer v-model="drawerOpen" show-if-above bordered side="right">
        <div class="header-menu q-px-md" style="height: 160px">
            <div class="q-pt-sm">
                <q-img src="logo.png" class="logo-menu" style="width: 50%;" />
            </div>

            <div class="row q-col-gutter-lg q-mt-sm">
                <div class="col-3">
                    <q-avatar size="56px">
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                    </q-avatar>
                </div>

                <div class="col-9 text-white">
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

        <q-scroll-area style="height: calc(100% - 160px);">
            <q-list padding separator class="text-blue-grey-5">
                <q-item active clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="fas fa-home" />
                    </q-item-section>

                    <q-item-section :class="active ? 'text-weight-bold' : ''">
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
			active: true
        }
    },

    computed: {
        ...mapGetters({
            drawer_open_store: 'common/drawer_open'
        }),
        
        drawerOpen: {
            get() {
                return this.drawer_open_store
            },
            set(value) {
                this.$store.dispatch('common/SET_DRAWER_STATE', [value])
            }
        }
	},

    methods: {
        changeLanguage(language) {
			this.$i18n.locale = language
        },
        
        signOut() {
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