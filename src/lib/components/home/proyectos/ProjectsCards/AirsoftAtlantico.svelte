<script lang="ts">
    type Props = {
        showGif?: boolean;
    };
    let { showGif = $bindable(false) }: Props = $props();
</script>

<div class="group relative ">
                <a
                    href="https://www.airsoftatlantico.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onmouseenter={() => (showGif = true)}
                    onmouseleave={() => (showGif = false)}
                    class="relative block shadow-md shadow-blue-500/20 rounded-3xl"
                >
                    <div class="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
                        <!-- Project Image -->
                        <div class="mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900 relative">
                            <!-- En móvil: mostrar GIF (siempre funciona) -->
                            <img
                                src="/gif/airsoft-preview.gif"
                                class="h-full w-full object-cover transition-all duration-300 block md:hidden"
                                alt="Vista previa del proyecto Airsoft Atlántico"
                            />
                            
                            <!-- En desktop: imagen estática, video en hover -->
                            {#if showGif}
                                <img
                                    src="/gif/airsoft-preview.gif"
                                    class="h-full w-full object-cover transition-all duration-300 hidden md:block"                                 
                                    alt="Vista previa del proyecto Airsoft Atlántico"
                                />
                            {:else}
                                <img
                                    src="/images/logo.png"
                                    class="h-full w-full object-contain transition-all duration-300 hidden md:block"
                                    alt="Vista previa del proyecto Airsoft Atlántico"
                                />
                            {/if}
                        </div>
                        
                        <!-- Project Info -->
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <h3 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    Airsoft Atlántico
                                </h3>
                                <div class="flex items-center text-slate-400 group-hover:text-blue-400 transition-colors">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </div>
                            </div>
                            
                            <p class="text-slate-300 leading-relaxed">
                                Plataforma web moderna para comunidad de airsoft con diseño responsive y experiencia de usuario optimizada.
                            </p>
                            
                            <!-- Tech Stack -->
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                                    TypeScript
                                </span>
                                <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
                                    Svelte
                                </span>
                                <span class="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
                                    TailwindCSS
                                </span>
                                <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30">
                                    JavaScript
                                </span>
								 
                            </div>
                            
                            <!-- Project Stats -->
                            <div class="flex items-center justify-between pt-4 border-t border-slate-700">
                                <div class="flex items-center space-x-4 text-sm text-slate-400">
                                    <span class="flex items-center">
                                        <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Live
                                    </span>
                                    <span>2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>