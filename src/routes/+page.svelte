<script>
    import { onMount } from 'svelte';
    import Home from './modules/inicio/Home.svelte';
	import Contacto from './modules/contacto/Contacto.svelte';
	import Header from '$lib/components/common/Header.svelte';

    onMount(() => {
        console.log('Page mounted');
    });

</script>

<svelte:head>
    <meta name="description" content="Portfolio de Javier Hernández Pérez">
    <title>Javier Hernández Pérez</title>
    <link rel="icon" type="image/png" href="/ImagenPerfilPorfolio.png">
</svelte:head>

<Home/>




