<template>
    <div>
        <InspectionSelector
        :inspectionsList="inspectionsList"
        v-model:selectedInspection="selectedInspection"
        />

        <v-card v-if="this.activeInspection" class="mx-auto">
            <v-carousel
            v-if="activeInspection.photos && activeInspection.photos.length"
            v-model="carouselIndex"
            height="240px"
            :show-arrows="activeInspection.photos.length > 1"
            :hide-delimiters="activeInspection.photos.length <= 1"
            >
            <v-carousel-item
                v-for="(photo, index) in activeInspection.photos"
                :key="index"
                :src="getPhotoUrl(photo)"
                cover
            />
            </v-carousel>


            <v-card-title>
                {{ this.activeInspection.type }}
            </v-card-title>

            <v-card-subtitle>
                <v-icon icon="mdi-map-marker"></v-icon> {{ this.activeInspection.location }} - <v-icon icon="mdi-calendar-blank"></v-icon> {{ this.activeInspection.getDate() }}
            </v-card-subtitle>

            <v-card-text class="text-body-1">
                <p v-show="this.activeInspection.newDamage !== undefined" class="">
                    <span class="font-weight-medium">Nieuwe schade: </span>
                    <v-chip :color="activeInspection.newDamage ? 'success' : 'error'" dark>
                        {{ this.activeInspection.newDamage ? 'Ja' : 'Nee' }}
                    </v-chip>
                </p>
                <p v-show="this.activeInspection.subType"><span class="font-weight-medium">Sub-type: </span>{{ this.activeInspection.subType }}</p>
                <p v-show="this.activeInspection.description"><span class="font-weight-medium">Omschrijving: </span>{{ this.activeInspection.description }}</p>
                <p v-show="this.activeInspection.reportedMalfunctions"><span class="font-weight-medium">Gemelde storingen: </span>{{ this.activeInspection.reportedMalfunctions }}</p>
                <p v-show="this.activeInspection.requiresImmediateAction !== undefined">
                    <span class="font-weight-medium">Acute actie vereist: </span>
                    <v-chip :color="activeInspection.requiresImmediateAction ? 'success' : 'error'" dark>
                        {{ this.activeInspection.requiresImmediateAction ? 'Ja' : 'Nee' }}
                    </v-chip>
                </p>
                <p v-show="this.activeInspection.costEstimate"><span class="font-weight-medium">Kostenindicatie: </span>{{ this.activeInspection.costEstimate }}</p>
                <p v-show="this.activeInspection.performedBy"><span class="font-weight-medium">Uitgevoerd door: </span>{{ this.activeInspection.performedBy }}</p>
                <p v-show="this.activeInspection.remarks"><span class="font-weight-medium">Opmerkingen: </span>{{ this.activeInspection.remarks }}</p>
                <p v-show="this.activeInspection.approved !== undefined">
                    <span class="font-weight-medium">Goedgekeurd: </span>
                    <v-chip :color="activeInspection.approved ? 'success' : 'error'" dark>
                        {{ activeInspection.approved ? 'Ja' : 'Nee' }}
                    </v-chip>
                </p>
                <p v-show="this.activeInspection.testProcedurePdf"><span class="font-weight-medium">Download testprocedure (.PDF): </span>{{ this.activeInspection.testProcedurePdf }}</p>
                <p v-show="this.activeInspection.existingSituationPdf"><span class="font-weight-medium">Testprocedure (.PDF): </span>{{ this.activeInspection.existingSituationPdf }}</p>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import InspectionSelector from  '@/components/utilities/InspectionSelector.vue';
import InspectionService from '@/services/InspectionService.js';
import Inspection from '@/Inspection.js';

export default {
    data() {
        return {
            inspectionsList: [],
            selectedInspection: 0,
            carouselIndex: 0,
        }
    },
    components: {
        InspectionSelector,
        InspectionService,
        Inspection,
    },
    mounted() {
        // Create Inspection class instances for each inspection and put them in an array
        InspectionService.load().then((response)=>{
            for (let inspection of response.data) {
                this.inspectionsList.push(new Inspection(
                    inspection.location,
                    inspection.type,
                    inspection.subType,
                    inspection.newDamage,
                    inspection.date,
                    inspection.requiresImmediateAction,
                    inspection.description,
                    inspection.photos,
                    inspection.costEstimate,
                    inspection.reportedMalfunctions,
                    inspection.testProcedurePdf,
                    inspection.approved,
                    inspection.remarks,
                    inspection.existingSituationPdf,
                    inspection.performedBy
                ));
            };
        });
    },
    methods: {
        // Return local URL of picture
        getPhotoUrl(filename) {
            return `/images/${filename}`;
        }
    },
    computed: {
        activeInspection() {
            // Return data from selected inspection.
            if (this.inspectionsList.length === 0) {
                return null;
            }

            return this.inspectionsList[this.selectedInspection];
        }
    },
    watch: {
        selectedInspection(newVal) {
            this.carouselIndex = 0;
        }
    }
}
</script>