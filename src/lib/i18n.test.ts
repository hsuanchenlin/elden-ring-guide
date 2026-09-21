import { describe, expect, it } from "vitest";
import { isPublished, linkFor, pathFor, routeOf, switchLocalePath } from "./i18n";

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
  it("keeps zh-TW visitors on translated routes and sends them to English otherwise", () => {
    expect(isPublished("zh-tw", "/")).toBe(true);
    expect(linkFor("zh-tw", "/")).toBe("/zh-tw");
    expect(isPublished("zh-tw", "/progression")).toBe(false);
    expect(linkFor("zh-tw", "/progression")).toBe("/progression");
    expect(linkFor("en", "/progression")).toBe("/progression");
  });
});

describe("switchLocalePath", () => {
  it("switches to the same route when it exists in the target locale", () => {
    expect(switchLocalePath("zh-tw", "/")).toBe("/zh-tw");
    expect(switchLocalePath("en", "/zh-tw")).toBe("/");
  });

  it("falls back to the target locale's home for untranslated routes", () => {
    expect(switchLocalePath("zh-tw", "/progression/")).toBe("/zh-tw");
    expect(switchLocalePath("en", "/zh-tw/progression")).toBe("/progression");
  });
});
