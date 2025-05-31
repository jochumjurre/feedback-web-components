export default class Inspection {
    constructor(
        location,
        date,
        findings,
    ) {
        this.location = location;
        this.date = date;
        this.findings = findings;
    }

    getDate() {
        if(this.date) {
            return (new Date(this.date)).toLocaleDateString();
        }
        return "Datum onbekend";
    }
}
