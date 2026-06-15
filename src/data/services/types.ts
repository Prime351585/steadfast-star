export interface ServicePageData {
	title: string;
	pageTitle?: string;
	metaDescription: string;
	heroImage?: string;
	h1: string;
	subheadline: string;
	buttons: { text: string; link: string }[];
	heroStats?: { value: string; label: string }[];
	introLabel?: string;
	intro: string;
	about: string;
	showAboutHeading?: boolean;
	introImage?: string;
	whyChooseUs: {
		title: string;
		subtitle: string;
		intro?: string;
		items: { title: string; description: string }[];
	};
	ctaSection: {
		title: string;
		description: string;
		buttonText: string;
		buttonLink: string;
	};
	servicesSection?: {
		eyebrow: string;
		title: string;
		intro?: string;
	};
	services: { title: string; description: string }[];
	whyNeeded: {
		title: string;
		intro?: string;
		reasons: { title: string; description: string }[];
	};
	whyNeededImage1?: string;
	whyNeededImage2?: string;
	whyNeededImage3?: string;
	whyNeededImage4?: string;
	tools?: {
		title: string;
		items: string[];
	};
	industries?: {
		title: string;
		items: { name: string; logo: string }[];
	};
	process: {
		title: string;
		subtitle: string;
		intro?: string;
		steps: { title: string; description: string }[];
	};
	clientExperiences?: { name: string; feedback: string }[];
	midCtaSection?: {
		title: string;
		description: string;
		buttonText?: string;
		buttonLink?: string;
	};
	faqTitle?: string;
	faqSubtitle?: string;
	faqs: { question: string; answer: string }[];
}
