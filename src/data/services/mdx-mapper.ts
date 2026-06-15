import type { CollectionEntry } from "astro:content";
import type { ServicePageData } from "../data/services/types";

export function mdxToServicePageData(
	entry: CollectionEntry<"services">,
): ServicePageData {
	const { data } = entry;
	return {
		title: data.title,
		metaDescription: data.metaDescription,
		heroImage: data.heroImage,
		h1: data.h1,
		subheadline: data.subheadline,
		buttons: data.buttons,
		intro: data.intro,
		about: data.about,
		introImage: data.introImage,
		whyChooseUs: data.whyChooseUs,
		ctaSection: data.ctaSection,
		services: data.services,
		whyNeeded: data.whyNeeded,
		whyNeededImage1: data.whyNeededImage1,
		whyNeededImage2: data.whyNeededImage2,
		whyNeededImage3: data.whyNeededImage3,
		whyNeededImage4: data.whyNeededImage4,
		tools: data.tools,
		industries: data.industries,
		process: data.process,
		clientExperiences: data.clientExperiences,
		faqs: data.faqs,
	};
}
