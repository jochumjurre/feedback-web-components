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
                v-for="(inspection, index) in inspectionsList"
                :key="index"
                :label="`${inspection.type} (${inspection.location})`"
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
    },
    mounted() {
        // Default to first inspection if none is selected
        if (this.selectedIndex == null && this.inspectionsList.length > 0) {
            this.$emit('update:selectedIndex', 0);
        }
    },
};
</script>
