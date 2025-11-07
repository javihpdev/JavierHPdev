<script lang="ts">
    type Props = {
      class?: string;
    }

    let { class: addClass="", } : Props = $props();
</script>

<div 
    id="estudios"
    class="min-h-screen w-full bg-gray-900 py-20"
>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center mb-16">
            <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                Formación Académica
            </h1>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p class="text-xl text-slate-400 mt-6 max-w-3xl mx-auto">
                Mi formación académica me ha proporcionado una base en desarrollo web y en las tecnologías más demandadas del mercado como JavaScript, HTML, CSS, PHP y Bases de Datos: MySQL.
            </p>
        </div>

        <!-- Main Education Card -->
        <div class="relative mb-16">
            <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
                <!-- Background Decoration -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
                
                <!-- Education Header -->
                <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between mb-10">
                    <div class="text-center lg:text-left mb-8 lg:mb-0">
                        <div class="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                            <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Grado Superior
                        </div>
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">
                            Desarrollo de Aplicaciones Web
                        </h2>
                        <p class="text-xl text-purple-400 font-medium mb-2">LinkiaFP</p>
                        <p class="text-slate-400">2023 - 2025</p>
                    </div>
                    
                    <!-- Institution Logo -->
                    <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:scale-105 transition-all duration-300 shadow-lg">
                        <a href="https://linkiafp.es/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb&utm_content=linkiafpadistancia" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="/images/nlogo-linkia.webp" 
                                alt="LinkiaFP Logo" 
                                class="h-10 filter brightness-110"
                            />
                        </a>
                    </div>
                </div>

                <!-- Description -->
                <div class="relative z-10 mb-10">
                    <p class="text-lg text-slate-300 leading-relaxed text-center lg:text-left">
                        Formación especializada en el desarrollo de aplicaciones web modernas, cubriendo tanto el frontend como el backend. 
                        Adquirí conocimientos sólidos en las tecnologías fundamentales del desarrollo web y las mejores prácticas de la industria.
                    </p>
                </div>

                <!-- Technologies Grid -->
                <div class="relative z-10">
                    <h3 class="text-2xl font-bold text-white mb-8 text-center">Tecnologías Aprendidas</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        <!-- JavaScript Card -->
                        <div class="group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                            <div class="flex flex-col items-center text-center">
                                <div class="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                                    <svg class="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                                    </svg>
                                </div>
                                <h4 class="text-lg font-semibold text-yellow-400 mb-2">JavaScript</h4>
                                <p class="text-sm text-slate-400">Desarrollo de lógica interactiva en el lado del cliente</p>
                            </div>
                        </div>

                        <!-- HTML Card -->
                        <div class="group bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                            <div class="flex flex-col items-center text-center">
                                <div class="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                                    <svg class="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                                    </svg>
                                </div>
                                <h4 class="text-lg font-semibold text-orange-400 mb-2">HTML5</h4>
                                <p class="text-sm text-slate-400">Estructuración semántica de contenido web</p>
                            </div>
                        </div>

                        <!-- CSS Card -->
                        <div class="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                            <div class="flex flex-col items-center text-center">
                                <div class="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                                    <svg class="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                                    </svg>
                                </div>
                                <h4 class="text-lg font-semibold text-blue-400 mb-2">CSS3</h4>
                                <p class="text-sm text-slate-400">Estilos avanzados y diseño responsive</p>
                            </div>
                        </div>

                        <!-- PHP Card -->
                        <div class="group bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                            <div class="flex flex-col items-center text-center">
                                <div class="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                                    <svg class="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.417.313-.295.478-.684.478-1.178 0-.433-.117-.785-.353-1.053-.237-.269-.557-.403-.796-.403v.003zm4.581 0h-.943l-.516 2.648h.838c.557 0 .983-.122 1.293-.417.314-.295.478-.684.478-1.178 0-.433-.117-.785-.354-1.053-.236-.269-.557-.403-.796-.403v.003zm0 0h-.943l-.516 2.648h.838c.557 0 .983-.122 1.293-.417.314-.295.478-.684.478-1.178 0-.433-.117-.785-.354-1.053-.236-.269-.557-.403-.796-.403v.003zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM8.5 8.287c.896 0 1.616.269 2.161.805.546.537.854 1.231.854 2.081 0 .821-.308 1.54-.924 2.157-.616.617-1.392.925-2.33.925h-.808l-.458 2.262H5.31l1.358-6.23H8.5zm7.653 0c.896 0 1.616.269 2.161.805.546.537.854 1.231.854 2.081 0 .821-.308 1.54-.924 2.157-.616.617-1.392.925-2.33.925h-.808l-.458 2.262H13.46l1.358-6.23h1.832z"/>
                                    </svg>
                                </div>
                                <h4 class="text-lg font-semibold text-purple-400 mb-2">PHP</h4>
                                <p class="text-sm text-slate-400">Desarrollo backend y gestión de servidores</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Achievement Highlights -->
                <div class="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                        <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-green-400 mb-2">Proyecto Final</h4>
                        <p class="text-sm text-slate-400">Desarrollo completo de aplicación web: <a href="#gepro" class="font-semibold bg-gradient-to-r bg-clip-text text-transparent from-green-400  to-orange-400 italic">GePro</a></p>
                    </div>

                    <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 text-center">
                        <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-blue-400 mb-2">Prácticas</h4>
                        <p class="text-sm text-slate-400">Experiencia real en empresa: <a href="#historiatelo" class="font-semibold bg-gradient-to-r bg-clip-text text-transparent from-white to-pink-400 italic">TipoMedia</a></p>
                    </div>

                    <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 text-center">
                        <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-purple-400 mb-2">Certificación</h4>
                        <p class="text-sm text-slate-400">Título oficial reconocido</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center">
            <a 
                href="https://goo.su/b9F3U4" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
                <span>Conocer más sobre LinkiaFP</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
            </a>
        </div>
    </div>
</div>