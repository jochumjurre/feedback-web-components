<template>
    <div>
        <InspectionSelector
            :inspectionsList="inspectionsList"
            v-model:selectedInspectionIndex="selectedInspectionIndex"
            v-model:selectedFindingIndex="selectedFindingIndex"
        />
        <v-card v-if="activeFinding" class="mx-auto">
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
                    :src="getPhotoUrl(photo)"
                    cover
                />
            </v-carousel>
            <v-card-title>
                {{ activeFinding.type }}
            </v-card-title>
            <v-card-subtitle>
                <v-icon icon="mdi-map-marker"></v-icon> {{ activeInspection.location }} - <v-icon icon="mdi-calendar-blank"></v-icon> {{ activeInspection.getDate() }}
            </v-card-subtitle>
            <v-card-text class="text-body-1">
                <p v-show="activeFinding.newDamage !== undefined" class="">
                    <span class="font-weight-medium">Nieuwe schade: </span>
                    <v-chip :color="activeFinding.newDamage ? 'success' : 'error'" dark>
                        {{ activeFinding.newDamage ? 'Ja' : 'Nee' }}
                    </v-chip>
                </p>
                <p v-show="activeFinding.subType"><span class="font-weight-medium">Sub-type: </span>{{ activeFinding.subType }}</p>
                <p v-show="activeFinding.description"><span class="font-weight-medium">Omschrijving: </span>{{ activeFinding.description }}</p>
                <p v-show="activeFinding.reportedMalfunctions"><span class="font-weight-medium">Gemelde storingen: </span>{{ activeFinding.reportedMalfunctions }}</p>
                <p v-show="activeFinding.requiresImmediateAction !== undefined">
                    <span class="font-weight-medium">Acute actie vereist: </span>
                    <v-chip :color="activeFinding.requiresImmediateAction ? 'success' : 'error'" dark>
                        {{ activeFinding.requiresImmediateAction ? 'Ja' : 'Nee' }}
                    </v-chip>
                </p>
                <p v-show="activeFinding.costEstimate"><span class="font-weight-medium">Kostenindicatie: </span>{{ activeFinding.costEstimate }}</p>
                <p v-show="activeFinding.performedBy"><span class="font-weight-medium">Uitgevoerd door: </span>{{ activeFinding.performedBy }}</p>
                <p v-show="activeFinding.remarks"><span class="font-weight-medium">Opmerkingen: </span>{{ activeFinding.remarks }}</p>
                <p v-show="activeFinding.approved !== undefined">
                    <span class="font-weight-medium">Goedgekeurd: </span>
                    <v-chip :color="activeFinding.approved ? 'success' : 'error'" dark>
                        {{ activeFinding.approved ? 'Ja' : 'Nee' }}
                    </v-chip>
                </p>
                <p v-show="activeFinding.testProcedurePdf"><span class="font-weight-medium">Download testprocedure (.PDF): </span><a :href="getPdfUrl(activeFinding.testProcedurePdf)">{{ activeFinding.testProcedurePdf }}</a></p>
                <p v-show="activeFinding.existingSituationPdf"><span class="font-weight-medium">Testprocedure (.PDF): </span><a :href="getPdfUrl(activeFinding.existingSituationPdf)">{{ activeFinding.existingSituationPdf }}</a></p>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import InspectionSelector from  '@/components/utilities/InspectionSelector.vue';
import InspectionService from '@/services/InspectionService.js';
import Inspection from '@/Inspection.js';
import Finding from '@/Finding';

export default {
    components: {
        InspectionSelector,
        InspectionService,
        Inspection,
    },
    data() {
        return {
            inspectionsList: [],
            selectedInspectionIndex: 0,
            selectedFindingIndex: 0,
            carouselIndex: 0,
        }
    },
    computed: {
        activeInspection() {
            if (this.inspectionsList.length === 0) return null;
            return this.inspectionsList[this.selectedInspectionIndex];
        },
        activeFinding() {
            if (!this.activeInspection || !this.activeInspection.findings) return null;
            return this.activeInspection.findings[this.selectedFindingIndex] || null;
        }
    },
    watch: {
        // Always start image carousel on first image.
        selectedInspectionIndex(newVal) {
            this.carouselIndex = 0;
            this.selectedFindingIndex = 0;
        }
    },
    mounted() {
        InspectionService.load(false).then((response) => {
            const inspections = response.default;

            for (let inspection of inspections) {
                const findings = inspection.findings.map(finding => new Finding(
                    finding.type,
                    finding.subType,
                    finding.newDamage,
                    finding.requiresImmediateAction,
                    finding.description,
                    finding.photos,
                    finding.costEstimate,
                    finding.reportedMalfunctions,
                    finding.testProcedurePdf,
                    finding.approved,
                    finding.remarks,
                    finding.existingSituationPdf,
                    finding.performedBy,
                ));

                this.inspectionsList.push(new Inspection(
                    inspection.location,
                    inspection.date,
                    findings
                ));
            }
        }).catch((error) => {
            console.error('Error loading inspections:', error);
        });
    },
    methods: {
        // Return local URL of picture
        getPhotoUrl(filename) {
            return `/images/${filename}`;
        },
        // Return local url of PDF document
        getPdfUrl(filename) {
            // Check if there's a valid filename
            if (!filename) return '';

            return new URL(`../../assets/documents/${filename}`, import.meta.url).href;
        },
    },
}
</script>
