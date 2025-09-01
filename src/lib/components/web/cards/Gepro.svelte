<script lang="ts">
  import LinkExternal from "$lib/components/web/LinkExternal.svelte";
	import Enlace from "../Enlace.svelte";

</script>

<section class="flex flex-col justify-center items-center p-5 w-90 rounded-none shadow-none lg:shadow-[0_0_25px_5px] lg:shadow-black lg:rounded-2xl gap-5 ">
      <div class="flex relative justify-center items-center transition-all duration-500 hover:scale-110">
        <Enlace href="/modules/proyectos/geprobeta" class="rounded-full w-40 h-40">
          <img
            src="/src/lib/images/LogoEmpresa.png"
            alt="Imagen Proyecto GePro"
            class="w-40 h-40"
          />
        </Enlace>
        <LinkExternal class="absolute top-0 right-[-20px]" />
      </div>
      <span class="text-2xl  font-bold">GePro</span>
      <span>Es una aplicación web diseñada para la administración de proyectos, permitiendo la gestión de
        múltiples proyectos, cada uno con sus respectivos grupos de trabajo y empleados asignados.
        Ofrece un sistema de gestión de base de datos para administrar los proyectos, grupos,
        empleados, reuniones y tareas. La plataforma proporcionará una interfaz intuitiva tanto para
        empleados como para administradores.
      </span>
      <div class="flex items-center gap-3">
        <a
          href="https://www.php.net/manual/es/"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110 shadow-[#474A8A] bg-white opacity-80 text-[0.8rem] text-[#787CB5] border-[#787CB5]"
        >
          PHP
        </a>
        <a
          href="https://tailwindcss.com/docs/installation/using-vite"
          target="_blank"
          rel="noopener norefer"
          class="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110 shadow-teal-600 bg-white opacity-80 text-[0.8rem] text-teal-500 border-teal-500"
        >
          TAILWINDCSS
        </a>
      </div>
    </section>