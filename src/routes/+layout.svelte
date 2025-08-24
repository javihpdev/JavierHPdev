<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/common/Footer.svelte';
    import Header from '$lib/components/common/Header.svelte';
    let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
    <Header/>
        {@render children?.()}
    <Footer/>
</div>