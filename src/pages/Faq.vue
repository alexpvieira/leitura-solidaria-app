<template>
    <q-page class="q-pa-md">
        <div class="row q-mb-lg justify-center">
            <div class="col-12 text-h6 text-dark text-weight-bold">
                {{ $t('faq') }}
            </div>

            <div class="col-12 text-blue-grey-8">
                {{ $t('you_can_see_below_the_frequently_asked_questions_when_using_our_application_still_in_doubt') }}
                <router-link :to="{ name: 'feedback', query: { type: 'doubt' } }">{{ $t('send_us_a_message') }}</router-link>
            </div>

            <div class="col-xs-12 col-sm-8 q-mt-md">
                <q-list separator bordered>
                    <q-expansion-item group="faq" :label="faq.question" header-class="text-blue-grey-8" v-for="(faq, index) in faqs" :key="index">
                        <q-card>
                            <q-card-section>
                                {{ faq.answer }}
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </q-list>
            </div>
        </div>

        
    </q-page>
</template>

<script>
export default {
    name: 'Faq',

    data() {
        return {
            faqs: [{
                answer: 'O principal objetivo do app é angariar fundos para doação através de empresas privadas parceiras e doar esse dinheiro para ONGs que tenham interesse em se tornar parceiras do app.',
                question: 'Qual o objetivo do app?'
            }, {
                answer: 'Aqui as empresas com fins lucrativos se tornam parceiras e pagam valores para divulgar atividades relacionadas com o mundo das ONGs, a cada visualização recebida em um texto e/ou vídeo essa empresa vai realizar uma doação para um fundo de doação, ao longo de um mês juntamos todas as doações feitas e doamos o valor diretamente para as ONGs parceiras dividindo o valor total igualmente entre todas.',
                question: 'Como as ONGs ganham dinheiro se eu não faço nenhuma doação?'
            }, {
                answer: 'Através do App apenas empresas privadas poderão realizar doações mediante as visualizações de suas publicações, se você tem interesse de divulgar o trabalho social da sua empresa e realizar uma doação para isso, entre em contato com o nosso SAC. Agora se você deseja apenas realizar uma doação para uma ONG como pessoa física, então você pode olhar nossa lista de ONGs parceiras e entrar em contato diretamente com uma da sua escolha para realizar a doação direta, temos certeza de que todas ficarão felizes em contar com sua ajuda financeira e/ou de trabalho voluntário.',
                question: 'Posso realizar doações para as ONGs como pessoa física?'
            }, {
                answer: 'Para ganhar pontos basta ler ou assistir aos vídeos publicados até o final e quando aparecer o botão de concluir leitura, automaticamente você ganhará os pontos na sua conta e poderá subir de ranking.',
                question: 'Como eu ganho pontos no ranking do app?'
            }, {
                answer: 'No menu do app você pode clicar em perfil você poderá alterar suas informações pessoais como e-mail e senha.',
                question: 'Como faço para atualizar minhas informações?'
            }]
        }
    }
}
</script>

<style>

</style>