<script lang="ts">
  import { zones } from "../data/zones";

  let {
    currentPath = "/",
    currentLocale = "en",
  }: { currentPath?: string; currentLocale?: string } = $props();
  let open = $state(false);

  const localePrefix = currentLocale === "zh-tw" ? "/zh-tw" : "";
  const links = [
    { href: `${localePrefix}/`, label: currentLocale === "zh-tw" ? "法典" : "Codex" },
    { href: `${localePrefix}/progression`, label: currentLocale === "zh-tw" ? "路線" : "Route" },
    { href: `${localePrefix}/flasks`, label: currentLocale === "zh-tw" ? "聖杯" : "Flasks" },
    { href: `${localePrefix}/builds`, label: currentLocale === "zh-tw" ? "Builds" : "Builds" },
  ];

  function isActive(href: string): boolean {
    const normalized = currentPath.replace(/^\/zh-tw/, "");
    if (href === `${localePrefix}/` || href === "/") return normalized === "/" || normalized === "";
    return normalized === href.replace(localePrefix, "") || normalized.startsWith(`${href.replace(localePrefix, "")}/`);
  }

  function close() {
    open = false;
  }
</script>

<header
  class="sticky top-0 z-40 border-b border-gold/20 bg-obsidian/85 backdrop-blur-md"
>
  <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
    <a href={localePrefix + "/"} class="flex items-center gap-3 text-gold-bright" onclick={close}>
      <svg class="h-8 w-8" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="29" stroke="currentColor" stroke-width="1.2" opacity="0.55"></circle>
        <path
          d="M32 50V18M32 28c-6-7-12-8-16-7M32 28c6-7 12-8 16-7M32 36c-8-4-14-2-18 2M32 36c8-4 14-2 18 2"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
        ></path>
        <circle cx="32" cy="16" r="1.6" fill="currentColor"></circle>
      </svg>
      <span class="rune-title text-xs sm:text-sm">Tarnished Codex</span>
    </a>

    <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
      {#each links as link}
        <a
          href={link.href}
          class={"rune-title px-3 py-2 text-[11px] transition-colors " +
            (isActive(link.href)
              ? "text-gold-bright underline decoration-gold/80 underline-offset-8"
              : "text-parchment-muted hover:text-gold")}
        >
          {link.label}
        </a>
      {/each}
      <details class="relative">
        <summary
          class="rune-title cursor-pointer list-none px-3 py-2 text-[11px] text-parchment-muted hover:text-gold"
        >
          {currentLocale === "zh-tw" ? "區域" : "Zones"}
        </summary>
        <div
          class="absolute right-0 mt-2 w-56 border border-gold/25 bg-obsidian-panel p-2 shadow-xl"
        >
          {#each zones as zone}
            <a
              href={`${localePrefix}/progression#${zone.id}`}
              class="flex items-baseline justify-between px-3 py-2 text-sm text-parchment hover:bg-obsidian-raised hover:text-gold-bright"
            >
              <span>{zone.shortName}</span>
              <span class="rune-title text-[10px] text-parchment-faint">{zone.levelRange}</span>
            </a>
          {/each}
        </div>
      </details>

      <!-- Locale-aware language switcher -->
      <a
        href={currentLocale === "zh-tw"
          ? currentPath.replace(/^\/zh-tw/, "") || "/"
          : `/zh-tw${currentPath === "/" ? "" : currentPath}`}
        class="rune-title ml-2 border border-gold/30 px-2 py-1 text-[10px] text-parchment-muted hover:text-gold"
        aria-label={currentLocale === "zh-tw" ? "Switch to English" : "切換至繁體中文"}
      >
        {currentLocale === "zh-tw" ? "EN" : "繁中"}
      </a>
    </nav>

    <button
      type="button"
      class="rune-title border border-gold/30 px-3 py-2 text-[11px] text-gold md:hidden"
      aria-expanded={open}
      aria-controls="mobile-nav"
      onclick={() => (open = !open)}
    >
      {open ? "Close" : "Menu"}
    </button>
  </div>

  {#if open}
    <div id="mobile-nav" class="border-t border-gold/15 bg-obsidian-panel md:hidden">
      <nav class="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Mobile">
        {#each links as link}
          <a
            href={link.href}
            class={"rune-title py-3 text-xs " + (isActive(link.href) ? "text-gold-bright" : "text-parchment")}
            onclick={close}
          >
            {link.label}
          </a>
        {/each}
        <p class="rune-title pt-3 text-[10px] text-parchment-faint">{currentLocale === "zh-tw" ? "區域" : "Zones"}</p>
        {#each zones as zone}
          <a
            href={`${localePrefix}/progression#${zone.id}`}
            class="py-2 text-sm text-parchment-muted"
            onclick={close}
          >
            {zone.order}. {zone.shortName}
          </a>
        {/each}
        <a
          href={currentLocale === "zh-tw"
            ? currentPath.replace(/^\/zh-tw/, "") || "/"
            : `/zh-tw${currentPath === "/" ? "" : currentPath}`}
          class="rune-title mt-3 border border-gold/30 px-3 py-2 text-[11px] text-parchment-muted"
          onclick={close}
        >
          {currentLocale === "zh-tw" ? "Switch to English" : "切換至繁體中文"}
        </a>
      </nav>
    </div>
  {/if}
</header>
