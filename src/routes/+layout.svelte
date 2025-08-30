<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/common/Footer.svelte';
    import Header from '$lib/components/common/Header.svelte';
	import Home from './modules/inicio/Home.svelte';
    let { children } = $props();
</script>

        {@render children?.()}
