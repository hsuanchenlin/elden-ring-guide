<script lang="ts">
  import { onMount } from "svelte";
  import {
    CHECKLIST_STORAGE_KEY,
    browserStorage,
    countChecked,
    createChecklistSession,
    type ChecklistState,
  } from "../lib/checklist";
  import type { Locale } from "../lib/i18n";

  export type ChecklistMap = {
    src: string;
    alt: string;
    width: number;
    height: number;
    pin?: { x: number; y: number; label: string };
    caption: string;
  };

  export type ChecklistItem = {
    id: string;
    title: string;
    detail: string;
    optional?: boolean;
    meta?: string;
    map?: ChecklistMap;
  };

  export type ChecklistGroup = {
    heading: string;
    items: ChecklistItem[];
  };

  let {
    groups,
    storageKey = CHECKLIST_STORAGE_KEY,
    locale = "en",
  }: {
    groups: ChecklistGroup[];
    storageKey?: string;
    locale?: Locale;
  } = $props();

  const zh = $derived(locale === "zh-tw");

  let state = $state<ChecklistState>({});
  let ready = $state(false);
  let persisting = $state(true);
  let session: ReturnType<typeof createChecklistSession> | undefined;

  const items = $derived(groups.flatMap((group) => group.items));
  const ids = $derived(items.map((item) => item.id));
  const collected = $derived(countChecked(ids, state));

  onMount(() => {
    session = createChecklistSession(storageKey, browserStorage());
    state = session.getState();
    persisting = session.isPersisting();
    ready = true;
  });

  function onToggle(id: string) {
    if (!session) return;
    state = session.toggle(id);
    persisting = session.isPersisting();
  }

  function onReset() {
    if (!session) return;
    state = session.clear(ids);
    persisting = session.isPersisting();
  }
</script>

<div class="space-y-8" data-ready={ready}>
  <div class="flex flex-wrap items-end justify-between gap-3">
    <p class="text-sm text-parchment-muted">
      {#if zh}
        <span class="text-gold-bright">{collected}</span>
        / {ids.length} 已標記
      {:else}
        <span class="text-gold-bright">{collected}</span>
        of {ids.length} marked
      {/if}
    </p>
    <button
      type="button"
      class="rune-title border border-gold/30 px-3 py-1.5 text-[10px] text-parchment-muted hover:text-gold"
      onclick={onReset}
    >
      {zh ? "重設清單" : "Reset list"}
    </button>
  </div>

  {#if ready && !persisting}
    <p role="status" class="border border-rust/40 bg-rust/10 px-3 py-2 text-sm text-parchment">
      {zh
        ? "這個瀏覽器無法儲存變更；離開後標記會消失。"
        : "Changes cannot be saved in this browser; your marks will reset when you leave."}
    </p>
  {/if}

  <div class="h-1 w-full bg-obsidian-raised">
    <div
      class="h-1 bg-gold transition-all"
      style={`width: ${ids.length === 0 ? 0 : (collected / ids.length) * 100}%`}
    ></div>
  </div>

  {#each groups as group}
    <section>
      {#if group.heading}
        <h3 class="rune-title mb-3 text-xs text-gold">{group.heading}</h3>
      {/if}
      <ul class="divide-y divide-gold/10 border border-gold/15">
        {#each group.items as item}
          <li id={item.id} class="scroll-mt-28">
            <label class="flex cursor-pointer gap-3 px-3 py-3 hover:bg-obsidian-raised/70">
              <input
                type="checkbox"
                class="mt-1 size-4 shrink-0 accent-gold"
                checked={Boolean(state[item.id])}
                onchange={() => onToggle(item.id)}
              />
              <span>
                <span class="flex flex-wrap items-baseline gap-2">
                  <span class="font-medium text-parchment">{item.title}</span>
                  {#if item.optional}
                    <span class="rune-title text-[9px] text-parchment-faint">{zh ? "可選" : "Optional"}</span>
                  {/if}
                  {#if item.meta}
                    <span class="text-xs text-parchment-faint">{item.meta}</span>
                  {/if}
                </span>
                <span class="mt-1 block text-sm text-parchment-muted">{item.detail}</span>
              </span>
            </label>
            {#if item.map}
              <figure class="max-w-xl px-3 pb-3 pl-10">
                <div class="relative overflow-hidden border border-gold/20 bg-obsidian">
                  <img
                    src={item.map.src}
                    width={item.map.width}
                    height={item.map.height}
                    alt={item.map.alt}
                    class="block aspect-[16/9] h-auto w-full object-cover"
                  />
                  {#if item.map.pin}
                    <span
                      class="pointer-events-none absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-obsidian bg-gold shadow-[0_0_0_3px_rgb(201_162_39_/_0.35)]"
                      style="left: {item.map.pin.x}%; top: {item.map.pin.y}%"
                    >
                      <span class="sr-only">{item.map.pin.label}示意位置</span>
                    </span>
                    <span class="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 text-[10px] text-gold/80">北</span>
                    <span class="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gold/80">南</span>
                    <span class="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-gold/80">西</span>
                    <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gold/80">東</span>
                  {/if}
                </div>
                <figcaption class="mt-2 text-xs text-parchment-faint">{item.map.caption}</figcaption>
              </figure>
            {/if}
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>
