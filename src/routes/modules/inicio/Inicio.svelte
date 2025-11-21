<script lang="ts">
    import Contacto from "../../../lib/components/home/contacto/Contacto.svelte";
    import { onMount } from 'svelte';
    import Proyectos from "../../../lib/components/home/proyectos/Proyectos.svelte";
    import NavBar from "$lib/components/common/NavBar/NavBar.svelte";
    import Estudios from "../../../lib/components/home/estudios/Estudios.svelte";
    import Experiencia from "../../../lib/components/home/experiencia/Experiencia.svelte";
	import Footer from "$lib/components/common/Footer.svelte";
    import Home from "$lib/components/home/Home.svelte";
    type Props = {
        class?: string;
    }

    let { class: addClass=""} : Props = $props();
    
    let scrollY = $state(0);

    onMount(() => {
        const handleScroll = () => {
            scrollY = window.scrollY;
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>


<!-- Hero Section con efecto parallax -->
<div 
class="flex h-screen items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-gray-800 to-gray-800   relative"
style="transform: translateY({scrollY * 0.5}px);"
>
<NavBar class="fixed top-0 left-0 right-0 z-50 bg-gray-800/80 backdrop-blur-sm" />

<Home />
</div>

<!-- Sección de Proyectos -->
<section class="relative z-10">
    <Proyectos />
</section>

<!-- Sección de Experiencia -->
<section class="relative z-10">
    <Experiencia />
</section>

<!-- Sección de Estudios -->
<section class="relative z-10">
    <Estudios />
</section>

<!-- Sección de Contacto -->
<section class="relative z-10">
    <Contacto />
</section>

<!-- Sección de footer -->
<section class="relative z-9">
    <Footer />
</section>


