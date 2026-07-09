<script lang="ts">
	import ProyectCard, { currentYear } from "$lib/components/atoms/ProyectCard.svelte";

    type Props = {
        showGifVexcaTax?: boolean;
    };
    let { showGifVexcaTax = $bindable(false) }: Props = $props();

</script>

<!-- TODO: Cambiar el gif del proyecto cuando se termine -->
<ProyectCard 
    showGif={showGifVexcaTax}
    hrefProyect="https://vexcatax.vercel.app/"
    srcImage="/images/logoNavBar.png"
    altGif="Vista previa del proyecto VexcaTax"
    altImage="Logo del proyecto VexcaTax"
    nameProyect="VexcaTax"
    description="Plataforma web moderna para la gestión de impuestos y contabilidad, diseñada para empresas y autónomos. Ofrece herramientas para calcular impuestos, generar informes financieros y mantener un registro"
    bgGradient="from-blue-500 via-blue-600 to-blue-900"
    hoverTextName="group-hover:text-blue-500"
    hoverBorder="group-hover:border-blue-500/50"
    circleStateBg="bg-orange-500"
    techStack={['TypeScript', 'TailwindCSS', 'PostgreSQL', 'Angular 22', 'Vercel', 'Supabase', 'JWT']}
    stateName="En desarrollo"
    
 />

