<script lang="ts">
    type Props = {
        showGifGepro?: boolean;
        currentYear?: number;
        class?: string;
    };

    let { class: addClass = '', currentYear, showGifGepro = $bindable(false) }: Props = $props();

</script>


<div id="gepro" class="group relative self-start">
                <div class="absolute -inset-1 bg-gradient-to-r from-green-500 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                <a 
                    href="modules/proyectos/gepro" 
                    onmouseenter={() => (showGifGepro = true)}
                    onmouseleave={() => (showGifGepro = false)}
                    class="relative block shadow-md shadow-green-500/20 rounded-3xl"
                >
                    <div class="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:border-green-500/50">
                        <div class="mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900 relative">
                            <img
                                src={showGifGepro ? '/images/GeproPreview.png' : '/images/LogoEmpresa.png'}
                                class="h-full w-full {showGifGepro ? 'object-cover' : 'object-contain'} transition-all duration-300"
                                alt="Vista previa del proyecto GePro"
                            /> 
                        </div>
                        
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <h3 class="text-2xl font-bold text-white justify-center text-center flex gap-2 group-hover:text-green-400 transition-colors">
                                   <span>GePro</span>
                                   <span class="px-2.5 text-center items-center flex bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold border border-emerald-500/30">
                                       TFG
                                   </span>
                                </h3>
                                <div class="flex items-center text-slate-400 group-hover:text-green-400 transition-colors">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
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
                                    <span>{currentYear}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>