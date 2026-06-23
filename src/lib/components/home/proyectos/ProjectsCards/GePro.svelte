<script lang="ts">
    type Props = {
        showGifGepro?: boolean;
        currentYear?: number;
    };
    let { currentYear, showGifGepro = $bindable(false) }: Props = $props();
</script>

<div id="gepro" class="group relative">
    <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-500 to-orange-600 blur opacity-20 transition duration-1000 group-hover:opacity-60 group-hover:duration-200"></div>

    <a
        href="modules/proyectos/gepro"
        onmouseenter={() => (showGifGepro = true)}
        onmouseleave={() => (showGifGepro = false)}
        class="relative block h-full rounded-3xl shadow-md shadow-green-500/20"
    >
        <div class="flex h-full flex-col rounded-3xl border border-slate-700/50 bg-slate-800/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-green-500/50 sm:p-8">
            <!-- Image -->
            <div class="relative mb-6 h-48 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-950">
                <img
                    src={showGifGepro ? '/images/GeproPreview.png' : '/images/LogoEmpresa.png'}
                    class="h-full w-full {showGifGepro ? 'object-cover' : 'object-contain'} transition-all duration-300"
                    alt="Vista previa del proyecto GePro"
                />
            </div>

            <!-- Header -->
            <div class="mb-3 flex items-start justify-between gap-3">
                <h3 class="flex items-center gap-2 text-2xl font-bold leading-tight text-white transition-colors group-hover:text-green-400">
                    GePro
                    <span class="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">TFG</span>
                </h3>
                <div class="mt-1 flex-shrink-0 text-slate-500 transition-colors group-hover:text-green-400">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                </div>
            </div>

            <!-- Description -->
            <p class="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                Sistema de gestión empresarial desarrollado como Trabajo Final de Grado. Solución integral para pequeñas y medianas empresas.
            </p>

            <!-- Tech Stack -->
            <div class="mb-5 flex flex-wrap gap-2">
                <span class="rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400">PHP</span>
                <span class="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">Tailwind</span>
                <span class="rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">MySQL</span>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between border-t border-slate-700 pt-4">
                <span class="flex items-center gap-2 text-sm text-slate-400">
                    <span class="h-2 w-2 rounded-full bg-orange-500"></span>
                    En desarrollo
                </span>
                <span class="text-sm text-slate-500">{currentYear}</span>
            </div>
        </div>
    </a>
</div>
