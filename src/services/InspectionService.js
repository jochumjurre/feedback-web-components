import axios from 'axios';
import Inspection from '@/Inspection.js';
import Finding from '@/Finding.js';

class InspectionService {
    async load(useOnline = true) {
        let rawData;

        // Laad lijst in via Axios of gebruik lokaal bestand (voor testen)
        if (useOnline) {
            const response = await axios.get('https://raw.githubusercontent.com/jochumjurre/feedback-web-components/refs/heads/main/db.json');
            rawData = response.data;
        } else {
            const data = await import('../../db.json');
            rawData = data.default;
        }

        return this.parseInspections(rawData);
    }

    parseInspections(data) {
        return data.map(inspection => {
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
            finding.performedBy
            ));

            return new Inspection(
            inspection.location,
            inspection.date,
            findings
            );
        });
    }
}

export default new InspectionService();
