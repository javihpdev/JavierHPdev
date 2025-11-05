	<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: addClass = '' }: Props = $props();
</script>

<div
	id="experiencia"
	class="min-h-screen w-full py-20 bg-gray-900  {addClass}"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<!-- Header Section -->
		<div class="text-center mb-16">
			<h1 class="text-5xl md:text-6xl p-3 font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
				Experiencia Profesional
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
		</div>

		<!-- Experience Card -->
		<div class="relative mb-16">
			<div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
				<!-- Company Header -->
				<div class="flex flex-col md:flex-row items-center justify-between mb-8">
					<div class="text-center md:text-left mb-6 md:mb-0">
						<h2 class="text-3xl font-bold text-white mb-2">TipoMedia</h2>
						<p class="text-xl text-blue-400 font-medium">Full Stack Developer</p>
						<p class="text-slate-400 mt-2">2023 - Presente</p>
					</div>

					<!-- Company Logo -->
					<div class="bg-white rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
						<a
							href="https://tipomedia.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/images/tipomedia_logo.png"
								alt="TipoMedia Logo"
								class="h-16 w-auto"
							/>
						</a>
					</div>
				</div>

				<!-- Description -->
				<div class="mb-10">
					<p class="text-lg text-slate-300 leading-relaxed mb-6">
						Participación activa en el desarrollo y mantenimiento de diversos proyectos web.
						Experiencia en la gestión integral de sitios web, desde el diseño inicial hasta
						la implementación y el mantenimiento continuo.
					</p>

					<!-- Highlight Project -->
					<div class="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-6">
						<h3 class="text-xl font-semibold text-white mb-3 flex items-center">
							<span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
							Proyecto Destacado: Historiatelo
						</h3>
						<p class="text-slate-300">
							Desarrollo completo de plataforma web utilizando tecnologías modernas
							y mejores prácticas de desarrollo.
						</p>
					</div>
				</div>

				<!-- Technologies Used -->
				<div class="mb-8">
					<h3 class="text-2xl font-bold text-white mb-6 text-center">
						Tecnologías Utilizadas
					</h3>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
						<!-- Svelte Card -->
						<div class="group bg-slate-700/30 border border-slate-600 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
							<div class="flex flex-col items-center">
								<div class="w-20 h-20 mb-4 flex items-center justify-center">
									<img
										src="/images/Svelte_Logo.png"
										alt="Svelte"
										class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
								<h4 class="text-lg font-semibold text-white mb-2">Svelte</h4>
								<p class="text-sm text-slate-400 text-center">
									Framework moderno para desarrollo web
								</p>
							</div>
						</div>

						<!-- Tailwind CSS Card -->
						<div class="group bg-slate-700/30 border border-slate-600 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
							<div class="flex flex-col items-center">
								<div class="w-full h-20 mb-4 flex items-center justify-center">
									<img
										src="/images/tailwindcss.png"
										alt="Tailwind CSS"
										class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
								<h4 class="text-lg font-semibold text-white mb-2">Tailwind CSS</h4>
								<p class="text-sm text-slate-400 text-center">
									Framework CSS utility-first
								</p>
							</div>
						</div>

						<!-- TypeScript Card -->
						<div class="group bg-slate-700/30 border border-slate-600 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
							<div class="flex flex-col items-center">
								<div class="w-20 h-20 mb-4 flex items-center justify-center">
									<img
										src="/images/typescript.png"
										alt="TypeScript"
										class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
								<h4 class="text-lg font-semibold text-white mb-2">TypeScript</h4>
								<p class="text-sm text-slate-400 text-center">
									JavaScript con tipado estático
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Achievements Section -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
						<h4 class="text-lg font-semibold text-green-400 mb-3">
							Logros Principales
						</h4>
						<ul class="space-y-2 text-slate-300">
							<li class="flex items-center">
								<span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
								Desarrollo full-stack de aplicaciones web
							</li>
							<li class="flex items-center">
								<span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
								Implementación de mejores prácticas
							</li>
							<li class="flex items-center">
								<span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
								Mantenimiento continuo de proyectos
							</li>
						</ul>
					</div>

					<div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
						<h4 class="text-lg font-semibold text-purple-400 mb-3">
							Habilidades Adquiridas
						</h4>
						<ul class="space-y-2 text-slate-300">
							<li class="flex items-center">
								<span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
								Gestión integral de proyectos web
							</li>
							<li class="flex items-center">
								<span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
								Desarrollo con tecnologías modernas
							</li>
							<li class="flex items-center">
								<span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
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
				class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
			>
				<span>Ver más sobre TipoMedia</span>
				<svg
					class="w-5 h-5 ml-2"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
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
