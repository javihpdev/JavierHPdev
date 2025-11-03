<script lang="ts">
import LinkExternal from "$lib/components/web/LinkExternal.svelte";

type Props = {
    class?: string;
  };

  let { class: addClass = '' }: Props = $props();
</script>

<section class="flex flex-col justify-center items-center w-90 p-5 rounded-none shadow-none lg:shadow-[0_0_25px_5px] lg:shadow-black lg:rounded-2xl gap-5">
            <div class="flex relative justify-center items-center transition-all duration-500 hover:scale-110">
            <a href="https://historiatelo.org/" target="_blank" class="flex">
                <img src="/src/lib/images/historiatelo.png" alt="Imagen Proyecto Historiatelo" class="flex bg-[#11B3AD] shadow-[0_0_25px_5px]  shadow-[#3D3027] rounded-full w-40 h-40 " />
            </a>
            <LinkExternal class="absolute top-0 right-[-20px]" />
            </div>
            <div class="flex flex-col gap-4">
            <span class="text-2xl font-bold">Historiatelo</span>
            <span>-Página y aplicación web Historiatelo: Svelte, Tailwindcss, TypeScrip</span>
            <span>Historiatelo aspira a ser una plataforma de acceso libre para la edición y consulta de contenido diverso elaborado por la comunidad global.</span>
            </div>
            <div class="flex items-center gap-3">
                <a href="https://svelte.dev/docs/svelte/overview" target="_blank"
                class="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110 shadow-orange-600 bg-white opacity-80 text-[0.8rem] text-orange-500 border-orange-500">
                    SVELTE
                </a>
                <a href="https://www.typescriptlang.org/docs/" target="_blank"
                class="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110 shadow-blue-600 bg-white opacity-80 text-[0.8rem] text-blue-500 border-blue-500">
                    TYPESCRIPT</a>
                <a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank"
                class="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110  shadow-teal-600 bg-white opacity-80 text-[0.8rem] text-teal-500 border-teal-500">
                    TAILWINDCSS</a>
            </div> 
        </section>