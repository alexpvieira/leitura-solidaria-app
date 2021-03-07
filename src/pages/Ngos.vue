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
            ngos: [
                {
                    logo: 'ngo-1.png',
                    name: 'Associação de Ajuda',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt.<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt.<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt.'
                },
                {
                    logo: 'ngo-2.png',
                    name: 'Benfeitoria',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt.<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt.<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt.'
                },
                {
                    logo: 'ngo-3.png',
                    name: 'ONG do Bem',
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt.<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt.<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda iusto, blanditiis quaerat quasi eaque officiis, atque ea excepturi vero optio eius cupiditate in numquam placeat necessitatibus minima deleniti deserunt.'
                },
            ],
            ngo: {},
            show_ngo: false
        }
    },

    components: {
        'c-ngo': Ngo
    },

    methods: {
        showNgo(ngo) {
            this.ngo = ngo
            this.show_ngo = true
        }
    }
}
</script>

<style>

</style>