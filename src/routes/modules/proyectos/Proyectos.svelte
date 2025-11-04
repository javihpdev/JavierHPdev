<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/web/Button.svelte';

	let showGif = $state(false);
  let showGifHistoriatelo = $state(false);
  let showGifGepro = $state(false);
</script>

<div class="w-full max-w-6xl">
	<!-- Título de la sección -->
	<h2 class="mb-12 text-center text-4xl font-bold text-white md:text-5xl">Mis Proyectos</h2>

	<!-- Grid de proyectos -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		<!-- Proyecto 1 -->
		<a
			href="https://javihpdev.github.io/AirsoftAtlantico/"
			target="_blank"
			rel="noopener noreferrer"
			onmouseenter={() => (showGif = true)}
			onmouseleave={() => (showGif = false)}
		>
			<div
				class="cursor-pointer rounded-2xl border border-slate-700 bg-slate-800/50 p-6 transition-all duration-300 hover:scale-105"
			>
				<div class="mb-4 h-48 overflow-hidden rounded-xl bg-gray-900">
					<img
						src={showGif ? '/gif/airsoft-preview.gif' : '/images/logo.png'}
						class="h-full w-full object-contain"
						alt="Vista previa del proyecto Airsoft Atlántico"
					/>
				</div>
				<h3 class="mb-2 text-xl font-semibold text-white">Airsoft Atlántico</h3>
				<p class="mb-4 text-slate-400">Descripción breve del proyecto y tecnologías utilizadas.</p>
				<div class="flex gap-2">
					<span class="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">TypeScript</span
					>
					<span class="rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-400">Svelte</span
					>
					<span class="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400"
						>TailwindCSS</span
					>
				</div>
			</div>
		</a>

		<!-- Proyecto 2 -->
		<a href="https://historiatelo.org/" target="_blank" rel="noopener noreferrer"
    onmouseenter={() => (showGifHistoriatelo = true)}
    onmouseleave={() => (showGifHistoriatelo = false)}
    >
			<div
				class="cursor-pointer rounded-2xl border border-slate-700 bg-slate-800/50 p-6 transition-all duration-300 hover:scale-105"
			>
				<div class="mb-4 h-48 overflow-hidden rounded-xl bg-gray-900">
					<img
						src={showGifHistoriatelo ? '/gif/airsoft-preview.gif' : '/images/historiatelo.png'}
						class="h-full w-full object-contain"
						alt="Vista previa del proyecto Airsoft Atlántico"
					/>
				</div>
				<h3 class="mb-2 text-xl font-semibold text-white">Historiatelo</h3>
				<p class="mb-4 text-slate-400">Descripción breve del proyecto y tecnologías utilizadas.</p>
				<div class="flex gap-2">
					<span class="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">TypeScript</span
					>
					<span class="rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-400">Svelte</span
					>
					<span class="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400"
						>TailwindCSS</span
					>
				</div>
			</div>
		</a>

		<!-- Proyecto 3 -->
    <a href="" target="_blank" rel="noopener noreferrer">

      <div
			class="cursor-pointer rounded-2xl border border-slate-700 bg-slate-800/50 p-6 transition-all duration-300 hover:scale-105"
      >
			<div class="mb-4 h-48 overflow-hidden rounded-xl bg-gray-900">
        <img
        src={showGifGepro ? '/gif/airsoft-preview.gif' : '/images/logo.png'}
        class="h-full w-full object-contain"
        alt="Vista previa del proyecto Airsoft Atlántico"
				/>
			</div>
			<h3 class="mb-2 text-xl font-semibold text-white">GePro</h3>
			<p class="mb-4 text-slate-400">Descripción breve del proyecto y tecnologías utilizadas.</p>
			<div class="flex gap-2">
				<span class="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-400">PhP</span>
				<span class="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">Tailwind</span>
			</div>
		</div>
  </a>
	</div>

	<!-- Botón para ver más proyectos -->
	<div class="mt-12 flex justify-center">
		<Button
			type="button"
			text="Ver todos los proyectos"
			class="cursor-pointer rounded-2xl border border-blue-400/30 bg-blue-500/10 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#152651]"
		/>
	</div>
</div>
