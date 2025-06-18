import { defineStore } from 'pinia'
import InspectionService from '@/services/InspectionService'

export const useInspectionsStore = defineStore('inspections', {
    state: () => ({
        inspections: [],
    }),
    actions: {
        async loadInspections(useOnline = true) {
            try {
                const inspections = await InspectionService.load(useOnline)
                this.inspections = inspections
            } catch (error) {
                console.error('Fout bij laden inspecties:', error)
            }
        }
    }
})
