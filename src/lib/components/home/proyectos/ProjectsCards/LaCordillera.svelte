<script lang="ts">
	import ProyectCard from "$lib/components/atoms/ProyectCard.svelte";

	type Props = {
		showGifLaCordillera?: boolean;
	};

	let { showGifLaCordillera = $bindable(false) }: Props = $props();
</script>

<ProyectCard
	showGif={showGifLaCordillera}
	hrefProyect="https://la-cordillera-two.vercel.app/inicio"
	srcGif="/gif/laCordillera.gif"
	srcImage="/images/logoCordillera.png"
	altGif="Vista previa del proyecto Centro Hipico La Cordillera"
	altImage="Logo Centro Hipico La Cordillera"
	nameProyect="Centro Hípico, La Cordillera"
	description="Web para el Centro Hípico La Cordillera. Plataforma que ofrece información sobre el centro, sus instalaciones, actividades ecuestres y servicios disponibles para aficionados y profesionales de la hípica."
	bgGradient="from-green-500 to-slate-600"
	hoverTextName="group-hover:text-green-400"
	hoverBorder="hover:border-gold"
	circleStateBg="bg-green-500"
	shadowColor="shadow-amber-500/20"
	gifFit="object-contain"
	techStack={['TypeScript', 'Angular 22', 'TailwindCSS']}
/>
