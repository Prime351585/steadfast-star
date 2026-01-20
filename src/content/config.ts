import { defineCollection, z } from 'astro:content';

const services = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        metaDescription: z.string(),
        heroImage: z.string().optional(),
        h1: z.string(),
        subheadline: z.string(),
        buttons: z.array(z.object({
            text: z.string(),
            link: z.string()
        })),
        intro: z.string(),
        about: z.string(),
        whyChooseUs: z.object({
            title: z.string(),
            subtitle: z.string(),
            items: z.array(z.object({
                title: z.string(),
                description: z.string()
            }))
        }),
        ctaSection: z.object({
            title: z.string(),
            description: z.string(),
            buttonText: z.string(),
            buttonLink: z.string().default('/contact')
        }),
        services: z.array(z.object({
            title: z.string(),
            description: z.string()
        })),
        whyNeeded: z.object({
            title: z.string(),
            reasons: z.array(z.object({
                title: z.string(),
                description: z.string()
            }))
        }),
        tools: z.object({
            title: z.string(),
            items: z.array(z.string())
        }),
        industries: z.object({
            title: z.string(),
            items: z.array(z.string())
        }),
        process: z.object({
            title: z.string(),
            subtitle: z.string(),
            steps: z.array(z.object({
                title: z.string(),
                description: z.string()
            }))
        }),
        clientExperiences: z.array(z.object({
            name: z.string(),
            feedback: z.string()
        })),
        faqs: z.array(z.object({
            question: z.string(),
            answer: z.string()
        }))
    })
});

export const collections = {
    services,
};
