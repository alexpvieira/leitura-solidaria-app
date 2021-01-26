<template>
    <q-page class="q-pa-md">
        <div class="row q-mb-lg">
            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ $t('ranking_and_badges') }}
            </div>
        </div>

        <div class="row q-col-gutter-md text-center">
            <div class="col-12 text-weight-bold text-blue-grey-8 text-h5">
                <q-icon name="fas fa-medal" /> {{ $t('gold_ranking') }}
            </div>

            <div class="col-12 q-px-xl">
                <q-linear-progress stripe rounded size="2.5rem" :value="ranking_progress" color="secondary" class="q-mb-sm" />
                <span class="text-secondary">
                    {{ $tc('points_for_the_next_ranking', points, { count: points }) }}
                </span>
            </div>
        </div>
        
        <div class="row q-col-gutter-lg text-center q-mt-lg">
            <div class="col-12 text-blue-grey-8 text-h5">
                {{ $t('achievements') }}
            </div>

            <div class="col-6" v-for="(b, index) in badges" :key="index">
                <q-avatar size="8rem" font-size="3rem" :color="b.earned ? 'primary' : 'grey-5'" text-color="white" :icon="b.icon" @click="showBadge(b)" class="q-mb-sm shadow-8" /><br>
                
                <span class="text-body1 text-weight-bold text-blue-grey-8">
                    {{ $t(b.slug) }}
                </span>
            </div>
        </div>

        <q-dialog v-model="show_badge">
            <c-badge :badge="badge" />
        </q-dialog>
    </q-page>
</template>

<script>
import Badge from 'components/Badge'

export default {
    name: 'RankingAndBadges',

    data() {
        return {
            badge: {},
            badges: [{
                description: 'you_have_just_read_your_first_news_and_are_already_helping',
                earned: true,
                earned_date: '2021-01-24',
                icon: 'fas fa-play',
                slug: 'a_good_start'
            }, {
                description: 'you_read_100_news_stories_and_helped_our_ngos_a_lot',
                earned: false,
                earned_date: '',
                icon: 'fas fa-book-reader',
                slug: 'bookworm'
            }, {
                description: 'you_read_news_every_day_for_consecutive_days',
                earned: false,
                earned_date: '',
                icon: 'fas fa-sun',
                slug: 'daily_reader'
            }],
            points: 30,
            ranking_progress: 0.7,
            show_badge: false
        }
    },

    components: {
        'c-badge': Badge
    },

    methods: {
        showBadge(badge) {
            this.badge = badge
            this.show_badge = true
        }
    }
}
</script>

<style>

</style>