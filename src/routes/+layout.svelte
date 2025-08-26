<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/common/Footer.svelte';
    import Header from '$lib/components/common/Header.svelte';
	import Home from './modules/home/Home.svelte';
    let { children } = $props();
</script>

<div class="flex flex-col min-h-screen w-full">
        {@render children?.()}
</div>