<script lang="ts">
	import { onMount } from 'svelte';
	let showGif = $state(false);
	let showGifHistoriatelo = $state(false);
	let showGifGepro = $state(false);

	onMount(() => {
		const videos = document.querySelectorAll<HTMLVideoElement>('#proyectos video');

		function tryPlayAll() {
			videos.forEach((v) => {
				try {
					v.muted = true;
					// atributos ya en markup, refuerza inline
					v.playsInline = true;
					// intenta reproducir
					const p = v.play();
					if (p && typeof p.catch === 'function') {
						p.catch(() => {
							// si falla (autoplay bloqueado), esperamos al primer touch
						});
					}
				} catch (e) {
					// ignore
				}
			});
		}

		tryPlayAll();

		// Si autoplay está bloqueado, reintentar en el primer touch (una sola vez)
		const onFirstTouch = () => {
			tryPlayAll();
			window.removeEventListener('touchstart', onFirstTouch, { passive: true });
		};
		window.addEventListener('touchstart', onFirstTouch, { passive: true });

		return () => {
			window.removeEventListener('touchstart', onFirstTouch);
		};
	});
</script>

<div
	id="proyectos"
	class="min-h-screen w-full bg-gradient-to-br from-slate-950 via-gray-900 to-gray-900 py-20"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<h1
				class="mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text p-3 text-5xl font-bold text-transparent md:text-6xl"
			>
				Mis Proyectos
			</h1>
			<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
			<p class="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
				Una selección de proyectos que demuestran mis habilidades en desarrollo web moderno y mi
				pasión por crear experiencias digitales.
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- Proyecto 1: Airsoft Atlántico -->
			<div class="group relative">
				<!-- Background Decoration -->
				<div
					class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"
				></div>

				<a
					href="https://www.airsoftatlantico.com/"
					target="_blank"
					rel="noopener noreferrer"
					onmouseenter={() => (showGif = true)}
					onmouseleave={() => (showGif = false)}
					class="relative block"
				>
					<div
						class="rounded-3xl border border-slate-700/50 bg-slate-800/80 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-500/50"
					>
						<!-- Project Image -->
						<div class="relative mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900">
											<!-- En móvil y tablet siempre mostrar GIF -->
											<video
												src="/videos/airsoftpreview.mp4"
												autoplay
												muted
												loop
												playsinline
												preload="metadata"
												poster="/images/logo.png"
												class="block h-full w-full object-cover transition-all duration-300 md:hidden"
							></video>

							<!-- En desktop mostrar imagen estática por defecto y GIF en hover -->
							{#if showGif}
								<video
									src="videos/airsoftpreview.mp4"
									class="hidden h-full w-full object-cover transition-all duration-300 md:block"
									autoplay
									muted
									loop
								>
									<track kind="captions" label="Spanish captions" src="" srclang="es" default />
								</video>
							{:else}
								<img
									src="images/logo.png"
									class="hidden h-full w-full object-contain transition-all duration-300 md:block"
									alt="Vista previa del proyecto Airsoft Atlántico"
								/>
							{/if}
						</div>

						<!-- Project Info -->
						<div class="space-y-4">
							<div class="flex items-center justify-between">
								<h3
									class="text-2xl font-bold text-white transition-colors group-hover:text-blue-400"
								>
									Airsoft Atlántico
								</h3>
								<div
									class="flex items-center text-slate-400 transition-colors group-hover:text-blue-400"
								>
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
								Plataforma web moderna para comunidad de airsoft con diseño responsive y experiencia
								de usuario optimizada.
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
									class="rounded-full border border-yellow-500/30 bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-400"
								>
									JavaScript
								</span>
							</div>

							<!-- Project Stats -->
							<div class="flex items-center justify-between border-t border-slate-700 pt-4">
								<div class="flex items-center space-x-4 text-sm text-slate-400">
									<span class="flex items-center">
										<span class="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
										Live
									</span>
									<span>2025</span>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>

			<!-- Proyecto 2: Historiatelo -->
			<div id="historiatelo" class="group relative">
				<div
					class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-yellow-500 to-[#00ACC9] opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"
				></div>

				<a
					href="https://historiatelo.org/"
					target="_blank"
					rel="noopener noreferrer"
					onmouseenter={() => (showGifHistoriatelo = true)}
					onmouseleave={() => (showGifHistoriatelo = false)}
					class="relative block"
				>
					<div
						class="rounded-3xl border border-slate-700/50 bg-slate-800/80 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-yellow-500/50"
					>
						<div class="relative mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900">
							<!-- En móvil y tablet siempre mostrar GIF -->
							<video
								src="videos/historiatelopreview.mp4"
								autoplay
								muted
								loop
								class="block h-full w-full object-cover transition-all duration-300 md:hidden"
							></video>

							<!-- En desktop mostrar imagen estática por defecto y GIF en hover -->
							{#if showGifHistoriatelo}
								<video
									src="videos/historiatelopreview.mp4"
									class="hidden h-full w-full object-cover transition-all duration-300 md:block"
									autoplay
									muted
									loop
								>
									<track kind="captions" label="Spanish captions" src="" srclang="es" default />
								</video>
							{:else}
								<img
									src="/images/historiatelo.png"
									class="hidden h-full w-full object-contain transition-all duration-300 md:block"
									alt="Vista previa del proyecto Historiatelo"
								/>
							{/if}

							<img
								src={showGifHistoriatelo
									? '/gif/historiatelopreview.gif'
									: '/images/historiatelo.png'}
								class="h-full w-full {showGifHistoriatelo
									? 'object-cover'
									: 'object-contain'} hidden transition-all duration-300 md:block"
								alt="Vista previa del proyecto Historiatelo"
							/>
						</div>

						<div class="space-y-4">
							<div class="flex items-center justify-between">
								<h3
									class="text-2xl font-bold text-white transition-colors group-hover:text-yellow-400"
								>
									Historiatelo
								</h3>
								<div
									class="flex items-center text-slate-400 transition-colors group-hover:text-yellow-400"
								>
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
								Plataforma digital educativa para compartir y descubrir contenido histórico de
								manera interactiva y engaging.
							</p>

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
									class="rounded-full border border-cyan-500/30 bg-[#C5F64F]/20 px-3 py-1 text-sm font-medium text-[#C5F64F]"
								>
									Drizzle ORM
								</span>
							</div>

							<div class="flex items-center justify-between border-t border-slate-700 pt-4">
								<div class="flex items-center space-x-4 text-sm text-slate-400">
									<span class="flex items-center">
										<span class="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
										Live
									</span>
									<span>2025</span>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>

			<!-- Proyecto 3: GePro -->
			<div id="gepro" class="group relative">
				<div
					class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-500 to-orange-600 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"
				></div>

				<a
					href="/modules/proyectos/geprobeta"
					onmouseenter={() => (showGifGepro = true)}
					onmouseleave={() => (showGifGepro = false)}
					class="relative block"
				>
					<div
						class="rounded-3xl border border-slate-700/50 bg-slate-800/80 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-green-500/50"
					>
						<div class="relative mb-6 h-48 overflow-hidden rounded-2xl bg-gray-900">
							<img
								src={showGifGepro ? '/images/GeproPreview.png' : '/images/LogoEmpresa.png'}
								class="h-full w-full {showGifGepro
									? 'object-cover'
									: 'object-contain'} transition-all duration-300"
								alt="Vista previa del proyecto GePro"
							/>
						</div>

						<div class="space-y-4">
							<div class="flex items-center justify-between">
								<h3
									class="text-2xl font-bold text-white transition-colors group-hover:text-green-400"
								>
									GePro
								</h3>
								<div class="flex items-center">
									<span
										class="rounded-full border border-purple-500/30 bg-purple-500/20 px-2 py-1 text-xs font-medium text-purple-400"
									>
										TFG
									</span>
								</div>
							</div>

							<p class="leading-relaxed text-slate-300">
								Sistema de gestión empresarial desarrollado como Trabajo Final de Grado. Solución
								integral para pequeñas y medianas empresas.
							</p>

							<div class="flex flex-wrap gap-2">
								<span
									class="rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400"
								>
									PHP
								</span>
								<span
									class="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400"
								>
									Tailwind
								</span>
								<span
									class="rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400"
								>
									MySQL
								</span>
							</div>

							<div class="flex items-center justify-between border-t border-slate-700 pt-4">
								<div class="flex items-center space-x-4 text-sm text-slate-400">
									<span class="flex items-center">
										<span class="mr-2 h-2 w-2 rounded-full bg-orange-500"></span>
										En desarrollo
									</span>
									<span>2024</span>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>

		<!-- GitHub CTA Section -->
		<div
			class="rounded-3xl border border-slate-700 bg-slate-800/50 p-8 text-center backdrop-blur-sm md:p-12"
		>
			<div class="mx-auto max-w-3xl">
				<h3 class="mb-4 text-3xl font-bold text-white">¿Quieres ver más?</h3>
				<p class="mb-8 text-xl text-slate-300">
					Explora todos mis proyectos y contribuciones en GitHub. Siempre estoy trabajando en algo
					nuevo e interesante.
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="https://github.com/javihpdev"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex transform items-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
					>
						<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							/>
						</svg>
						Ver GitHub
					</a>
					<a
						href="#contacto"
						class="inline-flex transform items-center rounded-2xl border border-slate-600 bg-slate-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-slate-600"
					>
						<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							></path>
						</svg>
						Contactar
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
