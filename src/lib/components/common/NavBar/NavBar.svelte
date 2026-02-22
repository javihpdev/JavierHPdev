<script lang="ts">
	import Enlace from "../../web/Enlace.svelte";
	import MenuHamburguer from "./MenuHamburguer/MenuHamburguer.svelte";

    type Props = {
        class?: string;
        scrolled?: boolean;
    }
    
    let { class: addClass="", scrolled = false } : Props = $props();

    const navLinks = [
        { id: 'inicio', label: 'INICIO' },
        { id: 'proyectos', label: 'PROYECTOS' },
        { id: 'experiencia', label: 'EXPERIENCIA' },
        { id: 'estudios', label: 'ESTUDIOS' },
        { id: 'contacto', label: 'CONTACTO' },
    ];
</script>

<nav class="flex w-full max-w-7xl mx-auto items-center justify-between px-6 py-4 transition-all duration-500 {scrolled ? 'py-3' : 'py-5'} {addClass}">
    <!-- Logo -->
    <a href="#inicio" class="group flex items-center gap-2">
        <span class="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-300 group-hover:to-cyan-400">
            JHPDEV
        </span>
        <span class="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100"></span>
    </a>

    <!-- Desktop Links -->
    <div class="hidden lg:flex items-center gap-1">
        {#each navLinks as link}
            <Enlace targetId={link.id} class="relative px-4 py-2 text-sm font-medium tracking-[3px] text-slate-300 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-3/4">
                {link.label}
            </Enlace>
        {/each}
    </div>

    <!-- Mobile Menu -->
    <MenuHamburguer />
</nav>
