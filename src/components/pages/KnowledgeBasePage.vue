<template>
    <section>
        <ContentHeader
            :title="'Kennisbank'"
            :description="'Referentiedocumenten van Real Estate Care voor woninginspecties.'"
        />
        <v-card class="rounded-lg pa-4 mt-6">
            <v-list>
                <v-list-item
                    v-for="document in this.documents"
                    :key="document.name"
                    :href="document.path"
                    target="_blank"
                    class="rounded hover:bg-grey-lighten-4"
                >
                    <v-row>
                        <v-col cols="10">
                            <v-icon
                                color="red"
                                class="mr-2"
                                icon="mdi-file-pdf-box"
                            />
                            {{ document.name }}
                        </v-col>
                        <v-col
                            cols="2"
                            class="text-right"
                        >
                            <v-icon icon="mdi-open-in-new" />
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>
        </v-card>
    </section>
</template>

<script>
export default {
    name: 'KnowledgeBasePage',
    data() {
        return {
            // Lijst met dummy referentiedocumenten
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
