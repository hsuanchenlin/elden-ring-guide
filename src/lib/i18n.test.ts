import { describe, expect, it } from "vitest";
import { isPublished, linkFor, localeOf, pathFor, primaryRoutes, routeOf, switchLocalePath } from "./i18n";

describe("localeOf", () => {
  it("reads the locale from the leading /zh-tw segment only", () => {
    expect(localeOf("/")).toBe("en");
    expect(localeOf("/progression")).toBe("en");
    expect(localeOf("/zh-tw")).toBe("zh-tw");
    expect(localeOf("/zh-tw/")).toBe("zh-tw");
    expect(localeOf("/zh-tw/progression")).toBe("zh-tw");
    expect(localeOf("/zh-twist")).toBe("en");
  });
});

describe("routeOf", () => {
  it("strips the zh-TW prefix and any trailing slash", () => {
    expect(routeOf("/")).toBe("/");
    expect(routeOf("/zh-tw")).toBe("/");
    expect(routeOf("/zh-tw/")).toBe("/");
    expect(routeOf("/progression/")).toBe("/progression");
    expect(routeOf("/zh-tw/progression/")).toBe("/progression");
  });

  it("only treats a whole /zh-tw segment as the locale prefix", () => {
    expect(routeOf("/zh-twist")).toBe("/zh-twist");
  });
});

describe("pathFor", () => {
  it("never emits a trailing slash except for the English root", () => {
    expect(pathFor("en", "/")).toBe("/");
    expect(pathFor("zh-tw", "/")).toBe("/zh-tw");
    expect(pathFor("en", "/flasks")).toBe("/flasks");
    expect(pathFor("zh-tw", "/flasks")).toBe("/zh-tw/flasks");
  });
});

describe("linkFor", () => {
  it("keeps a zh-TW visitor on every primary page, including zone hash links", () => {
    for (const route of primaryRoutes) {
      expect(isPublished("zh-tw", route), route).toBe(true);
      expect(linkFor("zh-tw", route), route).toBe(pathFor("zh-tw", route));
    }
    expect(linkFor("zh-tw", "/progression")).toBe("/zh-tw/progression");
    expect(`${linkFor("zh-tw", "/progression")}#limgrave`).toBe("/zh-tw/progression#limgrave");
    expect(linkFor("en", "/progression")).toBe("/progression");
  });

  it("sends unpublished zh-TW routes to English", () => {
    expect(isPublished("zh-tw", "/not-a-page")).toBe(false);
    expect(linkFor("zh-tw", "/not-a-page")).toBe("/not-a-page");
  });
});

describe("switchLocalePath", () => {
  it("switches to the same route when it exists in the target locale", () => {
    expect(switchLocalePath("zh-tw", "/")).toBe("/zh-tw");
    expect(switchLocalePath("en", "/zh-tw")).toBe("/");
    expect(switchLocalePath("zh-tw", "/progression/")).toBe("/zh-tw/progression");
    expect(switchLocalePath("en", "/zh-tw/progression")).toBe("/progression");
    expect(switchLocalePath("zh-tw", "/flasks")).toBe("/zh-tw/flasks");
    expect(switchLocalePath("zh-tw", "/builds")).toBe("/zh-tw/builds");
  });

  it("falls back to the target locale's home for untranslated routes", () => {
    expect(switchLocalePath("zh-tw", "/not-a-page")).toBe("/zh-tw");
    expect(switchLocalePath("en", "/zh-tw/not-a-page")).toBe("/not-a-page");
  });
});
