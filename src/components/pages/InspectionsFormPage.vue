<template>
    <section>
        <ContentHeader
            :title="'Inspectieformulier'"
            :description="'Vul hier de inspectiegegevens in van het pand op locatie.'"
        />
            <p><strong>Locatie:</strong> {{ this.$route.query.location }}</p>
            <p><strong>Datum:</strong> {{ this.$route.query.date }}</p>

            <v-expansion-panels>
                <!-- 1. Schade opnemen
                    subType
                    newDamage
                    requiresImmediateAction
                    description
                    photos
                -->
                <v-expansion-panel class="mt-4">
                    <v-expansion-panel-title>Schade opnemen</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-card
                            v-for="(finding, index) in report.damageFindings"
                                :key="index"
                                class="mb-4 pa-4"
                                color="grey-lighten-4"
                            >
                            <div class="d-flex justify-space-between align-center mb-2">
                                <h4 class="text-subtitle-1">Schade #{{ index + 1 }}</h4>
                                <v-btn
                                    @click="removeDamageFinding(index)"
                                    icon
                                    color="red"
                                    size="small"
                                >
                                    <v-icon icon="mdi-close" />
                                </v-btn>
                            </div>
                            <v-radio-group
                                v-model="finding.newDamage"
                                label="Nieuwe schade?"
                            >
                                <v-radio
                                    label="Ja"
                                    :value="true"
                                />
                                <v-radio
                                    label="Nee"
                                    :value="false"
                                />
                            </v-radio-group>
                            <v-select
                                v-model="finding.subType"
                                label="Soort schade"
                                :items="this.damageTypes"
                            />
                            <v-radio-group
                                v-model="finding.requiresImmediateAction"
                                label="Acute actie vereist?"
                            >
                                <v-radio
                                    label="Ja"
                                    :value="true"
                                />
                                <v-radio
                                    label="Nee"
                                    :value="false"
                                />
                            </v-radio-group>
                            <v-textarea
                                v-model="finding.description"
                                label="Omschrijving"
                            />
                            <v-btn
                                @click="uploadPhotos"
                                class="my-4"
                                color="secondary"
                            >
                                Voeg foto's toe
                            </v-btn>
                        </v-card>
                        <v-btn
                            @click="addDamageFinding"
                            color="primary"
                            class="mb-4"
                        >
                            + Bevinding toevoegen
                        </v-btn>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                
                <!-- 2. Achterstallig onderhoud
                    Subtype
                    requiresImmediateAction
                    costEstimate
                    photos
                -->
                <v-expansion-panel>
                    <v-expansion-panel-title>Achterstallig onderhoud</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-card
                            v-for="(finding, index) in report.maintenanceFindings"
                                :key="index"
                                class="mb-4 pa-4"
                                color="grey-lighten-4"
                            >
                            <div class="d-flex justify-space-between align-center mb-2">
                                <h4 class="text-subtitle-1">Onderhoud #{{ index + 1 }}</h4>
                                <v-btn
                                    @click="removeMaintenanceFinding(index)"
                                    icon
                                    color="red"
                                    size="small"
                                >
                                    <v-icon icon="mdi-close" />
                                </v-btn>
                            </div>
                            <v-select
                                v-model="finding.subType"
                                label="Soort onderhoud"
                                :items="this.overdueMaintenanceTypes"
                            />
                            <v-radio-group
                                v-model="finding.requiresImmediateAction"
                                label="Acute actie vereist?"
                            >
                                <v-radio
                                    label="Ja"
                                    :value="true"
                                />
                                <v-radio
                                    label="Nee"
                                    :value="false"
                                />
                            </v-radio-group>
                            <v-select
                                v-model="finding.costEstimate"
                                label="Geschatte kosten"
                                :items="this.expectedCosts"
                            />
                            <v-btn
                                @click="uploadPhotos"
                                class="my-4"
                                color="secondary"
                            >
                                Voeg foto's toe
                            </v-btn>
                        </v-card>
                        <v-btn
                            @click="addMaintenanceFinding"
                            color="primary"
                            class="mb-4"
                        >
                            + Bevinding toevoegen
                        </v-btn>
                    </v-expansion-panel-text>
                </v-expansion-panel>

                <!-- 3. Inspectie technische installatie
                    subType
                    reportedMalfunctions
                    testProcedurePdf
                    approved
                    remarks
                    photos
                -->
                <v-expansion-panel>
                    <v-expansion-panel-title>Inspectie technische installatie</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-card
                            v-for="(finding, index) in report.installationFindings"
                                :key="index"
                                class="mb-4 pa-4"
                                color="grey-lighten-4"
                            >
                            <div class="d-flex justify-space-between align-center mb-2">
                                <h4 class="text-subtitle-1">Installatie #{{ index + 1 }}</h4>
                                <v-btn
                                    @click="removeInstallationFinding(index)"
                                    icon
                                    color="red"
                                    size="small"
                                >
                                    <v-icon icon="mdi-close" />
                                </v-btn>
                            </div>
                            <v-select
                                v-model="finding.subType"
                                label="Soort installatie"
                                :items="this.installationType"
                            />
                            <v-textarea
                                v-model="finding.description"
                                label="Gemelde storingen"
                            />
                            <v-radio-group
                                v-model="finding.approved"
                                label="Goedgekeurd?"
                            >
                                <v-radio
                                    label="Ja"
                                    :value="true"
                                />
                                <v-radio
                                    label="Nee"
                                    :value="false"
                                />
                            </v-radio-group>
                            <label class="block">Testprocedure:</label>
                            <v-file-input
                                @change="uploadPhotos"
                                accept=".pdf"
                                label="Voeg .pdf toe"
                                class="mt-2"
                            />
                            <v-textarea
                                v-model="finding.remarks"
                                label="Opmerkingen"
                            />
                            <v-btn
                                @click="uploadPhotos"
                                class="my-4"
                                color="secondary"
                            >
                                Voeg foto's toe
                            </v-btn>
                        </v-card>
                        <v-btn
                            @click="addInstallationFinding"
                            color="primary"
                            class="mb-4"
                        >
                            + Bevinding toevoegen
                        </v-btn>
                    </v-expansion-panel-text>
                </v-expansion-panel>

                <!-- 4. Inventarisering modificatie
                    existingSituationPdf
                    performedBy
                    description
                    requiredAction
                    remarks
                    photos
                -->
                <v-expansion-panel>
                    <v-expansion-panel-title>Inventarisering modificatie</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-card
                            v-for="(finding, index) in report.modificationFindings"
                                :key="index"
                                class="mb-4 pa-4"
                                color="grey-lighten-4"
                            >
                            <div class="d-flex justify-space-between align-center mb-2">
                                <h4 class="text-subtitle-1">Inventarisering #{{ index + 1 }}</h4>
                                <v-btn
                                    @click="removeModificationFinding(index)"
                                    icon
                                    color="red"
                                    size="small"
                                >
                                    <v-icon icon="mdi-close" />
                                </v-btn>
                            </div>
                            <label class="block">Bestaande situatie (.pdf):</label>
                            <v-file-input
                                @change="uploadPhotos"
                                accept=".pdf"
                                label="Voeg .pdf toe"
                                class="mt-2"
                            />
                            <v-select
                                v-model="finding.performedBy"
                                label="Uitgevoerd door"
                                :items="this.performedBy"
                            />
                            <v-textarea
                                v-model="finding.description"
                                label="Beschrijving modificatie"
                            />
                            <v-select
                                v-model="finding.requiredAction"
                                label="Te ondernemen actie"
                                :items="this.actionType"
                            />
                            <v-textarea
                                v-model="finding.remarks"
                                label="Opmerkingen"
                            />
                            <v-btn
                                @click="uploadPhotos"
                                class="my-4"
                                color="secondary"
                            >
                                Voeg foto's toe
                            </v-btn>
                        </v-card>
                        <v-btn
                            @click="addModificationFinding"
                            color="primary"
                            class="mb-4"
                        >
                            + Bevinding toevoegen
                        </v-btn>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

        <v-btn class="mt-4" color="success" @click="submit">Opslaan en versturen</v-btn>
    </section>
