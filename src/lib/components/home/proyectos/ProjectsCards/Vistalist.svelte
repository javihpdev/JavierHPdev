<script lang="ts">
	import ProyectCard from "$lib/components/atoms/ProyectCard.svelte";

    type Props = {
        showGifVistalist?: boolean;
    };
    let { showGifVistalist = $bindable(false) }: Props = $props();
</script>

<ProyectCard
    showGif={showGifVistalist}
    hrefProyect="https://vitalist.vercel.app/"
    srcGif="/gif/vitalist-preview.gif"
    srcImage="/images/avif_vitalistIcon.avif"
    altGif="Vista previa del proyecto Vitalist"
    altImage="Vista previa del proyecto Vitalist"
    nameProyect="Vitalist"
    description="Plataforma de gestión de rutinas diarias con seguimiento de hábitos, autenticación segura y almacenamiento en la nube para sincronizar tus tareas en cualquier dispositivo"
    bgGradient="from-cyan-500 to-green-600"
    hoverTextName="group-hover:text-cyan-400"
    hoverBorder="hover:border-cyan-500/50"
    circleStateBg="bg-orange-500"
    stateName="Early Access"
    shadowColor="shadow-blue-500/20"
    techStack={['TypeScript', 'Angular 21', 'TailwindCSS', 'Drizzle ORM', 'PostgreSQL', 'Vercel', 'Supabase', 'JWT']}
/>
