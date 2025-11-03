<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: addClass = '' }: Props = $props();
</script>

<div
	id="experiencia"
	class="flex max-h-screen w-full flex-col items-center justify-center gap-3 text-center text-white"
>
	<article
		class="flex w-full max-w-[95%] flex-col items-center justify-center gap-10 rounded-2xl p-10 md:p-20"
	>
		<h1 class="flex w-full flex-col items-center justify-center gap-2 text-5xl font-bold">
			Experiencia Profesional
		</h1>

		<div class="flex w-full flex-col items-center justify-center gap-5">
			TipoMedia (Gestión, Diseño y Mantenimiento de Páginas Web) Participación activa en el
			desarrollo y mantenimiento de diversos proyectos web. Experiencia en la gestión integral de
			sitios web, desde el diseño inicial hasta la implementación y el mantenimiento continuo.
			<span> Colaboración en el proyecto "Historiatelo", donde he profundizado en el uso de: </span>
			<div
				class="flex w-70 max-w-[95%] flex-wrap items-center justify-center gap-4 md:w-full md:gap-20"
			>
				<img
					class="w-20 transition-all duration-400 hover:scale-110"
					src="/src/lib/images/Svelte_Logo.svg.png"
					alt="imagen Svelte"
				/>
				<img
					class="w-50 transition-all duration-400 hover:scale-110"
					src="/src/lib/images/tailwindcss.svg"
					alt="imagen Tailwind CSS"
				/>
				<img
					class="w-25 transition-all duration-400 hover:scale-110"
					src="/src/lib/images/typescript.png"
					alt="imagen TypeScript"
				/>
			</div>
			<span class="h-0.4 block bg-[#2D2420] md:w-200"></span>
			<div
				class="relative flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white p-5 shadow-[0_0_25px_5px] shadow-[#3D3027] transition-all duration-600 hover:scale-110"
			>
				<a href="https://tipomedia.com/" target="_blank">
					<img src="/src/lib/images/tipomedia_logo.png" alt="logo tipomedia" />
				</a>
			</div>
		</div>
	</article>
</div>
