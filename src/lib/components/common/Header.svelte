<script lang="ts">
	import Enlace from "../web/Enlace.svelte";

   type Props = {
       class?: string;
   }

   let { class: addClass="" } : Props = $props();
</script>

<header class="flex justify-between text-lg fixed w-full text-white p-5 bg-transparent z-50">
   <div class="flex pl-10">
      <h1 class="flex  text-2xl font-bold">JhpDev</h1>
   </div>
   <div class="flex pr-10 gap-4">
      <Enlace href="/#inicio" ariaLabel="Ir a Inicio" class='text-white'>Inicio</Enlace>
      <Enlace href="/#sobre-mi" ariaLabel="Ir a Sobre Mi" class='text-white'>Sobre Mi</Enlace>
      <Enlace href="/#experiencia" ariaLabel="Ir a Experiencia" class='text-white'>Experiencia</Enlace>
      <Enlace href="/#estudios" ariaLabel="Ir a Estudios" class='text-white'>Estudios</Enlace>
      <Enlace href="/#proyectos" ariaLabel="Ir a Proyectos" class='text-white'>Proyectos</Enlace>
      <Enlace href="/#contacto" ariaLabel="Ir a Contacto" class='text-white'>Contacto</Enlace>
   </div>
</header>
