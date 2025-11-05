<script lang="ts">
	import NavBar from '$lib/components/common/NavBar.svelte';
    import '../app.css';
    let { children } = $props();
</script>

<svelte:head>
    <meta name="description" content="Portfolio de Javier Hernández Pérez">
    <title>Javier Hernández Pérez</title>
    <link rel="icon" type="image/png" href="images/ImagenPerfilPorfolio.webp">
</svelte:head>


        {@render children?.()}
