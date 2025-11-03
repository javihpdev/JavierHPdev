<script lang="ts">
	import Enlace from "../web/Enlace.svelte";

   type Props = {
       class?: string;
   }

   let { class: addClass="" } : Props = $props();

   let isOpen = false;

   function toggleClick() {
      isOpen = !isOpen;
   }
</script>

<header class="flex justify-between text-lg fixed w-full text-white p-5 bg-transparent z-50 {addClass}">
   <div class="flex pl-10">
      <Enlace href="/" class="flex text-2xl font-bold hover:scale-105 transition-all duration-300 ">JhpDev</Enlace>
   </div>
   <div class="flex pr-10 gap-4">
      <Enlace href="/#inicio" ariaLabel="Ir a Inicio" class='text-white'>Inicio</Enlace>
      <Enlace href="/modules/aboutMe" ariaLabel="Ir a Sobre Mi" class='text-white'>Sobre Mi</Enlace>
      <Enlace href="/modules/experiencia" ariaLabel="Ir a Experiencia" class='text-white'>Experiencia</Enlace>
      <Enlace href="/modules/estudios" ariaLabel="Ir a Estudios" class='text-white'>Estudios</Enlace>
      <Enlace href="/modules/proyectos" ariaLabel="Ir a Proyectos" class='text-white'>Proyectos</Enlace>
      <Enlace href="/modules/contacto" ariaLabel="Ir a Contacto" class='text-white'>Contacto</Enlace>
   </div>
</header>
