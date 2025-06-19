import { defineStore } from 'pinia'
import InspectionService from '@/services/InspectionService'

export const useInspectionsStore = defineStore('inspections', {
    state: () => ({
        inspections: [],
    }),
    actions: {
        // Laad inspecties vanuit service
        async loadInspections(useOnline = true) {
            try {
                const inspections = await InspectionService.load(useOnline)
                this.inspections = inspections
            } catch (error) {
                console.error('Fout bij laden inspecties:', error)
            }
        },
        // Voeg nieuwe inspectie toe aan store
        addInspection(inspection) {
            this.inspections.push(inspection)
        }
    }
})
