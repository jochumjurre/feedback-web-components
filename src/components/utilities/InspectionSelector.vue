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
        // Array of inspections (passed from the InspectionDisplay-component).
        inspectionsList: {
            type: Array,
            required: true,
        },
        // Selected inspection index (passed from the InspectionDisplay-component).
        selectedInspectionIndex: {
            type: Number,
            default: null,
        },
        // Selected finding index (passed from the InspectionDisplay-component).
        selectedFindingIndex: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        modelValue: {
            // Get (index of) selected inspection.
            get() {
                return this.selectedInspectionIndex;
            },
            // Update InspectionDisplay-component with new index
            set(newVal) {
                this.$emit('update:selectedInspectionIndex', newVal);
            },
        },
        // Sorted version of inspectionsList (by date descending)
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
        // Default to first inspection if none is selected
        if (this.selectedInspectionIndex == null && this.inspectionsList.length > 0) {
            this.$emit('update:selectedInspectionIndex', 0);
        }
    },
};
</script>
