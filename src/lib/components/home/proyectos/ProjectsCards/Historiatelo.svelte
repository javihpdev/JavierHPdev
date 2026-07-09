<script lang="ts">
	import ProyectCard from "$lib/components/atoms/ProyectCard.svelte";

    type Props = {
        showGifHistoriatelo?: boolean;
    };
    let { showGifHistoriatelo = $bindable(false) }: Props = $props();
</script>

<ProyectCard
    showGif={showGifHistoriatelo}
    wrapperId="historiatelo"
    hrefProyect="https://historiatelo.org/"
    srcGif="/gif/historiatelo-preview.gif"
    srcImage="/images/historiatelo.png"
    altGif="Vista previa Historiatelo"
    altImage="Vista previa Historiatelo"
    nameProyect="Historiatelo"
    description="Plataforma digital educativa para compartir y descubrir contenido histórico de manera interactiva y engaging."
    bgGradient="from-yellow-500 to-[#00ACC9]"
    hoverTextName="group-hover:text-yellow-400"
    hoverBorder="hover:border-yellow-500/50"
    circleStateBg="bg-green-500"
    shadowColor="shadow-yellow-500/20"
    techStack={['TypeScript', 'Svelte', 'TailwindCSS', 'Drizzle ORM']}
/>
