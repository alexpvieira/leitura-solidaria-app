<template>
    <q-page class="q-pa-md">
        <div class="row q-mb-lg">
            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ $t('ranking') }}
            </div>
        </div>

        <div class="row q-col-gutter-md text-center">
            <div class="col-12 text-weight-bold text-blue-grey-8 text-h5">
                <q-icon name="fas fa-medal" /> {{ $t(currentRanking.name) }}
            </div>

            <div class="col-12 q-px-xl">
                <q-linear-progress stripe rounded size="2.5rem" :value="rankingProgress" color="secondary" class="q-mb-sm" />
                <span class="text-secondary">
                    {{ $tc('points_for_the_next_ranking', pointsToNextRanking, { count: pointsToNextRanking }) }}
                </span>
            </div>
        </div>

        <div class="row q-col-gutter-lg text-center q-mt-lg">
            <div class="col-12 text-blue-grey-8 text-h5">
                {{ $t('points_summary') }}
            </div>

            <div class="col-12">
                <q-table :data="summary" :columns="columns" :pagination.sync="pagination" :loading="loading" @request="getSummary" row-key="cod_summary" :rows-per-page-options="[5, 10]">
                    <template v-slot:header="props">
                        <q-tr :props="props">
                            <q-th v-for="col in props.cols" :key="col.name" :props="props">
                                {{ $t(col.label) }}
                            </q-th>
                        </q-tr>
                    </template>

                    <template v-slot:body-cell-points="props">
                        <q-td auto-width :props="props">
                            {{ props.value }}
                        </q-td>
                    </template>

                    <template v-slot:body-cell-date="props">
                        <q-td auto-width :props="props">
                            {{ $d(new Date(props.value), 'short') }}
                        </q-td>
                    </template>

                    <template v-slot:body-cell-article="props">
                        <q-td auto-width :props="props">
                            {{ $truncateText(props.value) }}
                        </q-td>
                    </template>
                </q-table>
            </div>
        </div>
    </q-page>
</template>

<script>
import Badge from 'components/Badge'

export default {
    name: 'Ranking',

    data() {
        return {
            columns: [{
                align: 'left',
                field: 'points',
                label: 'points_earned',
                name: 'points',
                sortable: false
            }, {
                align: 'left',
                field: 'date',
                label: 'date',
                name: 'date',
                sortable: false
            }, {
                align: 'left',
                field: 'article',
                label: 'article',
                name: 'article',
                sortable: false
            }],
            loading: false,
            pagination: {
                descending: false,
                page: 1,
                rowsPerPage: 10,
                sortBy: 'desc'
            },
            points: 30,
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
            summary: [{
                article: 'Lorem ipsum dolor sit amet consectetur',
                date: new Date(),
                points: 10
            }, {
                article: 'Lorem ipsum dolor sit amet consectetur',
                date: new Date(),
                points: 10
            }, {
                article: 'Lorem ipsum dolor sit amet consectetur',
                date: new Date(),
                points: 10
            }, {
                article: 'Lorem ipsum dolor sit amet consectetur',
                date: new Date(),
                points: 10
            }, {
                article: 'Lorem ipsum dolor sit amet consectetur',
                date: new Date(),
                points: 10
            }]
        }
    },

    computed: {
        currentRanking() {
            return this.rankings.find(e => this.points >= e.minimum_points && this.points <= e.maximum_points)
        },

        rankingProgress() {
            return (this.points/this.currentRanking.maximum_points)
        },

        pointsToNextRanking() {
            return this.currentRanking.maximum_points - this.points
        }
    },

    methods: {
        getSummary({ pagination }) {
            // this.loading = true
            // this.pagination = pagination

            // let order = pagination.descending ? '-' : ''
            // let order_by = pagination.sortBy ? order + pagination.sortBy : ''

            // let data = {
            //     'linesPerPage': this.pagination.rowsPerPage,
            //     'page': this.pagination.page,
            //     'ordering': order_by
            // }

            // this.$axios.get(`/v1/partner/page?${this.$qs.stringify(data)}`)
            // .then(response => {
            //     this.pagination.rowsNumber = response.data.total_elements
            //     this.partners = response.data.results.map(e => ({...e, actions: e.cod_partner}))
            // })
            // .catch(e => {
            //     console.log(e)
            // })
            // .finally(() => {
            //     this.loading = false
            // })
        },
    },

    created() {
        this.getSummary({ pagination: this.pagination })
    }
}
</script>

<style>

</style>