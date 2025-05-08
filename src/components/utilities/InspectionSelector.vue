<template>
    <div>
        <h3>Selecteer een inspectie:</h3>

        <v-radio-group
            v-model="localSelectedInspection"
            color="secondary"
            column
        >
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
        inspectionsList: {
            type: Array,
            required: true,
        },
        selectedInspection: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            localSelectedInspection: this.selectedInspection,
        };
    },
    watch: {
        selectedInspection(newVal) {
            this.localSelectedInspection = newVal;
        },
        localSelectedInspection(newVal) {
            this.$emit('update:selectedInspection', newVal);
        },
    },
    mounted() {
        if (
            this.inspectionsList.length > 0 &&
            (this.selectedInspection === null || this.selectedInspection === undefined)
        ) {
            this.localSelectedInspection = 0;
            this.$emit('update:selectedInspection', 0);
        }
    },
};
</script>
