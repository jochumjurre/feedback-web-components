<template>
    <section>
        <ContentHeader
            :title="'Inspectieformulier'"
            :description="'Vul hier de inspectiegegevens in van het pand op locatie.'"
        />
            <p><strong>Locatie:</strong> {{ location }}</p>
            <p><strong>Datum:</strong> {{ date }}</p>

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
                        <v-btn color="primary" @click="addDamageFinding" class="mb-4">+ Bevinding toevoegen</v-btn>

                        <v-card
                            v-for="(finding, index) in report.damageFindings"
                                :key="index"
                                class="mb-4 pa-4"
                                elevation="2"
                                color="grey-lighten-4"
                            >
                            <div class="d-flex justify-space-between align-center mb-2">
                                <h4 class="text-subtitle-1">Schade #{{ index + 1 }}</h4>
                                <v-btn
                                    icon
                                    color="red"
                                    size="small"
                                    @click="removeDamageFinding(index)"
                                >
                                    <v-icon icon="mdi-close" />
                                </v-btn>
                            </div>
                            <v-select
                                v-model="finding.type"
                                label="Soort schade"
                                :items="this.damageTypes"
                            />
                            <v-radio-group
                                v-model="finding.urgent"
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
                            <v-textarea
                                v-model="finding.description"
                                label="Omschrijving"
                            />
                            <v-btn class="my-4" color="secondary" @click="uploadPhotos">Voeg foto's toe</v-btn>
                        </v-card>
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
                        <v-btn color="primary" @click="addDamageFinding" class="mb-4">+ Bevinding toevoegen</v-btn>

                        <v-card
                            v-for="(finding, index) in report.damageFindings"
                                :key="index"
                                class="mb-4 pa-4"
                                elevation="2"
                                color="grey-lighten-4"
                            >
                            <div class="d-flex justify-space-between align-center mb-2">
                                <h4 class="text-subtitle-1">Onderhoud #{{ index + 1 }}</h4>
                                <v-btn
                                    icon
                                    color="red"
                                    size="small"
                                    @click="removeDamageFinding(index)"
                                >
                                    <v-icon icon="mdi-close" />
                                </v-btn>
                            </div>
                            <v-select
                                v-model="finding.type"
                                label="Soort achterstallig onderhoud"
                                :items="this.overdueMaintenanceTypes"
                            />
                            <v-radio-group
                                v-model="finding.urgent"
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
                                v-model="finding.type"
                                label="Geschatte kosten"
                                :items="this.expectedCosts"
                            />
                            <v-btn class="my-4" color="secondary" @click="uploadPhotos">Voeg foto's toe</v-btn>
                        </v-card>
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
                        <v-btn color="primary" @click="addDamageFinding" class="mb-4">+ Bevinding toevoegen</v-btn>

                        <v-card
                            v-for="(finding, index) in report.damageFindings"
                                :key="index"
                                class="mb-4 pa-4"
                                elevation="2"
                                color="grey-lighten-4"
                            >
                            <div class="d-flex justify-space-between align-center mb-2">
                                <h4 class="text-subtitle-1">Installatie #{{ index + 1 }}</h4>
                                <v-btn
                                    icon
                                    color="red"
                                    size="small"
                                    @click="removeDamageFinding(index)"
                                >
                                    <v-icon icon="mdi-close" />
                                </v-btn>
                            </div>
                            <v-select
                                v-model="finding.type"
                                label="Soort installatie"
                                :items="this.installationType"
                            />
                            <v-textarea
                                v-model="finding.description"
                                label="Gemelde storingen"
                            />
                            <v-radio-group
                                v-model="finding.urgent"
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
                            <v-textarea
                                v-model="finding.description"
                                label="Opmerkingen"
                            />
                            <v-btn class="my-4" color="secondary" @click="uploadPhotos">Voeg foto's toe</v-btn>
                        </v-card>
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
                        <v-btn color="primary" @click="addDamageFinding" class="mb-4">+ Bevinding toevoegen</v-btn>

                        <v-card
                            v-for="(finding, index) in report.damageFindings"
                                :key="index"
                                class="mb-4 pa-4"
                                elevation="2"
                                color="grey-lighten-4"
                            >
                            <div class="d-flex justify-space-between align-center mb-2">
                                <h4 class="text-subtitle-1">Inventarisering #{{ index + 1 }}</h4>
                                <v-btn
                                    icon
                                    color="red"
                                    size="small"
                                    @click="removeDamageFinding(index)"
                                >
                                    <v-icon icon="mdi-close" />
                                </v-btn>
                            </div>
                            <label class="block">Bestaande situatie (.pdf):</label>
                            <v-file-input
                                accept=".pdf"
                                label="Voeg .pdf toe"
                                @change="uploadPhotos"
                                class="mt-2"
                            />
                            <v-text-field
                                label="Uitgevoerd door"
                            />
                            <v-textarea
                                v-model="finding.description"
                                label="Omschrijving"
                            />
                            <v-textarea
                                v-model="finding.description"
                                label="Vereiste actie"
                            />
                            <v-textarea
                                v-model="finding.description"
                                label="Opmerkingen"
                            />
                            <v-btn class="my-4" color="secondary" @click="uploadPhotos">Voeg foto's toe</v-btn>
                        </v-card>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

        <v-btn class="mt-4" color="success" @click="submit">Opslaan en versturen</v-btn>
    </section>
</template>

<script>
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


            report: {
                damageFindings: []
            }
        };
    },
    props: {
        location: {
            type: String,
            required: true,
        },
        
        date: {
            type: Date,
            required: true,
        }
    },
    methods: {
        addDamageFinding() {
            this.report.damageFindings.push({
                location: '',
                newDamage: false,
                type: '',
                date: '',
                urgent: false,
                description: ''
            });
        },
        removeDamageFinding(index) {
            this.report.damageFindings.splice(index, 1);
        },
        uploadPhotos() {
            alert("Foto toevoegen (niet geïmplementeerd)");
        },
        submit() {
            alert("Inspectie opgeslagen");
            console.log(this.report);
        }
    }
  };
</script>
