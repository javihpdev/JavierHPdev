<script lang="ts">
    type Props = {
        showGifHistoriatelo?: boolean;
        currentYear?: number;
    };
    let { currentYear, showGifHistoriatelo = $bindable(false) }: Props = $props();
</script>

<div id="historiatelo" class="group relative">
    <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-yellow-500 to-[#00ACC9] blur opacity-20 transition duration-1000 group-hover:opacity-60 group-hover:duration-200"></div>

    <a
        href="https://historiatelo.org/"
        target="_blank"
        rel="noopener noreferrer"
        onmouseenter={() => (showGifHistoriatelo = true)}
        onmouseleave={() => (showGifHistoriatelo = false)}
        class="relative block h-full rounded-3xl shadow-md shadow-yellow-500/20"
    >
        <div class="flex h-full flex-col rounded-3xl border border-slate-700/50 bg-slate-800/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-yellow-500/50 sm:p-8">
            <!-- Image -->
            <div class="relative mb-6 h-48 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-950">
                <img
                    src="/gif/historiatelo-preview.gif"
                    class="h-full w-full object-cover md:hidden"
                    alt="Vista previa Historiatelo"
                />
                {#if showGifHistoriatelo}
                    <img
                        src="/gif/historiatelo-preview.gif"
                        class="hidden h-full w-full object-cover md:block"
                        alt="Vista previa Historiatelo"
                    />
                {:else}
                    <img
                        src="/images/historiatelo.png"
                        class="hidden h-full w-full object-contain md:block"
                        alt="Vista previa Historiatelo"
                    />
                {/if}
            </div>

            <!-- Header -->
            <div class="mb-3 flex items-start justify-between gap-3">
                <h3 class="text-2xl font-bold leading-tight text-white transition-colors group-hover:text-yellow-400">
                    Historiatelo
                </h3>
                <div class="mt-1 flex-shrink-0 text-slate-500 transition-colors group-hover:text-yellow-400">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                </div>
            </div>

            <!-- Description -->
            <p class="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                Plataforma digital educativa para compartir y descubrir contenido histórico de manera interactiva y engaging.
            </p>

            <!-- Tech Stack -->
            <div class="mb-5 flex flex-wrap gap-2">
                <span class="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">TypeScript</span>
                <span class="rounded-full border border-orange-500/30 bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-400">Svelte</span>
                <span class="rounded-full border border-cyan-500/30 bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400">TailwindCSS</span>
                <span class="rounded-full border border-[#C5F64F]/50 bg-[#C5F64F]/20 px-3 py-1 text-sm font-medium text-[#C5F64F]">Drizzle ORM</span>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between border-t border-slate-700 pt-4">
                <span class="flex items-center gap-2 text-sm text-slate-400">
                    <span class="h-2 w-2 rounded-full bg-green-500"></span>
                    Live
                </span>
                <span class="text-sm text-slate-500">{currentYear}</span>
            </div>
        </div>
    </a>
</div>
