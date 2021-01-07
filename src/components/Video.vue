<template>
    <q-card>
        <q-video :src="item.video" :ratio="4/3" />

        <q-card-section>
            <div class="text-h6">
                {{ item.title }}
            </div>

            <div class="text-subtitle2">
                Trazido por {{ item.company }}
            </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    name: 'ComponentVideo',

    props: { 
        item: Object 
    }
}
</script>

<style>

</style>