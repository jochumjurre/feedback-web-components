<template>
    <div>
        <InspectionSelector
            v-model:selectedInspectionIndex="this.selectedInspectionIndex"
            v-model:selectedFindingIndex="this.selectedFindingIndex"
            :inspectionsList="this.store.inspections"
        />
        <v-card
            v-if="activeFinding"
            class="mx-auto"
        >
            <v-carousel
                v-if="activeFinding.photos && activeFinding.photos.length"
                    v-model="carouselIndex"
                    :show-arrows="activeFinding.photos.length > 1"
                    :hide-delimiters="activeFinding.photos.length <= 1"
                    height="240px"
                >
                <v-carousel-item
                    v-for="(photo, index) in activeFinding.photos"
                    :key="index"
                >
                    <img
                        :src="getPhotoUrl(photo)"
                        :alt="`Foto ${index + 1} van ${ activeFinding.subType.toLowerCase() } bevinding`"
                        :title="`Foto ${index + 1} van ${ activeFinding.subType.toLowerCase() } bevinding`"
                        style="width: 100%; height: 240px; object-fit: cover;"
                    />
                </v-carousel-item>
            </v-carousel>
            <v-card-title>
                {{ activeFinding.type }}
            </v-card-title>
            <v-card-subtitle>
                <v-icon icon="mdi-map-marker" />
                {{ activeInspection.location }} -
                <v-icon icon="mdi-calendar-blank" />
                {{ activeInspection.getDate() }}
            </v-card-subtitle>
            <v-card-text class="text-body-1">
                <p v-show="activeFinding.newDamage !== undefined">
                    <span class="font-weight-medium">Nieuwe schade: </span>
                    <v-chip :color="activeFinding.newDamage ? 'success' : 'error'" dark>
                        {{ activeFinding.newDamage ? 'Ja' : 'Nee' }}
                    </v-chip>
                </p>
                <p v-show="activeFinding.subType">
                    <span class="font-weight-medium">Sub-type: </span>
                    {{ activeFinding.subType }}
                </p>
                <p v-show="activeFinding.description">
                    <span class="font-weight-medium">Omschrijving: </span>
                    {{ activeFinding.description }}
                </p>
                <p v-show="activeFinding.reportedMalfunctions">
                    <span class="font-weight-medium">Gemelde storingen: </span>
                    {{ activeFinding.reportedMalfunctions }}
                </p>
                <p v-show="activeFinding.requiresImmediateAction !== undefined">
                    <span class="font-weight-medium">Acute actie vereist: </span>
                    <v-chip :color="activeFinding.requiresImmediateAction ? 'success' : 'error'" dark>
                        {{ activeFinding.requiresImmediateAction ? 'Ja' : 'Nee' }}
                    </v-chip>
                </p>
                <p v-show="activeFinding.costEstimate">
                    <span class="font-weight-medium">Kostenindicatie: </span>
                    {{ activeFinding.costEstimate }}
                </p>
                <p v-show="activeFinding.performedBy">
                    <span class="font-weight-medium">Uitgevoerd door: </span>
                    {{ activeFinding.performedBy }}
                </p>
                <p v-show="activeFinding.remarks">
                    <span class="font-weight-medium">Opmerkingen: </span>
                    {{ activeFinding.remarks }}
                </p>
                <p v-show="activeFinding.approved !== undefined">
                    <span class="font-weight-medium">Goedgekeurd: </span>
                    <v-chip :color="activeFinding.approved ? 'success' : 'error'" dark>
                        {{ activeFinding.approved ? 'Ja' : 'Nee' }}
                    </v-chip>
                </p>
                <p v-show="activeFinding.testProcedurePdf">
                    <span class="font-weight-medium">Download testprocedure (.PDF): </span>
                    <a :href="getPdfUrl(activeFinding.testProcedurePdf)">
                        {{ activeFinding.testProcedurePdf }}
                    </a>
                </p>
                <p v-show="activeFinding.existingSituationPdf">
                    <span class="font-weight-medium">Testprocedure (.PDF): </span>
                    <a :href="getPdfUrl(activeFinding.existingSituationPdf)">
                        {{ activeFinding.existingSituationPdf }}
                    </a>
                </p>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import InspectionSelector from  '@/components/utilities/InspectionSelector.vue';
import { useInspectionsStore } from '@/stores/inspectionsStore.js';

export default {
    components: {
        InspectionSelector,
    },
    data() {
        return {
            selectedInspectionIndex: 0, // Index van gekozen INSPECTIE
            selectedFindingIndex: 0, // Index van gekozen BEVINDING
            carouselIndex: 0, // Index van huidige afbeelding foto-carousel
            store: useInspectionsStore(), // Toegang tot INSPECTIES via store
        }
    },
    computed: {
        // Selecteer actieve INSPECTIE o.b.v. selectedInspectionIndex
        activeInspection() {
            if (this.store.inspections.length === 0) return null;
            return this.store.inspections[this.selectedInspectionIndex];
        },
        // Selecteer actieve BEVINDING o.b.v. selectedFindingIndex
        activeFinding() {
            if (!this.activeInspection || !this.activeInspection.findings) return null;
            return this.activeInspection.findings[this.selectedFindingIndex] || null;
        }
    },
    watch: {
        // Reset carousel en BEVINDING index bij wisselen van INSPECTIE
        selectedInspectionIndex() {
            this.carouselIndex = 0;
            this.selectedFindingIndex = 0;
        },
        // Reset carousel bij wissen van BEVINDING
        selectedFindingIndex() {
            this.carouselIndex = 0;
        }
    },
    methods: {
        // Genereer URL voor foto uit bestandsnaam
        getPhotoUrl(filename) {
            if (!filename) return '';
            return `/images/${filename}`;
        },
        // Genereer URL voor PDF-document, controle op lege naam
        getPdfUrl(filename) {
            if (!filename) return '';
            return new URL(`../../assets/documents/${filename}`, import.meta.url).href;
        },
    },
}
</script>
