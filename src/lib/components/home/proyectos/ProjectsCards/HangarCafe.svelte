<script lang="ts">
	import ProyectCard from "$lib/components/atoms/ProyectCard.svelte";

    type Props = {
        showGifHangarCafe?: boolean;
    };
    let { showGifHangarCafe = $bindable(false) }: Props = $props();
</script>

<ProyectCard
    showGif={showGifHangarCafe}
    hrefProyect="https://hangar-cafe.vercel.app/"
    srcGif="/gif/hangarcafe.gif"
    srcImage="/images/logoHangar.avif"
    altGif="Vista previa del proyecto Hangar Cafe"
    altImage="Vista previa del proyecto Hangar Cafe"
    nameProyect="Hangar Cafe"
    description="Aplicación interactiva de la carta del establecimiento Hangar Cafe. Permite a los clientes explorar el menú, ver imágenes de los platos y realizar la comanda de manera sencilla y rápida."
    bgGradient="from-orange-500 to-slate-600"
    hoverTextName="group-hover:text-orange-400"
    hoverBorder="hover:border-orange-500/50"
    circleStateBg="bg-green-500"
    shadowColor="shadow-orange-500/20"
    techStack={['TypeScript', 'Angular 21', 'TailwindCSS', 'Vercel', 'JWT']}
/>
