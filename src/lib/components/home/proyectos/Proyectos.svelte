<script lang="ts">

    import AirsoftAtlantico from "./ProjectsCards/AirsoftAtlantico.svelte";
	import GePro from "./ProjectsCards/GePro.svelte";
	import Historiatelo from "./ProjectsCards/Historiatelo.svelte";
	import ListenStudyCard from "./ProjectsCards/ListenStudyCard.svelte";

    let showGif = $state(false);
    let showGifHistoriatelo = $state(false);
    let showGifGepro = $state(false);
    let showGifListenStudy = $state(false);
</script>

<div 
    id="proyectos"
    class="min-h-screen w-full bg-gray-800 py-20"
>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center mb-16">
            <h1 class="text-5xl md:text-6xl p-3 font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                Mis Proyectos
            </h1>
            <!-- Linea decorativa -->
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p class="text-xl text-slate-400 mt-6 max-w-3xl mx-auto">
                Una selección de proyectos que demuestran mis habilidades en desarrollo web moderno y mi pasión por crear experiencias digitales.
            </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <!-- Project 1: Airsoft Atlántico -->
           <AirsoftAtlantico 
                showGif={showGif}
              />

            <!-- Project 2: Historiatelo -->
            <Historiatelo 
                showGifHistoriatelo={showGifHistoriatelo}
            />

            <!-- Project 3: GePro -->
            <GePro 
                showGifGepro={showGifGepro}
            />

            <!-- Project 4: ListenStudy -->
            <ListenStudyCard 
                showGifListenStudy={showGifListenStudy}
            />
        </div>

        <!-- GitHub Button or Contact Button -->

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