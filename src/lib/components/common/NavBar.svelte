<script lang="ts">
	import Enlace from "../web/Enlace.svelte";

    type Props = {
        class?: string;
    }
    
    let { class: addClass=""} : Props = $props();
    let isOpen = $state(false);

    function toggleMenu() {
        isOpen = !isOpen;
    }
    function closeMenu() {
        isOpen = false;
    }

</script>

<nav class="flex flex-col lg:flex-row w-full max-w-full justify-center py-5 bg-transparent items-center gap-5  {addClass}">
    <div class="flex justify-center items-center w-full text-white font-bold text-2xl tracking-widest">
        <p>JHPDEV</p>
    </div>

        <div class=" gap-10 text-white font-semibold text-sm lg:flex w-full max-w-full hidden">
          <Enlace targetId="inicio" class="flex tracking-[5px] hover:text-gray-600 transition-colors duration-500">INICIO</Enlace>
          <Enlace targetId="proyectos" class="flex tracking-[5px] hover:text-gray-600 transition-colors duration-500">PROYECTOS</Enlace>
            <Enlace targetId="experiencia" class="flex tracking-[5px] hover:text-gray-600 transition-colors duration-500">EXPERIENCIA</Enlace>
            <Enlace targetId="estudios" class="flex tracking-[5px] hover:text-gray-600 transition-colors duration-500">ESTUDIOS</Enlace>
            <Enlace targetId="contacto" class="flex tracking-[5px] hover:text-gray-600 transition-colors duration-500">CONTACTO</Enlace>
        </div>

            <!-- NOTE: Poner el menu hamburguesa para el movil -->

            <div class="flex flex-col lg:flex-row justify-center items-center outline-none">
        <!-- Botón hamburguesa con animación -->
       <!-- Este padding es para separar la hamburguesa de la imagen de historiatelo -->
       <div class="-translate-y-0.5 lg:pt-0">
      <button class="p-1 lg:hidden flex flex-col gap-1" aria-label="Boton Menu" onclick={toggleMenu}>
        <!-- Ponemos {` `} para que svelte entienda la logica de javascript si lo ponmos con " " no es dinamico -->
        <span class={`block h-1 w-6 bg-white transition-all duration-700 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span class={`block h-1 w-6 bg-white transition-all duration-700 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span class={`block h-1 w-6 bg-white transition-all duration-700 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
          </div>
      <!-- Menu con los links al desplegar el menu hamburguesa -->
      <div class={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div class="flex flex-col lg:hidden items-center gap-5 text-white p-4 text-lg font-bold ">
              <button onclick={closeMenu}>
              <Enlace class="hover:text-gray-600 transition-colors duration-500" targetId="inicio">Inicio</Enlace>
            </button>
            <button onclick={closeMenu}>
              <Enlace class="hover:text-gray-600 transition-colors duration-500" targetId="proyectos">Proyectos</Enlace>
            </button>
            <button onclick={closeMenu}>
              <Enlace class="hover:text-gray-600 transition-colors duration-500" targetId="experiencia">Experiencia</Enlace>
            </button>
            <button onclick={closeMenu}>
              <Enlace class="hover:text-gray-600 transition-colors duration-500" targetId="estudios">Estudios</Enlace>
            </button>
            <button onclick={closeMenu}>
              <Enlace class="hover:text-gray-600 transition-colors duration-500" targetId="contacto">Contacto</Enlace>
            </button>
      </div>
      </div>
  </div>
</nav>
