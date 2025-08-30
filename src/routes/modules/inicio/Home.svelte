<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "$lib/components/web/Button.svelte";
	import Contacto from "../contacto/Contacto.svelte";

    type Props = {
        class?: string;
    }

    let { class: addClass=""} : Props = $props();
    
    let isTransitioning = $state(false);

    function handleButtonClick(event: MouseEvent) {
        const button = event.currentTarget as HTMLButtonElement;
        const rect = button.getBoundingClientRect();

        // Guardar posición del botón para la animación
        const buttonCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
        
        // Crear elemento circular para la animación
        const circle = document.createElement('div');
        circle.style.position = 'fixed';
        circle.style.left = buttonCenter.x + 'px';
        circle.style.top = buttonCenter.y + 'px';
        circle.style.width = '0px';
        circle.style.height = '0px';
        circle.style.backgroundColor = '#2B7FFF';
        circle.style.borderRadius = '50%';
        circle.style.transform = 'translate(-50%, -50%)';
        circle.style.zIndex = '9999';
        circle.style.pointerEvents = 'none';
        circle.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        document.body.appendChild(circle);
        
        // Iniciar animación
        isTransitioning = true;
        
        // Expandir el círculo
        requestAnimationFrame(() => {
            const maxDimension = Math.max(window.innerWidth, window.innerHeight) * 2;
            circle.style.width = maxDimension + 'px';
            circle.style.height = maxDimension + 'px';
        });
        
        // Limpiar después de la animación
        setTimeout(() => {
            document.body.removeChild(circle);
            goto('/modules/aboutMe');
        }, 800);
    }
</script>

<style>
    .gradient-text {
        background: linear-gradient(
            135deg, 
            #3b82f6 0%, 
            #8b5cf6 25%,
            #06b6d4 50%,
            #8b5cf6 75%,
            #3b82f6 100%
        );
        background-size: 200% 200%;
        animation: gradient-move 3s ease-in-out infinite, fade-in 1.5s ease forwards;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        opacity: 0;
    }
    
    @keyframes gradient-move {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slide-in-up {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fade-out {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .hero-content {
        transition: opacity 0.3s ease-out;
    }
    
    .hero-content.transitioning {
        animation: fade-out 0.3s ease-out forwards;
    }
    
    /* .contact-content {
        animation: slide-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        animation-delay: 0.4s;
        opacity: 0;
        animation-fill-mode: both;
    }
    
    .contact-item {
        animation: slide-in-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        opacity: 0;
        animation-fill-mode: both;
    }
    
    .contact-item:nth-child(1) { animation-delay: 0.6s; }
    .contact-item:nth-child(2) { animation-delay: 0.7s; }
    .contact-item:nth-child(3) { animation-delay: 0.8s; }
    .contact-item:nth-child(4) { animation-delay: 0.9s; } */
</style>

<div class="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#0a1628] via-[#1e3a8a] to-[#0f172a]">
    <div class="flex flex-col w-full justify-center items-center">
        
        <!-- Contenido del Hero -->
        <div class="hero-content flex flex-col w-250 border border-gray-800 rounded-3xl px-10 py-12 shadow-2xl shadow-black" class:transitioning={isTransitioning}>
            <!-- Nombre con gradiente animado -->
            <h1 class="gradient-text text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-center leading-tight">
                Javier Hernández Pérez
            </h1>
            
            <!-- Subtítulo -->
            <p class="text-slate-300 text-xl md:text-2xl font-light mb-8 text-center tracking-wide">
                Full Stack Developer
            </p>
            
            <!-- Descripción -->
            <p class="text-slate-400 text-base md:text-lg leading-relaxed mb-10 text-center max-w-md mx-auto">
                Especializado en crear experiencias web modernas con tecnologías de vanguardia y diseño centrado en el usuario.
            </p>
            
            <div class="flex justify-center">
                <Button 
                    type="button" 
                    text="Más información" 
                    class="bg-blue-500/10 border border-blue-400/30 px-6 py-3 rounded-2xl font-semibold hover:bg-[#152651] hover:scale-105 transition-all duration-300 cursor-pointer"
                    onclick={handleButtonClick}
                />
            </div>
        </div>
      
    </div>
</div>
