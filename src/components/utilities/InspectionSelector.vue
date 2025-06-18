<template>
    <div>
        <h3>1. Selecteer een inspectie</h3>
        <v-radio-group
            v-model="modelValue"
            color="secondary"
            column
        >
            <v-radio
                v-for="(inspection, sortedIndex) in sortedInspections"
                :key="sortedIndex"
                :label="`${inspection.location} (${inspection.getDate()})`"
                :value="inspectionsList.findIndex(i => i === inspection)"
            />
        </v-radio-group>

        <h3>2. Selecteer een bevinding:</h3>
        <v-radio-group
            v-if="activeFindings.length"
            v-model="selectedFindingIndexModel"
            color="secondary"
            column
        >
            <v-radio
                v-for="(finding, index) in activeFindings"
                :key="index"
                :label="`${finding.type} - ${finding.subType || 'Geen subtype'}`"
                :value="index"
            />
        </v-radio-group>
    </div>
</template>

<script>
export default {
    props: {
        // Ontvangen lijst van INSPECTIES (uit het 'InspectionDisplay.vue'-component)
        inspectionsList: {
            type: Array,
            required: true,
        },
        // Ontvangen index van geselecteerde INSPECTIE (uit het 'InspectionDisplay.vue'-component)
        selectedInspectionIndex: {
            type: Number,
            default: null,
        },
        // Ontvangen index van geselecteerde BEVINDING (uit het 'InspectionDisplay.vue'-component)
        selectedFindingIndex: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        modelValue: {
            // Ophalen van geselecteerde INSPECTIE index
            get() {
                return this.selectedInspectionIndex;
            },
            // Wijzigen van geselecteerde INSPECTIE index
            set(value) {
                this.$emit('update:selectedInspectionIndex', value);
            },
        },
        // Sorteert INSPECTIES aflopend op datum
        sortedInspections() {
            return [...this.inspectionsList].sort((a, b) => new Date(b.date) - new Date(a.date));
        },
        // BEVINDINGEN van de geselecteerde INSPECTIE ophalen
        activeFindings() {
            const inspection = this.inspectionsList[this.selectedInspectionIndex];
            return inspection?.findings || [];
        },
        selectedFindingIndexModel: {
            // Ophalen van geselecteerde BEVINDING index
            get() {
                return this.selectedFindingIndex;
            },
            // Wijzigen van geselecteerde BEVINDING index
            set(value) {
                this.$emit('update:selectedFindingIndex', value);
            }
        },
    },
    mounted() {
        // Standaard eerste INSPECTIE selecteren als niets gekozen is
        if (this.selectedInspectionIndex == null && this.inspectionsList.length) {
            this.$emit('update:selectedInspectionIndex', 0);
        }
    },
};
</script>
