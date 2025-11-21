<script lang="ts">

    type Props = {
        class?: string;
        name?: string;
        valor?: string;
        children?: any;
        borderColorHover?: string;


    };

    let { class: addClass = '', name, valor,children, borderColorHover }: Props = $props();
</script>


<div
	class="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 {borderColorHover}"
>
	<div class="flex items-center space-x-4">
		<div class="flex h-12 w-12 items-center justify-center rounded-xl {addClass}">
            {@render children?.()}
		</div>
		<div>
			<h3 class="text-lg font-semibold text-white">{name}</h3>
			<p class="text-slate-400">{valor}</p>
		</div>
	</div>
</div>
