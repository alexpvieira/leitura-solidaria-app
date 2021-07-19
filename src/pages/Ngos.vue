<template>
    <q-page class="q-pa-md">
        <div class="row q-mb-lg">
            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ $t('ngos') }}
            </div>

            <div class="col-12 text-blue-grey-8">
                {{ $t('learn_more_about_our_partner_ngos_and_the_work_they_promote') }}
            </div>
        </div>

        <div class="row q-col-gutter-sm justify-center">
            <div class="col-xs-10 col-sm-4 col-lg-3" v-for="(ngo, index) in ngos" :key="index">
                <q-img :src="ngo.logo" :img-style="{ filter: 'grayscale(100%)' }" @click="showNgo(ngo)" />
            </div>
        </div>

        <q-dialog :maximized="$q.platform.is.mobile" transition-show="slide-up" transition-hide="slide-down" v-model="show_ngo">
            <c-ngo :ngo="ngo" />
        </q-dialog>
    </q-page>
</template>

<script>
import Ngo from 'components/Ngo'

export default {
    name: 'Ngos',

    data() {
        return {
            ngos: [],
            ngo: {},
            show_ngo: false
        }
    },

    components: {
        'c-ngo': Ngo
    },

    methods: {
        getNgos() {
            this.$q.loading.show()

            this.$axios.get(`/v1/ongs/details`)
            .then(response => {
                this.ngos = response.data.map(e => ({...e, logo: e.image}))
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                this.$q.loading.hide()
            })
        },

        showNgo(ngo) {
            this.ngo = ngo
            this.show_ngo = true
        }
    },

    created() {
        this.getNgos()
    }
}
</script>

<style>

</style>