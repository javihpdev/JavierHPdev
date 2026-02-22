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

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>


<!-- Hero Section con efecto parallax -->
<div 
class="flex h-screen items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-gray-800 to-gray-800   relative"
style="transform: translateY({scrollY * 0.5}px);"
>
<NavBar scrolled={scrollY > 50} class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 {scrollY > 50 ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-slate-700/30' : 'bg-transparent'}" />

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

<!-- Botón scroll to top -->
<button
    onclick={scrollToTop}
    aria-label="Volver arriba"
    class="fixed bottom-6 right-6 z-50 flex h-11 w-11 sm:h-12 sm:w-12 sm:bottom-8 sm:right-8 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/30 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/40 active:scale-95 {scrollY > 400 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}"
>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
</button>


