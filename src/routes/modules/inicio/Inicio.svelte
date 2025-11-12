<script lang="ts">
    import Contacto from "../contacto/Contacto.svelte";
    import { onMount } from 'svelte';
    import Proyectos from "../proyectos/Proyectos.svelte";
    import NavBar from "$lib/components/common/NavBar/NavBar.svelte";
    import Estudios from "../estudios/Estudios.svelte";
    import Experiencia from "../experiencia/Experiencia.svelte";
	import GitHub from "$lib/components/common/icons/GitHub.svelte";
	import LinkedIn from "$lib/components/common/icons/LinkedIn.svelte";
	import Footer from "$lib/components/common/Footer.svelte";
	import SocialMedia from "$lib/components/common/SocialMedia/SocialMedia.svelte";
	import Home from "../home/Home.svelte";

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


