<script lang="ts">
  import { onMount } from "svelte";
  import {
    CHECKLIST_STORAGE_KEY,
    browserStorage,
    countChecked,
    loadChecklist,
  } from "../lib/checklist";

  let { ids, label = "Tracked in this browser:" }: { ids: string[]; label?: string } = $props();
  let collected = $state(0);

  onMount(() => {
    const state = loadChecklist(CHECKLIST_STORAGE_KEY, browserStorage());
    collected = countChecked(ids, state);
  });
</script>

<p class="text-sm text-parchment-muted">
  {label}
  <span class="text-gold-bright">{collected}</span>
  / {ids.length}
</p>
