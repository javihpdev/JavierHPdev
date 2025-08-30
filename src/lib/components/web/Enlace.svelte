<script lang="ts" >
	import type { Snippet } from "svelte";



    type Props = {
        class?: string;
        href?: string;
        ariaLabel?: string;
        children?: Snippet;

    }

    let { class: addClass="", href="", ariaLabel="", children } : Props = $props();

</script>

<a aria-label={ariaLabel} {href} class="{addClass}">{@render children?.()}</a>