<script lang="ts">
	import ProyectCard from "$lib/components/atoms/ProyectCard.svelte";

    type Props = {
        showGif?: boolean;
    };
    let { showGif = $bindable(false) }: Props = $props();
</script>

<ProyectCard
    showGif={showGif}
    hrefProyect="https://www.airsoftatlantico.com/"
    srcGif="/gif/airsoft-preview.gif"
    srcImage="/images/logo.png"
    altGif="Vista previa del proyecto Airsoft Atlántico"
    altImage="Vista previa del proyecto Airsoft Atlántico"
    nameProyect="Airsoft Atlántico"
    description="Plataforma web moderna para comunidad de airsoft con diseño responsive y experiencia de usuario optimizada."
    bgGradient="from-blue-500 to-purple-600"
    hoverTextName="group-hover:text-blue-400"
    hoverBorder="hover:border-blue-500/50"
    circleStateBg="bg-green-500"
    shadowColor="shadow-blue-500/20"
    techStack={['TypeScript', 'Svelte', 'TailwindCSS', 'JavaScript']}
/>
