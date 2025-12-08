<script lang="ts">
    import { goto } from '$app/navigation';

    function handleBackClick(e: MouseEvent) {
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
</script>

<div class="relative w-full h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('/images/pixels14.jpg')] bg-cover bg-center bg-fixed"></div>
    </div>
    

    <!-- Main Content -->
    <div class="relative flex flex-col items-center justify-center h-full px-6 py-8 z-10">
        <!-- Logo Container -->
        <div class="mb-6 relative group">
            <div class="relative bg-slate-900/80 rounded-3xl p-6 border border-slate-700/50">
                <img 
                    src="/images/LogoEmpresa.png" 
                    alt="Logo GePro - Sistema de Gestión Empresarial" 
                    class="w-48 h-48 md:w-56 md:h-56 object-contain"
                />
            </div>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 max-w-5xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-green-400 to-orange-400 animate-gradient">
                GePro
            </span>
            <span class="block text-xl md:text-3xl lg:text-4xl mt-3 text-slate-300 font-semibold">
                En Proceso de Desarrollo
            </span>
        </h1>

        <!-- Status Badge -->
        <div class="inline-flex items-center px-5 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
            <span class="relative flex h-2.5 w-2.5 mr-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span class="text-orange-400 font-semibold text-base">Sistema en Construcción</span>
        </div>

        <!-- Description -->
        <p class="text-slate-400 text-center text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
            Estamos trabajando en una solución integral de gestión empresarial. 
            Pronto podrás descubrir todas las funcionalidades de <span class="text-emerald-400 font-semibold">GePro</span>.
        </p>

        <!-- CTA Button -->
        <button
            onclick={handleBackClick}
            class="group relative inline-flex cursor-pointer items-center gap-3 px-7 py-3 bg-gradient-to-r from-emerald-500 to-orange-500 text-white font-bold text-base rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50"
        >
            <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Volver a Proyectos
        </button>

        <!-- Footer Info -->
        <p class="mt-8 text-slate-500 text-sm">
            Trabajo Final de Grado · 2024 - 2025
        </p>
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

