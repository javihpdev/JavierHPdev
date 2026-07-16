<script lang="ts">
    import '../app.css';
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
    injectAnalytics({ mode: dev ? 'development' : 'production' });
    
    let { children } = $props();
</script>

<svelte:head>
    <meta name="description" content="Portfolio de Javier Hernández Pérez">
    <title>Javier Hernández Pérez</title>
    <link rel="icon" type="image/png" href="images/ImagenPerfilPorfolio.webp">
</svelte:head>

{@render children?.()}
