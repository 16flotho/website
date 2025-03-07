import type { Competition } from 'src/types/Competition';

export default function initializeDates(competitions: Competition[]) {
	competitions.forEach((competition: Competition) => {
		competition.from = new Date(competition.from);
		competition.to = new Date(competition.to);
	});
}
