<template>
    <div>
        <h3>Selecteer een inspectie:</h3>
        <v-radio-group
            v-model="modelValue"
            color="secondary"
            column
        >
            <!-- Generate radio buttons from inspectionsList -->
            <v-radio
                v-for="(inspection, index) in sortedInspections"
                :key="index"
                :label="`${inspection.type} ${inspection.location} (${inspection.getDate()})`"
                :value="inspectionsList.indexOf(inspection)"
            />
        </v-radio-group>
    </div>
</template>

<script>
import Inspection from '@/Inspection.js';

export default {
    props: {
        // Array of inspections (passed from the InspectionDisplay-component).
        inspectionsList: {
            type: Array,
            required: true,
        },
        // Selected inspection index (passed from the InspectionDisplay-component).
        selectedIndex: {
            type: Number,
            default: null,
        },
    },
    computed: {
        modelValue: {
            // Get (index of) selected inspection.
            get() {
                return this.selectedIndex;
            },
            // Update InspectionDisplay-component with new index
            set(newVal) {
                this.$emit('update:selectedIndex', newVal);
            },
        },
        // Sorted version of inspectionsList (by date descending)
        sortedInspections() {
            return [...this.inspectionsList].sort((a, b) => new Date(b.date) - new Date(a.date));
        },
    },
    mounted() {
        // Default to first inspection if none is selected
        if (this.selectedIndex == null && this.inspectionsList.length > 0) {
            this.$emit('update:selectedIndex', 0);
        }
    },
};
</script>
