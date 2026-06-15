import type { Region } from "./types";
import { inHomepage } from "./in";
import { usHomepage } from "./us";

export function getHomepageContent(region: Region) {
	return region === "us" ? usHomepage : inHomepage;
}

export { inHomepage, usHomepage };
export type { HomepageContent, Region } from "./types";
