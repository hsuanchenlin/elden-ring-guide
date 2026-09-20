<script lang="ts">
  import { onMount } from "svelte";
  import {
    CHECKLIST_STORAGE_KEY,
    browserStorage,
    countChecked,
    createChecklistSession,
    type ChecklistState,
  } from "../lib/checklist";

  export type ChecklistItem = {
    id: string;
    title: string;
    detail: string;
    optional?: boolean;
    meta?: string;
  };

  export type ChecklistGroup = {
    heading: string;
    items: ChecklistItem[];
  };

  let {
    groups,
    storageKey = CHECKLIST_STORAGE_KEY,
  }: {
    groups: ChecklistGroup[];
    storageKey?: string;
  } = $props();

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
      <span class="text-gold-bright">{collected}</span>
      of {ids.length} marked
    </p>
    <button
      type="button"
      class="rune-title border border-gold/30 px-3 py-1.5 text-[10px] text-parchment-muted hover:text-gold"
      onclick={onReset}
    >
      Reset list
    </button>
  </div>

  {#if ready && !persisting}
    <p role="status" class="border border-rust/40 bg-rust/10 px-3 py-2 text-sm text-parchment">
      Changes cannot be saved in this browser; your marks will reset when you leave.
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
          <li>
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
                    <span class="rune-title text-[9px] text-parchment-faint">Optional</span>
                  {/if}
                  {#if item.meta}
                    <span class="text-xs text-parchment-faint">{item.meta}</span>
                  {/if}
                </span>
                <span class="mt-1 block text-sm text-parchment-muted">{item.detail}</span>
              </span>
            </label>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>
