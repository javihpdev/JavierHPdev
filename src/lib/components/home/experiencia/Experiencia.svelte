<script lang="ts">
	import Achievements from "./Achievements/Achievements.svelte";
	import InfoCompany from "./InfoCompany/InfoCompany.svelte";
	import TechnologiesUsed from "./TechnologiesUsed/TechnologiesUsed.svelte";

	type Props = {
		class?: string;
	};

	let { class: addClass = '' }: Props = $props();
</script>

<div id="experiencia" class="min-h-screen w-full bg-gray-800 py-20 {addClass}">
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
				class="rounded-3xl border border-slate-700 bg-slate-800/50 p-8 shadow-2xl backdrop-blur-sm md:p-12 overflow-hidden"
			>
			
				<!-- Company Info -->
				<InfoCompany />

				<!-- Technologies Used -->
				<TechnologiesUsed />

				<!-- Achievements -->
				<Achievements />
			</div>
		</div>

		<!-- Button to go to TipoMedia -->
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
