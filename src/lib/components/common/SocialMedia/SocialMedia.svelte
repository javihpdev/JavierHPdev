<script lang="ts">
	import GitHub from "../icons/GitHub.svelte";
	import LinkedIn from "../icons/LinkedIn.svelte";

    type Props = {
        class?: string;
    }

    let { class: addClass="" } : Props = $props();

</script>
<!-- Social Links -->
				<div class="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm {addClass}">
					<h3 class="mb-6 text-center text-xl font-semibold text-white">Sígueme en</h3>
					<div class="flex justify-center space-x-10">
						<GitHub class="h-8 w-8 text-slate-400 transition-colors group-hover:text-white" />
						<LinkedIn class="h-8 w-8" />
					</div>
				</div>