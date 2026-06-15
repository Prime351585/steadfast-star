export type Region = "in" | "us";

export interface HomepageContent {
	meta: {
		title: string;
		description: string;
	};
	hero: {
		badge: string;
		title: string;
		titleAccent?: string;
		subheadline: string;
		primaryCta: string;
		secondaryCta: string;
		stats: { value: string; label: string }[];
		showTrustpilot: boolean;
	};
	aboutUs: {
		paragraphs: string[];
		citiesLine?: string;
	};
	keyReasons: {
		title: string;
		intro: string;
		reasons: { title: string; description: string }[];
	};
	whyUs: {
		title: string;
		subtitle: string;
		items: { title: string; description: string }[];
	};
	services: {
		eyebrow: string;
		title: string;
		intro: string;
		items: { title: string; description: string; href: string }[];
	};
	process: {
		title: string;
		intro: string;
		steps: { number: string; title: string; description: string }[];
	};
	faq: {
		title: string;
		subtitle: string;
		items: { question: string; answer: string }[];
	};
	finalCta: {
		title: string;
		description: string;
		buttonText: string;
		buttonHref: string;
	};
	showImpact: boolean;
}
