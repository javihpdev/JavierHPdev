<script lang="ts">
    import Copyright from "./icons/Copyright.svelte";
    import GitHub from "./icons/GitHub.svelte";
    import LinkedIn from "./icons/LinkedIn.svelte";

    type Props = {
        class?: string;
    }

    let { class: addClass="" } : Props = $props();
</script>

<footer class="w-full bg-gradient-to-br from-gray-900 via-gray-900 to-slate-950 py-8 px-4 flex flex-col justify-center items-center gap-2 {addClass}">
    <div class="flex flex-col md:flex-row justify-center items-center w-full gap-2 md:gap-8">
        <div class="flex items-center gap-2">
            <Copyright class="w-5 h-5 text-blue-400" />
            <span class="flex gap-3 items-center">
                <span class="font-extrabold text-white text-lg tracking-wide">2025</span>
                <span class="font-semibold text-blue-300 text-base tracking-tight">Javier Hernández Pérez</span>
            </span>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-4">
            <span class="font-bold text-white text-base tracking-wide uppercase">Portfolio Personal</span>
            <span class="hidden md:inline text-slate-600 font-light">|</span>
            <span class="text-slate-400 text-base">Redes Sociales:</span>
            <div class="flex items-center gap-3">
                <a href="https://github.com/javihpdev" target="_blank" aria-label="GitHub"
                    class="mx-1 p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-500">
                    <GitHub class="w-6 h-6 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/javihdezperez" target="_blank" aria-label="LinkedIn"
                    class="mx-1 p-2 rounded-full bg-slate-800 hover:bg-blue-700 hover:scale-110 transition-all duration-500">
                    <LinkedIn class="w-6 h-6 text-white" />
                </a> 
            </div>
        </div>
    </div>
    <div class="text-xs text-slate-500 mt-4 text-center leading-relaxed">
        Desarrollado con <a href="https://svelte.dev/" target="_blank" class="text-blue-400 font-semibold underline italic">Svelte</a> &copy; Todos los derechos reservados.
    </div>
</footer>