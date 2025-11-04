<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "$lib/components/web/Button.svelte";
    import Contacto from "../contacto/Contacto.svelte";
    import { onMount } from 'svelte';
	import Proyectos from "../proyectos/Proyectos.svelte";

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
    class="flex h-full items-center justify-center p-6 bg-gradient-to-br from-[#0a1628] via-[#1e3a8a] to-[#0f172a] relative"
    style="transform: translateY({scrollY * 0.5}px); opacity: {1 - scrollY / 1500}"
>
    <div class="flex flex-col w-full justify-center items-center">
        <!-- Contenido del Hero -->
        <div 
            class="flex flex-col w-250 "
        >
            <!-- Nombre con gradiente animado -->
            <h1 class="gradient-text text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-center leading-tight">
                Javier Hernández Pérez
            </h1>
            
            <!-- Subtítulo -->
            <p class="text-slate-300 text-xl md:text-2xl font-light mb-8 text-center tracking-wide">
                Full Stack Developer
            </p>
            
            <!-- Descripción -->
            <p class="text-slate-400 text-base md:text-lg leading-relaxed mb-10 text-center max-w-md mx-auto">
                Especializado en crear experiencias web modernas con tecnologías de vanguardia y diseño centrado en el usuario.
            </p>
            
            <div class="flex justify-center">
                <Button 
                    type="button" 
                    text="Más información" 
                    class="bg-blue-500/10 border border-blue-400/30 px-6 py-3 rounded-2xl font-semibold hover:bg-[#152651] hover:scale-105 transition-all duration-300 cursor-pointer"
                />
            </div>
        </div>
    </div>
</div>

<!-- Sección de Proyectos con entrada animada -->
<section 
    class="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a1628] relative z-10"
    style="transform: translateY({Math.max(0, 100 - scrollY * 0.2)}px); opacity: {Math.min(1, scrollY / 600)}"
>
    <Proyectos />
</section>

<style>
    .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
</style>
