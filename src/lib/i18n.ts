export type Locale = "en" | "zh-tw";

export const locales: Locale[] = ["en", "zh-tw"];

/** Primary nav routes. Each has a page under src/pages/zh-tw/. */
export const primaryRoutes = ["/", "/progression", "/flasks", "/builds"] as const;

const prefixes: Record<Locale, string> = { en: "", "zh-tw": "/zh-tw" };

/**
 * English routes that also exist under /zh-tw. English publishes every route;
 * add a route here when its translated page lands under src/pages/zh-tw/.
 */
const zhTwRoutes = new Set<string>(primaryRoutes);

const zhTwPrefix = /^\/zh-tw(?=\/|$)/;

export function localeOf(pathname: string): Locale {
  return zhTwPrefix.test(pathname) ? "zh-tw" : "en";
}

/** Locale-free route for a pathname: "/zh-tw/progression/" -> "/progression", "/zh-tw" -> "/". */
export function routeOf(pathname: string): string {
  const route = pathname.replace(zhTwPrefix, "").replace(/\/+$/, "");
  return route || "/";
}

export function isPublished(locale: Locale, route: string): boolean {
  return locale === "en" || zhTwRoutes.has(route);
}

/** Served URL path for a route in a locale; no trailing slash except the English root. */
export function pathFor(locale: Locale, route: string): string {
  const prefix = prefixes[locale];
  return route === "/" ? prefix || "/" : `${prefix}${route}`;
}

/** Link target for a route while browsing in `locale`; English stands in for pages not yet translated. */
export function linkFor(locale: Locale, route: string): string {
  return pathFor(isPublished(locale, route) ? locale : "en", route);
}

/** Language-switcher target: the same route when it is translated, otherwise that locale's home. */
export function switchLocalePath(target: Locale, currentPath: string): string {
  const route = routeOf(currentPath);
  return pathFor(target, isPublished(target, route) ? route : "/");
}
