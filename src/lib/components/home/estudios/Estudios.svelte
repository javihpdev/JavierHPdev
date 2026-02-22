<script lang="ts">
	import FinalProyect from '$lib/components/common/icons/AchievementIcons/FinalProyect.svelte';
import Css3 from '$lib/components/common/icons/TechnologiesIcons/Css3.svelte';
	import Html5 from '$lib/components/common/icons/TechnologiesIcons/Html5.svelte';
	import JavaScript from '$lib/components/common/icons/TechnologiesIcons/JavaScript.svelte';
	import Php from '$lib/components/common/icons/TechnologiesIcons/Php.svelte';
	import AchivementHighlights from './AchievementHighlights/AchivementHighlights.svelte';
	import TechnologiesCards from './TechnologiesCards/TechnologiesCards.svelte';
	import Practice from '$lib/components/common/icons/AchievementIcons/Practice.svelte';
	import Certification from '$lib/components/common/icons/AchievementIcons/Certification.svelte';
	import InfoEstudios from './infoEstudios/InfoEstudios.svelte';

	type Props = {
		class?: string;
	};

	let { class: addClass = '' }: Props = $props();
</script>

<div id="estudios" class="min-h-screen w-full bg-gray-800 py-20">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<h1
				class="mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-3xl sm:text-5xl md:text-6xl font-bold text-transparent"
			>
				Formación Académica
			</h1>
			<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
			<p class="mx-auto mt-6 max-w-3xl text-base sm:text-xl text-slate-400">
				Mi formación académica me ha proporcionado una base en desarrollo web y en las tecnologías
				más demandadas del mercado como JavaScript, HTML, CSS, PHP y Bases de Datos: MySQL.
			</p>
		</div>

		<!-- Main Estudios -->
		<div class="relative mb-16">
			<div
				class="overflow-hidden rounded-3xl border border-slate-700 bg-slate-800/50 p-8 shadow-2xl backdrop-blur-sm md:p-12"
			>

				<!-- Study information -->
				<InfoEstudios/>

				<!-- Technologies Grid -->
				<div class="relative z-10">
					<h3 class="mb-8 text-center text-2xl font-bold text-white">Tecnologías Aprendidas</h3>
					<div class="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
						<!-- JavaScript Card -->
						<TechnologiesCards
							divClass="group flex items-center justify-center rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6 transition-all duration-300 hover:scale-105"
							iconClass="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/20 transition-colors group-hover:bg-yellow-500/30"
							textColor="text-yellow-400"
							name="JavaScript"
						>
							<JavaScript />
						</TechnologiesCards>

						<!-- HTML Card -->
						<TechnologiesCards
							divClass="group flex items-center justify-center rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 transition-all duration-300 hover:scale-105"
							iconClass="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/20 transition-colors group-hover:bg-orange-500/30"
							textColor="text-orange-400"
							name="HTML5"
						>
							<Html5 />
						</TechnologiesCards>

						<!-- CSS Card -->
						<TechnologiesCards
							divClass="group flex items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 transition-all duration-300 hover:scale-105"
							iconClass="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors"
							textColor="text-blue-400"
							name="CSS3"
						>
							<Css3 />
						</TechnologiesCards>

						<!-- PHP Card -->
						<TechnologiesCards
							divClass="group flex items-center justify-center rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-6 transition-all duration-300 hover:scale-105"
							iconClass="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20 transition-colors group-hover:bg-purple-500/30"
							textColor="text-purple-400"
							name="PHP"><Php /></TechnologiesCards
						>
					</div>
				</div>

				<!-- Achievement Highlights -->
				<div class="relative z-10 mt-10 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">

                    <!-- Final Project  -->
					<AchivementHighlights
                        divClass="group rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 text-center transition-all duration-300 hover:scale-105"
                        iconClass="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 transition-colors group-hover:bg-green-500/30"
                        title="Proyecto Final"
                        colorText="text-green-400"
                        description="Desarrollo de Aplicaciones Web:"
                        company="GePro"
                        companyClass="bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text font-semibold text-transparent italic"
                        ><FinalProyect /></AchivementHighlights>

                    <!-- Practicas -->

                    <AchivementHighlights
                        divClass="group rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 text-center transition-all duration-300 hover:scale-105"
                        iconClass="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 transition-colors group-hover:bg-blue-500/30"
                        title="Prácticas"
                        colorText="text-blue-400"
                        description="Experiencia real en empresa:"
                        company="TipoMedia"
                        companyClass="bg-gradient-to-r from-white to-pink-400 bg-clip-text font-semibold text-transparent italic"
                        ><Practice /></AchivementHighlights>

                    <!-- Certification -->
                        <AchivementHighlights
                            divClass="group rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 text-center transition-all duration-300 hover:scale-105"
                            iconClass="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 transition-colors group-hover:bg-purple-500/30"
                            title="Certificación"
                            colorText="text-purple-400"
                            description="Certificado Oficial:"
                            company="LinkiaFP"
                            companyClass="bg-gradient-to-r from-white to-purple-400 bg-clip-text font-semibold text-transparent italic"
                        ><Certification /></AchivementHighlights>
				</div>
			</div>
		</div>

		<!-- Conocer mas sobre LinkiaFP -->
		<div class="text-center">
			<a
				href="https://goo.su/b9F3U4"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex transform items-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
			>
				<span>Conocer más sobre LinkiaFP</span>
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
