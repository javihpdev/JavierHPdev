<script lang="ts">
	import Enlace from "../../web/Enlace.svelte";
	import MenuHamburguer from "./MenuHamburguer/MenuHamburguer.svelte";

    type Props = {
        class?: string;
    }
    
    let { class: addClass=""} : Props = $props();
    

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

        <MenuHamburguer />
           
</nav>
