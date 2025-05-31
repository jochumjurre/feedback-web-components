export default class Finding {
    constructor(
        type,
        subType,
        newDamage,
        requiresImmediateAction,
        description,
        photos,
        costEstimate,
        reportedMalfunctions,
        testProcedurePdf,
        approved,
        remarks,
        existingSituationPdf,
        performedBy,
    ) {
        this.type = type;
        this.subType = subType;
        this.newDamage = newDamage;
        this.requiresImmediateAction = requiresImmediateAction;
        this.description = description;
        this.photos = photos;
        this.costEstimate = costEstimate;
        this.reportedMalfunctions = reportedMalfunctions;
        this.testProcedurePdf = testProcedurePdf;
        this.approved = approved;
        this.remarks = remarks;
        this.existingSituationPdf = existingSituationPdf;
        this.performedBy = performedBy;
    }
}
