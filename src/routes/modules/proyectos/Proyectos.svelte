<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "$lib/components/web/Button.svelte";
	import Gepro from "$lib/components/web/cards/Gepro.svelte";
	import Historiatelo from "$lib/components/web/cards/Historiatelo.svelte";


  
</script>
      
      <div id="proyectos"
        class="flex flex-col w-full justify-center text-center items-center gap-10"
      >
            <article class="flex flex-col w-full max-w-[95%] text-white justify-center rounded-2xl items-center gap-10 pt-20">
            <h1 class="text-5xl font-bold">Proyectos</h1>
                <div class="flex lg:flex-row flex-col lg:flex-wrap max-w-full pb-10 pt-10 justify-center items-center gap-10">
                <Historiatelo />
                <span class="block lg:hidden h-0.5 w-full"></span>
                <Gepro />
                <span class="block lg:hidden h-0.5 w-full"></span>
                </div>
            </article>
            <Button type="button" 
            class="bg-blue-500/10 border border-blue-400/30 px-6 py-3 rounded-2xl font-semibold hover:bg-[#152651] hover:scale-105 transition-all duration-300 cursor-pointer"
            onclick={() => goto("/modules/aboutMe")} text="Ir a Inicio">
        </Button>
        </div>