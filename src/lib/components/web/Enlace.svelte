<script lang="ts" >
	import type { Snippet } from "svelte";



    type Props = {
        class?: string;
        targetId?: string;
        ariaLabel?: string;
        children?: Snippet;

    }

    let { class: addClass="", targetId="", ariaLabel="", children } : Props = $props();
// Funcion para quitar el reload al hacer click en un enlace interno
    function handleClick(e: MouseEvent) {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

</script>
<button 
    aria-label={ariaLabel} 
    class="cursor-pointer {addClass}"
    onclick={handleClick}
    type="button"
>
    {@render children?.()}
</button>