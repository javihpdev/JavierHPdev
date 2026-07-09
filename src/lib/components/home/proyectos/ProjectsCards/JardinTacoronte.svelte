<script lang="ts">
	import ProyectCard from "$lib/components/atoms/ProyectCard.svelte";

    type Props = {
        showGifJardinTacoronte?: boolean;
    };
    let { showGifJardinTacoronte = $bindable(false) }: Props = $props();
</script>

<ProyectCard
    showGif={showGifJardinTacoronte}
    hrefProyect="https://jardin-de-tacoronte.vercel.app/inicio"
    srcGif="/gif/jardintacoronte.gif"
    srcImage="/images/logoJardin.png"
    altGif="Vista previa del proyecto Jardin de Tacoronte"
    altImage="Vista previa del proyecto Jardin de Tacoronte"
    nameProyect="Jardin de Tacoronte"
    description="Web comercial para el Jardín de Tacoronte, un espacio de ocio y entretenimiento en Tenerife. Diseñada para ofrecer información sobre el lugar, servicios y eventos, atrayendo a visitantes potenciales."
    bgGradient="from-gold to-slate-600"
    hoverTextName="group-hover:text-gold"
    hoverBorder="hover:border-gold"
    circleStateBg="bg-green-500"
    shadowColor="shadow-amber-500/20"
    gifFit="object-contain"
    techStack={['TypeScript', 'Angular 21', 'TailwindCSS', 'Vercel', 'JWT']}
/>
