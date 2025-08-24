<script lang="ts">
	import Enlace from "../web/Enlace.svelte";

   type Props = {
       class?: string;
   }

   let { class: addClass="" } : Props = $props();
</script>

<header class="flex justify-between text-xl fixed w-full text-white p-5 bg-transparent z-50">
   <div class="flex pl-10">
      <h1 class="flex  text-2xl font-bold">JhpDev</h1>
   </div>
   <div class="flex pr-10 gap-4">
      <Enlace href="Inicio" ariaLabel="Ir a Inicio" class='text-white'>Inicio</Enlace>
      <Enlace href="SobreMi" ariaLabel="Ir a Sobre Mi" class='text-white'>Sobre Mi</Enlace>
      <Enlace href="Experiencia" ariaLabel="Ir a Experiencia" class='text-white'>Experiencia</Enlace>
      <Enlace href="Estudios" ariaLabel="Ir a Estudios" class='text-white'>Estudios</Enlace>
      <Enlace href="Proyectos" ariaLabel="Ir a Proyectos" class='text-white'>Proyectos</Enlace>
      <Enlace href="Contacto" ariaLabel="Ir a Contacto" class='text-white'>Contacto</Enlace>
   </div>
</header>
