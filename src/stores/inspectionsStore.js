import { defineStore } from 'pinia'
import InspectionService from '@/services/InspectionService'

export const useInspectionsStore = defineStore('inspections', {
    state: () => ({
        inspections: []
    }),
    actions: {
        setInspections(data) {
            this.inspections = data
        },
        async loadInspections(useOnline = true) {
            try {
                const response = useOnline ? await InspectionService.load(true) : await InspectionService.load(false)
                
                // response.data bij axios, anders response zelf
                const data = response.data || response
                this.setInspections(data)
            } catch (error) {
                console.error('Fout bij laden inspecties:', error)
            }
        }
    }
})
