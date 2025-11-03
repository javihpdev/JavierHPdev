<script lang="ts">
	import Estudios from "./Estudios.svelte";

  type Props = {
    class?: string;
  }

  let { class: addClass="", } : Props = $props();
</script>
<div class="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1e3a8a] to-[#0f172a] overflow-hidden">

<Estudios />

</div>