<script lang="ts">
	import ProyectCard from "$lib/components/atoms/ProyectCard.svelte";

    type Props = {
        showGifGepro?: boolean;
    };
    let { showGifGepro = $bindable(false) }: Props = $props();
</script>

<ProyectCard
    showGif={showGifGepro}
    wrapperId="gepro"
    hrefProyect="modules/proyectos/gepro"
    sameTab={true}
    srcGif="/images/GeproPreview.png"
    srcImage="/images/LogoEmpresa.png"
    altGif="Vista previa del proyecto GePro"
    altImage="Vista previa del proyecto GePro"
    nameProyect="GePro"
    badgeText="TFG"
    description="Sistema de gestión empresarial desarrollado como Trabajo Final de Grado. Solución integral para pequeñas y medianas empresas."
    bgGradient="from-green-500 to-orange-600"
    hoverTextName="group-hover:text-green-400"
    hoverBorder="hover:border-green-500/50"
    circleStateBg="bg-orange-500"
    stateName="En desarrollo"
    shadowColor="shadow-green-500/20"
    techStack={['PHP', 'Tailwind', 'MySQL']}
/>
