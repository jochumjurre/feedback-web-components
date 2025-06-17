<template>
    <v-card class="rounded-lg pa-4 mt-6">
        <router-link to="/" class="d-flex align-center navigation">
            <v-icon>mdi-chevron-left</v-icon>
            <v-card-title class="text-h5 mb-0 pa-0">Kennisbank</v-card-title>
        </router-link>
        <v-card-subtitle class="mb-4 mt-2">Referentiedocumenten van Real Estate Care voor woninginspecties.</v-card-subtitle>

        <v-list density="comfortable" nav>
            <v-list-item
                v-for="doc in this.documents"
                :key="doc.name"
                :href="doc.path"
                target="_blank"
                class="rounded hover:bg-grey-lighten-4"
            >
            <v-row class="w-100">
                <v-col cols="11">
                    <v-icon color="red" start class="mr-2">mdi-file-pdf-box</v-icon>
                    {{ doc.name }}
                </v-col>
                    <v-col cols="1" class="text-right">
                    <v-icon>mdi-open-in-new</v-icon>
                </v-col>
            </v-row>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            // Lijst met referentiedocumenten
            documents: [
                {
                    name: 'Inspectierichtlijnen.pdf',
                    path: '/assets/documents/dummy.pdf'
                },
                {
                    name: 'Veiligheidsnormen.pdf',
                    path: '/assets/documents/dummy2.pdf'
                },
                {
                    name: 'Procedure vochtcontrole.pdf',
                    path: '/assets/documents/dummy3.pdf'
                },
                {
                    name: 'Constructieveiligheidstest.pdf',
                    path: '/assets/documents/dummy4.pdf'
                }
            ]
        }
    }
}
</script>