</template>

<script>
import Finding from '@/Finding.js'

export default {
    name: 'InspectionsFormPage',
    data() {
        return {
            // Schade
            damageTypes: ['Moedwillig', 'Slijtage', 'Geweld', 'Normaal gebruik', 'Calamiteit', 'Anders'],

            // Achterstallig onderhoud
            overdueMaintenanceTypes: ['Schilderwerk', 'Houtrot', 'Elektra', 'Leidingwerk', 'Beglazing'],
            expectedCosts: ['€ 0 - € 500', '€ 500 - € 1.500', '€ 1.500+'],

            // Inspectie technische installatie
            installationType: ['Koeling', 'Verwarming', 'Luchtverversing', 'Elektra', 'Beveiliging'],
            
            // Inventarisering modificatie
            performedBy: ['Huurder', 'Aannemer', 'Onbekend'],
            actionType: ['Accepteren', 'Laten keuren', 'Laten verwijderen', 'Laten aanpassen en keuren'],

            report: {
                damageFindings: [],
                maintenanceFindings: [],
                installationFindings: [],
                modificationFindings: [],
            }
        }
    },
    watch: {
        report: {
            handler(newVal) {
            console.log('Report gewijzigd:', newVal);
            },
            deep: true
        }
    },
    methods: {
        // 1. Schade
        addDamageFinding() {
            const newFinding = new Finding();
            newFinding.type = 'Schade';
            newFinding.subType = '';
            newFinding.newDamage = null;
            newFinding.requiresImmediateAction = null;
            newFinding.description = '';
            this.report.damageFindings.push(newFinding);
        },
        removeDamageFinding(index) {
            this.report.damageFindings.splice(index, 1);
        },

        // 2. Onderhoud
        addMaintenanceFinding() {
            const newFinding = new Finding();
            newFinding.type = 'Achterstallig onderhoud';
            newFinding.subType = '';
            newFinding.requiresImmediateAction = null;
            newFinding.costEstimate = '';
            this.report.maintenanceFindings.push(newFinding);
        },
        removeMaintenanceFinding(index) {
            this.report.maintenanceFindings.splice(index, 1);
        },

        // 3. Installatie
        addInstallationFinding() {
            const newFinding = new Finding();
            newFinding.type = 'Inspectie technische installatie';
            newFinding.subType = '';
            newFinding.reportedMalfunctions = '';
            newFinding.testProcedurePdf = '';
            newFinding.approved = null;
            newFinding.remarks = '';
            this.report.installationFindings.push(newFinding);
        },
        removeInstallationFinding(index) {
            this.report.installationFindings.splice(index, 1);
        },

        // 4. Modificatie
        addModificationFinding() {
            const newFinding = new Finding();
            newFinding.type = 'Inventarisering modificatie';
            newFinding.existingSituationPdf = '';
            newFinding.performedBy = '';
            newFinding.description = '';
            newFinding.requiredAction = null;
            newFinding.remarks = '';
            this.report.modificationFindings.push(newFinding);
        },
        removeModificationFinding(index) {
            this.report.modificationFindings.splice(index, 1);
        },

        uploadPhotos() {
            alert("Foto toevoegen (niet geïmplementeerd)");
        },

        submit() {
            alert("Inspectie opgeslagen (nog niet geïmplementeerd)");
        }
    }
};
</script>
