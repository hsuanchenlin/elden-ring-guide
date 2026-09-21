<script lang="ts">
  import { zones } from "../data/zones";
  import { zoneCopyZhTw } from "../data/zh-tw";
  import { linkFor, routeOf, switchLocalePath, type Locale } from "../lib/i18n";

  let {
    currentPath = "/",
    currentLocale = "en",
  }: { currentPath?: string; currentLocale?: Locale } = $props();
  let open = $state(false);

  const zh = currentLocale === "zh-tw";
  const links = [
    { route: "/", label: zh ? "法典" : "Codex" },
    { route: "/progression", label: zh ? "路線" : "Route" },
    { route: "/flasks", label: zh ? "聖杯瓶" : "Flasks" },
    { route: "/builds", label: zh ? "流派" : "Builds" },
  ].map((link) => ({ ...link, href: linkFor(currentLocale, link.route) }));
  const progressionHref = linkFor(currentLocale, "/progression");
  const zonesLabel = zh ? "區域" : "Zones";
  const switchHref = switchLocalePath(zh ? "en" : "zh-tw", currentPath);
  const switchLabel = zh ? "Switch to English" : "切換至繁體中文";
  const currentRoute = routeOf(currentPath);

  function isActive(route: string): boolean {
    if (route === "/") return currentRoute === "/";
    return currentRoute === route || currentRoute.startsWith(`${route}/`);
  }

  function zoneName(zone: (typeof zones)[number]): string {
    return zh ? zoneCopyZhTw[zone.id].name : zone.shortName;
  }

  function zoneLevels(zone: (typeof zones)[number]): string {
    return zh ? zoneCopyZhTw[zone.id].levelRange : zone.levelRange;
  }

  function close() {
    open = false;
  }
</script>

<header
  class="sticky top-0 z-40 border-b border-gold/20 bg-obsidian/85 backdrop-blur-md"
>
  <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
    <a href={linkFor(currentLocale, "/")} class="flex items-center gap-3 text-gold-bright" onclick={close}>
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
            (isActive(link.route)
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
          {zonesLabel}
        </summary>
        <div
          class="absolute right-0 mt-2 w-56 border border-gold/25 bg-obsidian-panel p-2 shadow-xl"
        >
          {#each zones as zone}
            <a
              href={`${progressionHref}#${zone.id}`}
              class="flex items-baseline justify-between px-3 py-2 text-sm text-parchment hover:bg-obsidian-raised hover:text-gold-bright"
            >
              <span>{zoneName(zone)}</span>
              <span class="rune-title text-[10px] text-parchment-faint">{zoneLevels(zone)}</span>
            </a>
          {/each}
        </div>
      </details>

      <a
        href={switchHref}
        class="rune-title ml-2 border border-gold/30 px-2 py-1 text-[10px] text-parchment-muted hover:text-gold"
        aria-label={switchLabel}
      >
        {zh ? "EN" : "繁中"}
      </a>
    </nav>

    <button
      type="button"
      class="rune-title border border-gold/30 px-3 py-2 text-[11px] text-gold md:hidden"
      aria-expanded={open}
      aria-controls="mobile-nav"
      onclick={() => (open = !open)}
    >
      {open ? (zh ? "關閉" : "Close") : zh ? "選單" : "Menu"}
    </button>
  </div>

  {#if open}
    <div id="mobile-nav" class="border-t border-gold/15 bg-obsidian-panel md:hidden">
      <nav class="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Mobile">
        {#each links as link}
          <a
            href={link.href}
            class={"rune-title py-3 text-xs " + (isActive(link.route) ? "text-gold-bright" : "text-parchment")}
            onclick={close}
          >
            {link.label}
          </a>
        {/each}
        <p class="rune-title pt-3 text-[10px] text-parchment-faint">{zonesLabel}</p>
        {#each zones as zone}
          <a
            href={`${progressionHref}#${zone.id}`}
            class="py-2 text-sm text-parchment-muted"
            onclick={close}
          >
            {zone.order}. {zoneName(zone)}
          </a>
        {/each}
        <a
          href={switchHref}
          class="rune-title mt-3 border border-gold/30 px-3 py-2 text-[11px] text-parchment-muted"
          onclick={close}
        >
          {switchLabel}
        </a>
      </nav>
    </div>
  {/if}
</header>
