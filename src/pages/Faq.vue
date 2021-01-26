<template>
    <q-page class="q-pa-md">
        <div class="row q-mb-lg">
            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ $t('faq') }}
            </div>

            <div class="col-12 text-blue-grey-8">
                {{ $t('you_can_see_below_the_frequently_asked_questions_when_using_our_application_still_in_doubt') }}
                <router-link :to="{ name: 'feedback', query: { type: 'doubt' } }">{{ $t('send_us_a_message') }}</router-link>
            </div>
        </div>

        <q-list separator bordered>
            <q-expansion-item group="faq" :label="faq.question" header-class="text-blue-grey-8" v-for="(faq, index) in faqs" :key="index">
                <q-card>
                    <q-card-section>
                        {{ faq.answer }}
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </q-list>
    </q-page>
</template>

<script>
export default {
    name: 'Faq',

    data() {
        return {
            faqs: [{
                answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facilis sed inventore, perspiciatis dicta quibusdam voluptatibus perferendis voluptas deserunt, illo praesentium porro iure esse minima consequuntur similique iste fugiat assumenda!',
                question: 'Lorem ipsum dolor sit amet dolor sit amet?'
            }, {
                answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facilis sed inventore, perspiciatis dicta quibusdam voluptatibus perferendis voluptas deserunt, illo praesentium porro iure esse minima consequuntur similique iste fugiat assumenda!',
                question: 'Lorem ipsum dolor sit amet ipsum dolor ipsum dolor ipsum dolor?'
            }, {
                answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facilis sed inventore, perspiciatis dicta quibusdam voluptatibus perferendis voluptas deserunt, illo praesentium porro iure esse minima consequuntur similique iste fugiat assumenda!',
                question: 'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet?'
            }, {
                answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facilis sed inventore, perspiciatis dicta quibusdam voluptatibus perferendis voluptas deserunt, illo praesentium porro iure esse minima consequuntur similique iste fugiat assumenda!',
                question: 'Lorem ipsum dolor sit amet amet amet?'
            }, {
                answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facilis sed inventore, perspiciatis dicta quibusdam voluptatibus perferendis voluptas deserunt, illo praesentium porro iure esse minima consequuntur similique iste fugiat assumenda!',
                question: 'Lorem ipsum dolor sit amet dolor sit dolor sit?'
            }]
        }
    }
}
</script>

<style>

</style>