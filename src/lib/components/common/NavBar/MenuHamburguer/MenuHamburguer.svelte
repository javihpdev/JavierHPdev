<script lang="ts">
	import Enlace from "$lib/components/web/Enlace.svelte";

    let isOpen = $state(false);

    function toggleMenu() {
        isOpen = !isOpen;
    }
    function closeMenu() {
        isOpen = false;
    }

    const navLinks = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'proyectos', label: 'Proyectos' },
        { id: 'experiencia', label: 'Experiencia' },
        { id: 'estudios', label: 'Estudios' },
        { id: 'contacto', label: 'Contacto' },
    ];
</script>

<!-- Botón hamburguesa -->
<button 
    class="relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-lg lg:hidden transition-colors duration-300 hover:bg-white/10"
    aria-label="Boton Menu" 
    onclick={toggleMenu}
>
    <span class={`block h-[2px] w-5 rounded-full bg-white transition-all duration-500 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
    <span class={`block h-[2px] w-5 rounded-full bg-white transition-all duration-500 ${isOpen ? 'scale-x-0 opacity-0' : ''}`}></span>
    <span class={`block h-[2px] w-5 rounded-full bg-white transition-all duration-500 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
</button>

<!-- Overlay -->
{#if isOpen}
    <button 
        class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-500" 
        onclick={closeMenu}
        aria-label="Cerrar menu"
        tabindex="-1"
    ></button>
{/if}

<!-- Panel deslizante -->
<div class={`fixed top-0 right-0 z-45 w-72 bg-slate-900/95 backdrop-blur-xl border-l border-b border-slate-700/50 rounded-bl-3xl shadow-2xl shadow-black/50 transition-transform duration-500 ease-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    <div class="flex flex-col items-start gap-2 px-8 pt-20 pb-8">
        {#each navLinks as link, i}
            <button onclick={closeMenu} class="w-full">
                <Enlace 
                    targetId={link.id}
                    class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium text-slate-300 transition-all duration-300 hover:bg-white/5 hover:text-white hover:translate-x-1"
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    {link.label}
                </Enlace>
            </button>
        {/each}

        <!-- Decoración -->
        <div class="mt-4 w-full">
            <div class="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
            <p class="mt-4 text-center text-xs tracking-widest text-slate-500">JHPDEV</p>
        </div>
    </div>
</div>