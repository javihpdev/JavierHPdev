<script lang="ts">
	import SocialMedia from '$lib/components/common/SocialMedia/SocialMedia.svelte';

	function downloadFile() {
		const link = document.createElement('a');
		link.href = 'files/CV_DEV_JavierHernandezPerez.pdf';
		link.download = 'CV_DEV_JavierHernandezPerez.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>

<div class="mb:mt-10 mt-20 flex w-full flex-col items-center justify-center">
	<!-- Contenido del Hero -->
	<div class="flex w-full flex-col items-center justify-center">
		<!-- Nombre con gradiente animado -->
		<h1
			class="gradient-text mb-6 text-center text-5xl leading-tight font-extrabold md:text-6xl lg:text-7xl"
		>
			Javier Hernández Pérez
		</h1>

		<!-- Subtítulo -->
		<p class="mb-8 text-center text-xl font-light tracking-wide text-slate-300 md:text-2xl">
			Full Stack Developer
		</p>

		<!-- Descripción -->
		<p
			class="mx-auto mb-10 max-w-md text-center text-base leading-relaxed text-slate-400 md:text-lg"
		>
			Empezando a crear experiencias web con tecnologías modernas como Angular 21, Svelte, TypeScript... y
			diseño centrado en el usuario con TailwindCSS.
		</p>
		<!-- Botón de descarga de CV -->
		<div class="mb-10">
			<button
				class="flex transform cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:from-purple-700 hover:to-blue-600"
				onclick={downloadFile}
				>Descargar CV
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="flex-shrink-0"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
			</button>
		</div>

		<!-- Redes Sociales -->
		<SocialMedia class="w-100" />
	</div>
</div>

<style>
	.gradient-text {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
</style>
