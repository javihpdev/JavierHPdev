<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: addClass = '' }: Props = $props();
</script>

<div id="experiencia" class="min-h-screen w-full bg-gray-900 py-20 {addClass}">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<h1
				class="mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text p-3 text-5xl font-bold text-transparent md:text-6xl"
			>
				Experiencia Profesional
			</h1>
			<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
		</div>

		<!-- Experience Card -->
		<div class="relative mb-16">
			<div
				class="rounded-3xl border border-slate-700 bg-slate-800/50 p-8 shadow-2xl backdrop-blur-sm md:p-12"
			>
				<!-- Company Header -->
				<div class="mb-8 flex flex-col items-center justify-between md:flex-row">
					<div class="mb-6 text-center md:mb-0 md:text-left">
						<h2 class="mb-2 text-3xl font-bold text-white">TipoMedia</h2>
						<p class="text-xl font-medium text-blue-400">Full Stack Developer</p>
						<p class="mt-2 text-slate-400">2025 - Presente</p>
					</div>

					<!-- Company Logo -->
					<div
						class="rounded-2xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105"
					>
						<a href="https://tipomedia.com/" target="_blank" rel="noopener noreferrer">
							<img src="/images/tipomedia_logo.png" alt="TipoMedia Logo" class="h-16 w-auto" />
						</a>
					</div>
				</div>

				<!-- Description -->
				<div class="mb-10">
					<p class="mb-6 text-lg leading-relaxed text-slate-300">
						Participación activa en el desarrollo y mantenimiento del proyecto Historiatelo.
						Experiencia en la gestión integral de sitios web, desde el diseño inicial hasta la
						implementación y el mantenimiento continuo.
					</p>

					<!-- Highlight Project -->
					<div
						class="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6"
					>
						<h3 class="mb-3 flex items-center text-xl font-semibold text-white">
							<span class="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
							Proyecto Destacado: Historiatelo
						</h3>
						<p class="text-slate-300">
							Plataforma web donde usuarios con perfil crean, editan y suben "historias" (paquetes)
							a la plataforma para que otros usuarios las vean. Funcionalidad principal: gestión de
							paquetes (crear/editar/subir) y visualización compartida entre usuarios.
						</p>
					</div>
				</div>

				<!-- Technologies Used -->
				<div class="mb-8">
					<h3 class="mb-6 text-center text-2xl font-bold text-white">Tecnologías Utilizadas</h3>
					<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
						<!-- Svelte Card -->
						<div
							class="group rounded-2xl border border-slate-600 bg-slate-700/30 p-6 transition-all duration-300 hover:scale-105 hover:bg-slate-700/50"
						>
							<div class="flex flex-col items-center">
								<div class="mb-4 flex h-20 w-20 items-center justify-center">
									<img
										src="/images/Svelte_Logo.png"
										alt="Svelte"
										class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
								<h4 class="mb-2 text-lg font-semibold text-white">Svelte</h4>
								<p class="text-center text-sm text-slate-400">
									Framework moderno para desarrollo web
								</p>
							</div>
						</div>

						<!-- Tailwind CSS Card -->
						<div
							class="group rounded-2xl border border-slate-600 bg-slate-700/30 p-6 transition-all duration-300 hover:scale-105 hover:bg-slate-700/50"
						>
							<div class="flex flex-col items-center">
								<div class="mb-4 flex h-20 w-full items-center justify-center">
									<img
										src="/images/tailwindcss.png"
										alt="Tailwind CSS"
										class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
								<h4 class="mb-2 text-lg font-semibold text-white">Tailwind CSS</h4>
								<p class="text-center text-sm text-slate-400">Framework CSS utility-first</p>
							</div>
						</div>

						<!-- TypeScript Card -->
						<div
							class="group rounded-2xl border border-slate-600 bg-slate-700/30 p-6 transition-all duration-300 hover:scale-105 hover:bg-slate-700/50"
						>
							<div class="flex flex-col items-center">
								<div class="mb-4 flex h-20 w-20 items-center justify-center">
									<img
										src="/images/typescript.png"
										alt="TypeScript"
										class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
								<h4 class="mb-2 text-lg font-semibold text-white">TypeScript</h4>
								<p class="text-center text-sm text-slate-400">JavaScript con tipado estático</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Achievements Section -->
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div
						class="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6"
					>
						<h4 class="mb-3 text-lg font-semibold text-green-400">Logros Principales</h4>
						<ul class="space-y-2 text-slate-300">
							<li class="flex items-center">
								<span class="mr-3 h-2 w-2 rounded-full bg-green-500"></span>
								Desarrollo full-stack de aplicaciones web
							</li>
							<li class="flex items-center">
								<span class="mr-3 h-2 w-2 rounded-full bg-green-500"></span>
								Implementación de mejores prácticas
							</li>
							<li class="flex items-center">
								<span class="mr-3 h-2 w-2 rounded-full bg-green-500"></span>
								Mantenimiento continuo de proyectos
							</li>
						</ul>
					</div>

					<div
						class="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6"
					>
						<h4 class="mb-3 text-lg font-semibold text-purple-400">Habilidades Adquiridas</h4>
						<ul class="space-y-2 text-slate-300">
							<li class="flex items-center">
								<span class="mr-3 h-2 w-2 rounded-full bg-purple-500"></span>
								Gestión integral de proyectos web
							</li>
							<li class="flex items-center">
								<span class="mr-3 h-2 w-2 rounded-full bg-purple-500"></span>
								Desarrollo con tecnologías modernas
							</li>
							<li class="flex items-center">
								<span class="mr-3 h-2 w-2 rounded-full bg-purple-500"></span>
								Colaboración en equipo
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="text-center">
			<a
				href="https://tipomedia.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex transform items-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
			>
				<span>Ver más sobre TipoMedia</span>
				<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					></path>
				</svg>
			</a>
		</div>
	</div>
</div>
