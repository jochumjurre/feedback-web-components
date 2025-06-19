<template>
    <section>
        <ContentHeader
            :title="'Uitgevoerde Inspecties'"
            :description="'Overzicht van je afgeronde inspecties.'"
        />

        <v-card class="rounded-lg pa-4 mt-6">
            <h3>1. Selecteer een inspectie</h3>
            <v-radio-group
                v-model="selectedInspectionIndex"
                color="secondary"
            >
                <v-radio
                    v-for="(inspection, sortedIndex) in sortedInspections"
                    :key="sortedIndex"
                    :label="`${inspection.location} (${new Date(inspection.date).toLocaleDateString('nl-NL')})`"
                    :value="store.inspections.findIndex(i => i === inspection)"
                />
            </v-radio-group>
        </v-card>

        <v-card class="rounded-lg pa-4 mt-6">
            <h3>2. Selecteer een bevinding:</h3>
            <v-radio-group
                v-if="activeFindings.length"
                v-model="selectedFindingIndex"
                color="secondary"
            >
                <v-radio
                    v-for="(finding, index) in activeFindings"
                    :key="index"
                    :label="`${finding.type}${finding.subType ? ' - ' + finding.subType : ''}`"
                    :value="index"
                />
            </v-radio-group>
        </v-card>

        <v-card
            v-if="activeFinding"
            class="mx-auto rounded-lg mt-6"
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
                        :alt="`Foto ${index + 1} van ${(activeFinding.subType ? activeFinding.subType.toLowerCase() : (activeFinding.type || '').toLowerCase())} bevinding`"
                        :title="`Foto ${index + 1} van ${(activeFinding.subType ? activeFinding.subType.toLowerCase() : (activeFinding.type || '').toLowerCase())} bevinding`"
                        style="width: 100%; height: 240px; object-fit: cover;"
                    />
                </v-carousel-item>
            </v-carousel>
            
            <div class="pa-4">
                <v-card-title>
                    {{ activeFinding.type }}
                </v-card-title>
                <v-card-subtitle>
                    <v-icon icon="mdi-map-marker" />
                    {{ activeInspection.location }} -
                    <v-icon icon="mdi-calendar-blank" />
                    {{ new Date(activeInspection.date).toLocaleDateString('nl-NL') }}
                </v-card-subtitle>
                <v-card-text class="text-body-1">
                    <p v-show="activeFinding.newDamage != undefined">
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
                    <p v-show="activeFinding.requiresImmediateAction != undefined">
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
                    <p v-show="activeFinding.approved != undefined">
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
            </div>
        </v-card>
    </section>
</template>

<script>
import { useInspectionsStore } from '@/stores/inspectionsStore.js';

export default {
    name: 'InspectionsDonePage',
    data() {
        return {
            selectedInspectionIndex: 0,
            selectedFindingIndex: 0,
            carouselIndex: 0,
            store: useInspectionsStore(),
        }
    },
    computed: {
        activeInspection() {
            if (!this.store.inspections.length) return null;
            return this.store.inspections[this.selectedInspectionIndex];
        },
        activeFinding() {
            if (!this.activeInspection?.findings) return null;
            return this.activeInspection.findings[this.selectedFindingIndex];
        },
        sortedInspections() {
            return [...this.store.inspections].sort((a, b) => new Date(b.date) - new Date(a.date));
        },
        activeFindings() {
            return this.activeInspection?.findings || [];
        }
    },
    watch: {
        selectedInspectionIndex() {
            this.carouselIndex = 0;
            this.selectedFindingIndex = 0;
        },
        selectedFindingIndex() {
            this.carouselIndex = 0;
        }
    },
    methods: {
        getPhotoUrl(filename) {
            if (!filename) return '';
            return `/images/${filename}`;
        },
        getPdfUrl(filename) {
            if (!filename) return '';
            return new URL(`../../assets/documents/${filename}`, import.meta.url).href;
        },
    }
}
</script>
