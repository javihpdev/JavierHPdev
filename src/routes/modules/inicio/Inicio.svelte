<script lang="ts">
    import Contacto from "../contacto/Contacto.svelte";
    import { onMount } from 'svelte';
    import Proyectos from "../proyectos/Proyectos.svelte";
    import NavBar from "$lib/components/common/NavBar.svelte";
    import Estudios from "../estudios/Estudios.svelte";
    import Experiencia from "../experiencia/Experiencia.svelte";
	import GitHub from "$lib/components/common/icons/GitHub.svelte";
	import LinkedIn from "$lib/components/common/icons/LinkedIn.svelte";

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
class="flex h-screen items-center justify-center p-6 bg-gradient-to-br from-slate-950 via-gray-900 to-gray-900   relative"
style="transform: translateY({scrollY * 0.5}px);"
>
<NavBar class="fixed top-0 left-0 right-0 z-50 bg-gray-800/80 backdrop-blur-sm" />
    <div class="flex flex-col w-full justify-center items-center">
        <!-- Contenido del Hero -->
        <div class="flex flex-col w-full justify-center items-center">
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
            
            <!-- Social Links -->
                <div class="bg-slate-800/50 w-90  backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                    <h3 class="text-xl font-semibold text-white mb-6 text-center">Sígueme en</h3>
                    <div class="flex justify-center space-x-6">
                        <a 
                            href="https://github.com/javihpdev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="group p-4 bg-slate-700/50 rounded-2xl hover:bg-slate-600/50 transition-all duration-300 hover:scale-110"
                        >
                            <GitHub class="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/javihdezperez" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="group p-4 bg-slate-700/50 rounded-2xl hover:bg-slate-600/50 transition-all duration-300 hover:scale-110"
                        >
                            <LinkedIn class="w-8 h-8 text-slate-400 group-hover:text-blue-400 transition-colors" />
                        </a>
                    </div>
                </div>
        </div>
    </div>
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


<style>
    .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
</style>