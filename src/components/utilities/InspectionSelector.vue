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
        // Lijst van inspecties (doorgegeven vanuit het InspectionDisplay-component).
        inspectionsList: {
            type: Array,
            required: true,
        },
        // Geselecteerde inspectie index (doorgegeven vanuit het InspectionDisplay-component).
        selectedInspectionIndex: {
            type: Number,
            default: null,
        },
        // Geselecteerde waarneming uit inspectie (doorgegeven vanuit het InspectionDisplay-component).
        selectedFindingIndex: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        modelValue: {
            // Ontvang index van geselecteerde inspectie.
            get() {
                return this.selectedInspectionIndex;
            },
            // Wijzig het InspectionDisplay-component met de nieuwe index.
            set(newVal) {
                this.$emit('update:selectedInspectionIndex', newVal);
            },
        },
        // Sorteer versie van inspectionsList (op datum aflopend).
        sortedInspections() {
            return [...this.inspectionsList].sort((a, b) => new Date(b.date) - new Date(a.date));
        },
        activeFindings() {
            const selected = this.inspectionsList[this.selectedInspectionIndex];
            return selected ? selected.findings || [] : [];
        },
        selectedFindingIndexModel: {
            get() {
                return this.selectedFindingIndex;
            },
            set(value) {
                this.$emit('update:selectedFindingIndex', value);
            }
        },
    },
    mounted() {
        // Stel de focus standaard op de eerste inspectie, als er geen andere inspectie is geselecteerd.
        if (this.selectedInspectionIndex == null && this.inspectionsList.length > 0) {
            this.$emit('update:selectedInspectionIndex', 0);
        }
    },
};
</script>
