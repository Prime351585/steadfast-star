import { defineMiddleware } from "astro:middleware";

const US_COUNTRIES = new Set(["US"]);
const US_SERVICE_SLUGS = new Set(["seo-services", "web-development"]);

function getRegion(country: string) {
	return US_COUNTRIES.has(country.toUpperCase()) ? "us" : "in";
}

function getCountry(request: Request) {
	return (
		request.headers.get("CF-IPCountry") ??
		request.headers.get("cf-ipcountry") ??
		""
	);
}

export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname } = context.url;

	if (pathname === "/" || pathname === "") {
		const target = `/${getRegion(getCountry(context.request))}`;
		return context.redirect(target, 302);
	}

	const servicesMatch = pathname.match(/^\/services\/([^/]+)\/?$/);
	if (servicesMatch) {
		const slug = servicesMatch[1];
		const region = getRegion(getCountry(context.request));
		const targetRegion =
			region === "us" && US_SERVICE_SLUGS.has(slug) ? "us" : "in";
		return context.redirect(`/${targetRegion}/services/${slug}`, 302);
	}

	return next();
});
