<script lang="ts">
    type Props = {
        class?: string;
        showGifJardinTacoronte?: boolean;
        currentYear?: number;
    };

    let { class: addClass = '', currentYear, showGifJardinTacoronte = $bindable(false) }: Props = $props();

</script>

<div class="group relative self-start">
	<!-- Background Decoration -->
	<div
		class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold to-slate-600 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"
	></div>

	<a
		href="https://jardin-de-tacoronte.vercel.app/inicio"
		rel="noopener noreferrer"
        target="_blank"
		onmouseenter={() => (showGifJardinTacoronte = true)}
		onmouseleave={() => (showGifJardinTacoronte = false)}
		class="relative block"
	>
		<div
			class="rounded-3xl border border-slate-700/50 bg-slate-800/80 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gold"
		>
			<!-- Project Image -->
			<div class="relative mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900">
				<!-- En móvil: mostrar GIF (siempre funciona) -->
				<img
					src="/gif/jardintacoronte.gif"
					class="block h-full w-full object-contain transition-all duration-300 md:hidden"
					alt="Vista previa del proyecto Jardin de Tacoronte"
				/>

				<!-- En desktop: imagen estática, video en hover -->
				{#if showGifJardinTacoronte}
					<img
						src="/gif/jardintacoronte.gif"
						class="hidden h-full w-full object-contain transition-all duration-300 md:block"
						alt="Vista previa del proyecto Jardin de Tacoronte"
					/>
				{:else}
					<img
						src="/images/logoJardin.png"
						class="hidden h-full w-full scale-130 object-contain transition-all duration-300 md:block"
						alt="Vista previa del proyecto Jardin de Tacoronte"
					/>
				{/if}
			</div>

			<!-- Project Info -->
			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<h3 class="text-2xl font-bold text-white transition-colors group-hover:text-gold">
						Jardin de Tacoronte
					</h3>
                    
					<div class="flex items-center text-slate-400 transition-colors group-hover:text-gold">
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
					Web Comercial para el Jardín de Tacoronte, un espacio de ocio y entretenimiento en Tenerife. La web está diseñada para ofrecer información sobre el lugar, sus servicios y eventos, así como para atraer a visitantes potenciales.
				</p>

				<!-- Tech Stack -->
				<div class="flex flex-wrap gap-2">
					<span
						class="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400"
					>
						TypeScript
					</span>
					<span
						class="rounded-full border bg-gradient-to-br from-purple-500 to-pink-500 px-3 py-1 text-sm font-medium text-white"
					>
						Angular 21
					</span>
					<span
						class="rounded-full border border-cyan-500/30 bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400"
					>
						TailwindCSS
					</span>
					
					<span>
						<span
							class="rounded-full border border-slate-500/30 bg-slate-500/20 px-3 py-1 text-sm font-medium text-slate-400"
						>
							Vercel
						</span>
					</span>

					<span
						class="rounded-full border border-yellow-500 bg-yellow-700/20 px-3 py-1 text-sm font-medium text-yellow-500"
					>
						JWT (JSON Web Tokens)
					</span>
				</div>

				<!-- Project Stats -->
				<div class="flex items-center justify-between border-t border-slate-700 pt-4">
					<div class="flex items-center space-x-4 text-sm text-slate-400">
						<span class="flex items-center">
							<span class="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
							Live
						</span>
						<span>{currentYear}</span>
					</div>
				</div>
			</div>
		</div>
	</a>
</div>
