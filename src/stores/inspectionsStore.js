import { defineStore } from 'pinia'
import InspectionService from '@/services/InspectionService'
import Inspection from '@/Inspection.js'
import Finding from '@/Finding'

export const useInspectionsStore = defineStore('inspections', {
    state: () => ({
        inspections: [],
    }),
    actions: {
        async loadInspections(useOnline = true) {
            try {
                const response = useOnline ? await InspectionService.load(true) : await InspectionService.load(false)
                const data = response.data || response
                const inspections = data.map(inspection => {
                    const findings = inspection.findings.map(finding => new Finding(
                        finding.type,
                        finding.subType,
                        finding.newDamage,
                        finding.requiresImmediateAction,
                        finding.description,
                        finding.photos,
                        finding.costEstimate,
                        finding.reportedMalfunctions,
                        finding.testProcedurePdf,
                        finding.approved,
                        finding.remarks,
                        finding.existingSituationPdf,
                        finding.performedBy,
                    ))
                    return new Inspection(
                        inspection.location,
                        inspection.date,
                        findings,
                    )
                })
                this.inspections = inspections
            } catch (error) {
                console.error('Fout bij laden inspecties:', error);
            }
        }
    }
})
