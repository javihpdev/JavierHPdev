<script>
    import { onMount } from 'svelte';
    import Home from './modules/inicio/Home.svelte';
	import Contacto from './modules/contacto/Contacto.svelte';
	import Header from '$lib/components/common/Header.svelte';

    onMount(() => {
        console.log('Page mounted');
    });

</script>

<Home/>




