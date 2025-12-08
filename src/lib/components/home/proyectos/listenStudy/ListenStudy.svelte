<script lang="ts">
    import { goto } from '$app/navigation';

    function handleContactClick(e: MouseEvent) {
        e.preventDefault();
        goto('/#contacto').then(() => {
            setTimeout(() => {
                const element = document.getElementById('contacto');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        });
    }

    function handleProyectosClick(e: MouseEvent) {
        e.preventDefault();
        goto('/#proyectos').then(() => {
            setTimeout(() => {
                const element = document.getElementById('proyectos');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        });
    }
</script>

<div class="relative w-full h-screen bg-gradient-to-br from-[#2D1B69] via-[#1e1642] to-[#0f0a24] flex flex-col items-center justify-center px-4 py-6 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 w-48 h-48 bg-[#FFB800]/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-10 right-10 w-56 h-56 bg-[#4ECDC4]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-3xl w-full text-center">
        <!-- Logo -->
        <div class="mb-6 flex justify-center">
            <h1 class="text-4xl md:text-5xl font-bold">
                <span class="text-[#4ECDC4]">Listen</span><span class="text-[#FFB800]">Study</span>
            </h1>
        </div>

        <!-- Animated SVG - Headphones with Sound Waves -->
        <div class="mb-6 flex justify-center">
            <svg class="w-32 h-32 md:w-40 md:h-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Headphones -->
                <path 
                    d="M60 80 Q60 40, 100 40 Q140 40, 140 80" 
                    stroke="#4ECDC4" 
                    stroke-width="6" 
                    stroke-linecap="round"
                    fill="none"
                    class="animate-draw"
                />
                
                <!-- Left Speaker -->
                <rect x="50" y="80" width="20" height="40" rx="5" fill="#FFB800" class="animate-pulse"/>
                <rect x="53" y="85" width="14" height="30" rx="3" fill="#2D1B69"/>
                
                <!-- Right Speaker -->
                <rect x="130" y="80" width="20" height="40" rx="5" fill="#FFB800" class="animate-pulse"/>
                <rect x="133" y="85" width="14" height="30" rx="3" fill="#2D1B69"/>
                
                <!-- Sound Waves Left -->
                <path d="M 30 90 Q 25 100, 30 110" stroke="#4ECDC4" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6" class="animate-wave"/>
                <path d="M 20 85 Q 12 100, 20 115" stroke="#4ECDC4" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.4" class="animate-wave-delay-1"/>
                <path d="M 10 80 Q 0 100, 10 120" stroke="#4ECDC4" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.2" class="animate-wave-delay-2"/>
                
                <!-- Sound Waves Right -->
                <path d="M 170 90 Q 175 100, 170 110" stroke="#FFB800" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6" class="animate-wave"/>
                <path d="M 180 85 Q 188 100, 180 115" stroke="#FFB800" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.4" class="animate-wave-delay-1"/>
                <path d="M 190 80 Q 200 100, 190 120" stroke="#FFB800" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.2" class="animate-wave-delay-2"/>
            </svg>
        </div>

        <!-- Status Badge -->
        <div class="inline-flex items-center px-4 py-2 bg-[#FFB800]/20 border border-[#FFB800]/30 rounded-full mb-4">
            <span class="w-2 h-2 bg-[#FFB800] rounded-full mr-2 animate-ping"></span>
            <span class="text-[#FFB800] font-semibold text-sm">En Desarrollo</span>
        </div>

        <!-- Main Message -->
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">
            Algo increíble está en camino
        </h2>
        
        <p class="text-base text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed">
            Estamos trabajando en una plataforma revolucionaria para transformar tu experiencia de aprendizaje. 
            Pronto podrás disfrutar de <span class="text-[#4ECDC4] font-semibold">ListenStudy</span>.
        </p>

        <!-- Progress Indicators -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div class="w-10 h-10 bg-[#4ECDC4]/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg class="w-5 h-5 text-[#4ECDC4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                    </svg>
                </div>
                <h3 class="text-white font-semibold text-sm mb-1">Audio Interactivo</h3>
                <p class="text-gray-400 text-xs">Contenido de audio optimizado</p>
            </div>

            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div class="w-10 h-10 bg-[#FFB800]/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg class="w-5 h-5 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                </div>
                <h3 class="text-white font-semibold text-sm mb-1">Aprendizaje Adaptativo</h3>
                <p class="text-gray-400 text-xs">Personalizado a tu ritmo</p>
            </div>

            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div class="w-10 h-10 bg-[#4ECDC4]/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg class="w-5 h-5 text-[#4ECDC4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 class="text-white font-semibold text-sm mb-1">Experiencia Fluida</h3>
                <p class="text-gray-400 text-xs">Interfaz intuitiva y moderna</p>
            </div>
        </div>

        <!-- CTA Button -->
        <button
            onclick={handleProyectosClick}
            class="inline-flex items-center cursor-pointer px-6 py-3 bg-gradient-to-r from-[#4ECDC4] to-[#FFB800] text-[#2D1B69] font-bold text-base rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Volver a Proyectos
        </button>

        <!-- Footer Info -->
        <p class="mt-6 text-gray-500 text-xs">
            ¿Tienes alguna pregunta? 
            <button 
                onclick={handleContactClick}
                class="text-[#4ECDC4] hover:text-[#FFB800] transition-colors underline cursor-pointer"
            >
                Contáctame
            </button>
        </p>
    </div>
</div>

<style>
    @keyframes draw {
        from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
        }
        to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
        }
    }

    @keyframes wave {
        0%, 100% {
            opacity: 0.6;
            transform: translateX(0);
        }
        50% {
            opacity: 1;
            transform: translateX(-5px);
        }
    }

    .animate-draw {
        animation: draw 2s ease-in-out infinite;
    }

    .animate-wave {
        animation: wave 2s ease-in-out infinite;
    }

    .animate-wave-delay-1 {
        animation: wave 2s ease-in-out infinite;
        animation-delay: 0.3s;
    }

    .animate-wave-delay-2 {
        animation: wave 2s ease-in-out infinite;
        animation-delay: 0.6s;
    }

    .delay-1000 {
        animation-delay: 1s;
    }
</style>