<script lang="ts">
	type Props = {
		showGifListenStudy?: boolean;
		onmouseenter?: boolean;
		onmouseleave?: boolean;
	};
	let { showGifListenStudy = $bindable(false) }: Props = $props();
</script>

<div class="group relative">
	<!-- Background Decoration -->
	<div
		class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-yellow-500 via-cyan-500 to-green-600 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"
	></div>

	<a
		href="/modules/proyectos/listenstudy"
		rel="noopener noreferrer"
		onmouseenter={() => (showGifListenStudy = true)}
		onmouseleave={() => (showGifListenStudy = false)}
		class="relative block"
	>
		<div
			class="rounded-3xl border border-slate-700/50 bg-slate-800/80 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-500/50"
		>
			<!-- Project Image -->
			<div class="relative mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900">
				<!-- En móvil: mostrar GIF (siempre funciona) -->
				<img
					src="/gif/listenstudypreview.gif"
					class="block h-full w-full object-cover transition-all duration-300 md:hidden"
					alt="Vista previa del proyecto ListenStudy"
				/>

				<!-- En desktop: imagen estática, video en hover -->
				{#if showGifListenStudy}
					<img
						src="/gif/listenstudypreview.gif"
						class="hidden h-full w-full object-cover transition-all duration-300 md:block"
						alt="Vista previa del proyecto ListenStudy"
					/>
				{:else}
					<img
						src="/images/logoListenStudy.webp"
						class="hidden h-full w-full object-contain transition-all duration-300 md:block"
						alt="Vista previa del proyecto ListenStudy"
					/>
				{/if}
			</div>

			<!-- Project Info -->
			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<h3 class="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
						ListenStudy
					</h3>
                    
					<div class="flex items-center text-slate-400 transition-colors group-hover:text-cyan-400">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							></path>
						</svg>
					</div>
				</div>

				<p class="leading-relaxed text-slate-300">
					Plataforma web moderna para la escucha de archivos de texto a voz, diseñada para
					estudiantes.
				</p>

				<!-- Tech Stack -->
				<div class="flex flex-wrap gap-2">
					<span
						class="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400"
					>
						TypeScript
					</span>
					<span
						class="rounded-full border border-orange-500/30 bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-400"
					>
						Svelte
					</span>
					<span
						class="rounded-full border border-cyan-500/30 bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400"
					>
						TailwindCSS
					</span>
					<span
						class="rounded-full border border-[#C5F64F] bg-[#C5F64F]/20 px-3 py-1 text-sm font-medium text-[#C5F64F]"
					>
						Drizzle ORM
					</span>
					<span
						class="relative overflow-hidden rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-padding px-3 py-1 text-sm font-medium text-white"
					>
						<span
							class="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 via-red-500 to-yellow-500 opacity-50 blur-sm"
						></span>
						<span class="relative z-10">Google Cloud Text-to-Speech API</span>
					</span>
				</div>

				<!-- Project Stats -->
				<div class="flex items-center justify-between border-t border-slate-700 pt-4">
					<div class="flex items-center space-x-4 text-sm text-slate-400">
						<span class="flex items-center">
							<span class="mr-2 h-2 w-2 rounded-full bg-orange-500"></span>
							En desarrollo
						</span>
						<span>2025</span>
					</div>
				</div>
			</div>
		</div>
	</a>
</div>
