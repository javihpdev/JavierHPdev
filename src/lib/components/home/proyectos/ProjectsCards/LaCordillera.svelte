<script lang="ts">
    type Props = {
        class?: string;
        showGifLaCordillera?: boolean;
        currentYear?: number;
    };

    let { class: addClass = '', currentYear, showGifLaCordillera = $bindable(false) }: Props = $props();
</script>

<div class="group relative self-start">
    <!-- Background Decoration -->
    <div
        class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-500 to-slate-600 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"
    ></div>

    <div
        onmouseenter={() => (showGifLaCordillera = true)}
        onmouseleave={() => (showGifLaCordillera = false)}
        role="article"
        class="relative block cursor-default"
    >
        <div
            class="rounded-3xl border border-slate-700/50 bg-slate-800/80 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-green-500/50"
        >
            <!-- Project Image -->
            <div class="relative mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900">
                <!-- En móvil: mostrar GIF (siempre funciona) -->
                <img
                    src="/gif/laCordillera.gif"
                    class="block h-full w-full object-contain transition-all duration-300 md:hidden"
                    alt="Vista previa del proyecto Centro Hipico La Cordillera"
                />

                <!-- En desktop: imagen estática, GIF en hover -->
                {#if showGifLaCordillera}
                    <img
                        src="/gif/laCordillera.gif"
                        class="hidden h-full w-full object-contain transition-all duration-300 md:block"
                        alt="Vista previa del proyecto Centro Hipico La Cordillera"
                    />
                {:else}
                    <img
                        src="/images/logoCordillera.png"
                        class="hidden h-full w-full scale-110 object-contain transition-all duration-300 md:block"
                        alt="Logo Centro Hipico La Cordillera"
                    />
                {/if}
            </div>

            <!-- Project Info -->
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <h3 class="text-2xl font-bold text-white transition-colors group-hover:text-green-400">
                        Centro Hipico La Cordillera
                    </h3>

                    <div class="flex items-center text-slate-400 transition-colors group-hover:text-green-400">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                        </svg>
                    </div>
                </div>

                <p class="leading-relaxed text-slate-300">
                    Web institucional para el Centro Hípico La Cordillera. Plataforma que ofrece información sobre el centro, sus instalaciones, actividades ecuestres y servicios disponibles para aficionados y profesionales de la hípica.
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2">
                    <span
                        class="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400"
                    >
                        TypeScript
                    </span>
                    <span
                        class="rounded-full border bg-gradient-to-br from-purple-500 to-pink-500 px-3 py-1 text-sm font-medium text-white"
                    >
                        Angular
                    </span>
                    <span
                        class="rounded-full border border-cyan-500/30 bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400"
                    >
                        TailwindCSS
                    </span>
                </div>

                <!-- Project Stats -->
                <div class="flex items-center justify-between border-t border-slate-700 pt-4">
                    <div class="flex items-center space-x-4 text-sm text-slate-400">
                        <span class="flex items-center">
                            <span class="mr-2 h-2 w-2 animate-pulse rounded-full bg-yellow-400"></span>
                            En Desarrollo
                        </span>
                        <span>{currentYear}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
