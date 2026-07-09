<script lang="ts">
	import ProyectCard from "$lib/components/atoms/ProyectCard.svelte";

    type Props = {
        showGifListenStudy?: boolean;
    };
    let { showGifListenStudy = $bindable(false) }: Props = $props();
</script>

<ProyectCard
    showGif={showGifListenStudy}
    hrefProyect="https://listen-study.vercel.app/"
    srcGif="/gif/listenstudypreview.gif"
    srcImage="/images/logoListenStudy.webp"
    altGif="Vista previa del proyecto ListenStudy"
    altImage="Vista previa del proyecto ListenStudy"
    nameProyect="ListenStudy"
    description="Plataforma web moderna para la escucha de archivos de texto a voz, diseñada para estudiantes."
    bgGradient="from-cyan-500 via-blue-500 to-pink-500"
    hoverTextName="group-hover:text-cyan-500"
    hoverBorder="hover:border-cyan-500/50"
    circleStateBg="bg-green-500"
    techStack={['TypeScript', 'Svelte', 'TailwindCSS', 'Drizzle ORM', 'PostgreSQL', 'Vercel', 'Supabase', 'Google Cloud TTS', 'JWT']}
/>
