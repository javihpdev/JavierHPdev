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
    description="Web para la Asociación de Airsoft del Atlántico en Tenerife. Plataforma que ofrece información sobre la asociación, sus partidas legales y seguras, modalidades de juego (captura la bandera, baja confirmada, bomba), normativa de potencia y contacto para nuevos jugadores."
    bgGradient="from-blue-500 to-white"
    hoverTextName="group-hover:text-blue-400"
    hoverBorder="hover:border-blue-500/50"
    circleStateBg="bg-green-500"
    shadowColor="shadow-blue-500/20"
    techStack={['TypeScript', 'Svelte', 'TailwindCSS', 'Vercel']}
/>