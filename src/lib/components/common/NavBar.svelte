<script lang="ts">
	import Enlace from "../web/Enlace.svelte";

    type Props = {
        class?: string;
    }
    
    let { class: addClass=""} : Props = $props();
</script>

<nav class="flex w-full justify-between px-10 py-5 bg-transparent items-center  gap-50 z-100 {addClass}">
    <div class="flex
     text-white font-bold text-2xl tracking-widest">
        <p>JHPDEV</p>
    </div>

        <div class="flex gap-10 text-white font-semibold text-sm ">
            <Enlace href="#inicio" class="flex tracking-[5px] hover:text-gray-600 transition-colors duration-500">INICIO</Enlace>
            <Enlace href="#experiencia" class="flex tracking-[5px] hover:text-gray-600 transition-colors duration-500">EXPERIENCIA</Enlace>
            <Enlace href="#estudios" class="flex tracking-[5px] hover:text-gray-600 transition-colors duration-500">ESTUDIOS</Enlace>
            <Enlace href="#proyectos" class="flex tracking-[5px] hover:text-gray-600 transition-colors duration-500">PROYECTOS</Enlace>
            <Enlace href="#contacto" class="flex tracking-[5px] hover:text-gray-600 transition-colors duration-500">CONTACTO</Enlace>
        </div>

            <!-- NOTE: Poner el menu hamburguesa para el movil -->
</nav>
