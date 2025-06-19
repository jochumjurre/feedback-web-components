<template>
	<section>
		<ContentHeader
			:title="'Openstaande Inspecties'"
			:description="'Overzicht van je toegewezen inspecties.'"
		/>
		<v-container>
			<v-expansion-panels>
				<v-expansion-panel
					v-for="inspection in sortedInspections"
					:key="inspection.id"
				>
					<v-expansion-panel-title>
						Uitvoeren op: {{ formatDate(inspection.date) }}
					</v-expansion-panel-title>

					<v-expansion-panel-text>
						<p><strong>Locatie:</strong> {{ inspection.location }}</p>
						<v-btn
							@click="$router.push({ path: '/opgeven', query: { location: inspection.location, date: inspection.date } })"
							color="primary"
							class="mt-3"
						>
							Start inspectie
						</v-btn>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-container>
	</section>
</template>

<script>
import { useInspectionsStore } from '@/stores/inspectionsStore.js';

export default {
	name: 'InspectionsDonePage',
	data() {
		return {
			selectedInspectionIndex: 0,
			store: useInspectionsStore(),
		};
	},
	computed: {
		sortedInspections() {
			return [...this.store.inspections].sort(
				(a, b) => new Date(a.date) - new Date(b.date)
			);
		},
	},
	methods: {
		formatDate(dateStr) {
			return new Date(dateStr).toLocaleDateString('nl-NL', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			});
		},
	},
};
</script>

<style>
.v-container {
	padding-inline: 0;
}
</style>
