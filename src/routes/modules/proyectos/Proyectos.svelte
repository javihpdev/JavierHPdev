<script lang="ts">
    let showGif = $state(false);
    let showGifHistoriatelo = $state(false);
    let showGifGepro = $state(false);
</script>

<div 
    id="proyectos"
    class="min-h-screen w-full bg-gradient-to-br from-slate-950 via-gray-900 to-gray-900 py-20"
>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center mb-16">
            <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                Mis Proyectos
            </h1>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p class="text-xl text-slate-400 mt-6 max-w-3xl mx-auto">
                Una selección de proyectos que demuestran mis habilidades en desarrollo web moderno y mi pasión por crear experiencias digitales excepcionales.
            </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <!-- Proyecto 1: Airsoft Atlántico -->
            <div class="group relative">
                <!-- Background Decoration -->
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                <a
                    href="https://javihpdev.github.io/AirsoftAtlantico/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onmouseenter={() => (showGif = true)}
                    onmouseleave={() => (showGif = false)}
                    class="relative block"
                >
                    <div class="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
                        <!-- Project Image -->
                        <div class="mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900 relative">
                            <img
                                src={showGif ? '/gif/airsoft-preview.gif' : '/images/logo.png'}
                                class="h-full w-full {showGif ? 'object-cover' : 'object-contain'} transition-all duration-300"
                                alt="Vista previa del proyecto Airsoft Atlántico"
                            />
                            <!-- Overlay on hover -->
                            {#if showGif}
                                <div class="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px]"></div>
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

            <!-- Proyecto 2: Historiatelo -->
            <div class="group relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-[#00ACC9] rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                <a 
                    href="https://historiatelo.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onmouseenter={() => (showGifHistoriatelo = true)}
                    onmouseleave={() => (showGifHistoriatelo = false)}
                    class="relative block"
                >
                    <div class="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:border-yellow-500/50">
                        <div class="mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900 relative">
                            <img
                                src={showGifHistoriatelo ? '/gif/historiatelopreview.gif' : '/images/historiatelo.png'}
                                class="h-full w-full {showGifHistoriatelo ? 'object-cover' : 'object-contain'} transition-all duration-300"
                                alt="Vista previa del proyecto Historiatelo"
                            />
                            {#if showGifHistoriatelo}
                                <div class="absolute inset-0 bg-green-500/10 backdrop-blur-[1px]"></div>
                            {/if}
                        </div>
                        
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <h3 class="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                    Historiatelo
                                </h3>
                                <div class="flex items-center text-slate-400 group-hover:text-yellow-400 transition-colors">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </div>
                            </div>
                            
                            <p class="text-slate-300 leading-relaxed">
                                Plataforma digital educativa para compartir y descubrir contenido histórico de manera interactiva y engaging.
                            </p>
                            
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
								<span class="px-3 py-1 bg-[#C5F64F]/20 text-[#C5F64F] rounded-full text-sm font-medium border border-cyan-500/30">
                                    Drizzle ORM
                                </span>
                            </div>
                            
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

            <!-- Proyecto 3: GePro -->
            <div class="group relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                <a 
                    href="/modules/proyectos/geprobeta" 
                    onmouseenter={() => (showGifGepro = true)}
                    onmouseleave={() => (showGifGepro = false)}
                    class="relative block"
                >
                    <div class="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/50">
                        <div class="mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900 relative">
                            <img
                                src={showGifGepro ? '/images/GeproPreview.png' : '/images/LogoEmpresa.png'}
                                class="h-full w-full {showGifGepro ? 'object-cover' : 'object-contain'} transition-all duration-300"
                                alt="Vista previa del proyecto GePro"
                            />
                            {#if showGifGepro}
                                <div class="absolute inset-0 bg-purple-500/10 backdrop-blur-[1px]"></div>
                            {/if}
                        </div>
                        
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <h3 class="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                    GePro
                                </h3>
                                <div class="flex items-center">
                                    <span class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium border border-purple-500/30">
                                        TFG
                                    </span>
                                </div>
                            </div>
                            
                            <p class="text-slate-300 leading-relaxed">
                                Sistema de gestión empresarial desarrollado como Trabajo Final de Grado. Solución integral para pequeñas y medianas empresas.
                            </p>
                            
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                                    PHP
                                </span>
                                <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                                    Tailwind
                                </span>
                                <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                                    MySQL
                                </span>
                            </div>
                            
                            <div class="flex items-center justify-between pt-4 border-t border-slate-700">
                                <div class="flex items-center space-x-4 text-sm text-slate-400">
                                    <span class="flex items-center">
                                        <span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                        En desarrollo
                                    </span>
                                    <span>2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <!-- GitHub CTA Section -->
        <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 text-center">
            <div class="max-w-3xl mx-auto">
                <h3 class="text-3xl font-bold text-white mb-4">¿Quieres ver más?</h3>
                <p class="text-xl text-slate-300 mb-8">
                    Explora todos mis proyectos y contribuciones en GitHub. Siempre estoy trabajando en algo nuevo e interesante.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="https://github.com/javihpdev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Ver GitHub
                    </a>
                    <a 
                        href="#contacto" 
                        class="inline-flex items-center px-8 py-4 bg-slate-700 border border-slate-600 text-white font-semibold rounded-2xl hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
                    >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        Contactar
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>