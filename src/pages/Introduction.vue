<template>
    <q-carousel v-model="slide" swipeable animated control-color="white" navigation padding arrows height="100vh" class="bg-secondary text-white shadow-1 rounded-borders">
        <q-carousel-slide name="intro-1" class="column no-wrap flex-center">
            <q-img src="intro_2.svg" class="intro-image" />

            <div class="row justify-center q-col-gutter-md q-mt-md" :class="!$q.platform.is.mobile ? 'text-center' : ''">
                <div class="col-xs-10 col-sm-12 text-h3">
                    {{ $t('here_your_reading_is_worth_points') }}
                </div>

                <div class="col-xs-10 col-sm-12">
                    {{ $t('every_day_partner_companies_publish_news_that_is_worth_points_when_being_read') }}
                </div>
            </div>
        </q-carousel-slide>

        <q-carousel-slide name="intro-2" class="column no-wrap flex-center">
            <q-img src="intro_1.svg" class="intro-image" />

            <div class="row justify-center q-col-gutter-md q-mt-md" :class="!$q.platform.is.mobile ? 'text-center' : ''">
                <div class="col-xs-10 col-sm-12 text-h3">
                    {{ $t('your_points_become_donations') }}
                </div>

                <div class="col-xs-10 col-sm-12">
                    {{ $t('your_points_are_automatically_converted_into_donations_to_our_partner_ngos') }}
                </div>
            </div>
        </q-carousel-slide>

        <q-carousel-slide name="intro-3" class="column no-wrap flex-center">
            <q-img src="intro_3.svg" class="intro-image" />

            <div class="row justify-center q-col-gutter-md q-mt-md" :class="!$q.platform.is.mobile ? 'text-center' : ''">
                <div class="col-xs-10 col-sm-12 text-h3">
                    {{ $t('you_help_and_stay_informed') }}
                </div>

                <div class="col-xs-10 col-sm-12">
                    {{ $t('at_no_cost_you_do_good_and_you_also_receive_information_about_our_partners') }}
                </div>

                <div class="col-12 text-center">
                    <q-btn :label="$t('lets_go')" color="primary" @click="finishIntroduction()" />
                </div>
            </div>
        </q-carousel-slide>
    </q-carousel>
</template>

<script>
export default {
    name: 'Introduction',

    data() {
        return {
            slide: 'intro-1'
        }
    },

    methods: {
        finishIntroduction() {
            this.$store.dispatch('persist/SET_INTRODUCTION_WATCHED', [true])
            this.$router.push({ name: 'login' })
        }
    }
}
</script>

<style lang="stylus" scoped>
.intro-image
    @media (max-width: $breakpoint-xs-max)
        width 70%
    @media (min-width: $breakpoint-sm-min)
        width 30%
</style>