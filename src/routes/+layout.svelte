<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/common/Footer.svelte';
    import Header from '$lib/components/common/Header.svelte';
	import Home from './modules/inicio/Home.svelte';
    let { children } = $props();
</script>
<svelte:head>
    <meta name="description" content="Portfolio de Javier Hernández Pérez">
    <title>Javier Hernández Pérez</title>
    <link rel="icon" type="image/png" href="/ImagenPerfilPorfolio.png">
</svelte:head>

<svelte:head>
    <meta name="description" content="Portfolio de Javier Hernández Pérez">
    <title>Javier Hernández Pérez</title>
    <link rel="icon" type="image/png" href="/src/lib/assets/images/ImagenPerfilPorfolio.webp">
</svelte:head>
        {@render children?.()}
