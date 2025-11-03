<script lang="ts">
	import GitHub from '../footer/GitHub.svelte';
	import LinkedIn from '../footer/LinkedIn.svelte';
	import Enlace from '../web/Enlace.svelte';

	type Props = {
		class?: string;
		src: string;
		alt: string;
	};

	let { class: addClass = '', src, alt }: Props = $props();

	let isClicked = $state();

	function animationIn() {
		isClicked = !isClicked;
	}
</script>

<section class="max-full-[90%] flex max-h-full w-full flex-col md:flex-row {addClass}">
	<article class="relative flex w-full max-w-full justify-center gap-5 p-5">
		<aside class="flex max-w-full flex-col items-center justify-center gap-20">
			<a href="/">
				<p class="text-center text-2xl font-extrabold text-white">JavihpDev</p>

			</a>
			<GitHub class="text-white w-25 h-32 hover:text-gray-400 hover:scale-110 transition-all duration-700" />
			<LinkedIn class="text-white w-25 h-32 hover:text-gray-400 hover:scale-110 transition-all duration-700" />

		</aside>
		<div class="flex flex-col items-center justify-center">

			<!-- <span class="px-[0.01rem] bg-black h-150 items-center"></span> -->
		</div>

		<!-- Fotografia con los links -->
		<aside class="relative mt-10 flex max-w-full flex-col items-center gap-5">
			<p
				class="transform text-5xl transition-all text-white duration-500 {isClicked
					? 'opacity-0'
					: 'opacity-100'}"
			>
				Clica en la imagen
			</p>
			<button onclick={animationIn} class="relative flex w-100 cursor-pointer rounded-lg">
				<!-- PONER EL Z CUANDO ESTE BIEN LA ANIMACION -->
				<img {src} {alt} class="z-10 rounded-lg" />

				<Enlace
					href="/modules/experiencia"
					class="absolute p-5 bg-blue-500 rounded-full shadow-xl hover:bg-blue-800 hover:scale-110 shadow-black top-1/2 right-35 z-1 transform text-center  text-white transition-all duration-1500 {isClicked
						? 'translate-x-20 -translate-y-100 text-3xl'
						: 'translate-y-0'}"
				>
					Experiencia
				</Enlace>
				<Enlace
					href="/modules/estudios"
					class="absolute p-5 bg-blue-500 rounded-full shadow-xl hover:bg-blue-800 hover:scale-110 shadow-black top-1/2 right-35 z-1 transform text-center text-white transition-all duration-2000 {isClicked
						? 'translate-x-80 -translate-y-50 text-3xl'
						: 'translate-x-0'}"
				>
					Estudios
				</Enlace>
				<Enlace
					href="/modules/proyectos"
					class="absolute p-5 bg-blue-500 rounded-full shadow-xl hover:bg-blue-800 hover:scale-110 shadow-black top-1/2 right-35 z-1 transform text-center text-white transition-all duration-2500 {isClicked
						? 'translate-x-85 translate-y-35 text-3xl'
						: ''}"
				>
					Proyectos
				</Enlace>
				<Enlace
					href="/modules/contacto"
					class="absolute p-5 bg-blue-500 rounded-full shadow-xl hover:bg-blue-800 hover:scale-110 shadow-black top-1/2 right-35 z-1 transform text-center text-white transition-all duration-2000 {isClicked
						? 'translate-x-10 translate-y-80 text-3xl'
						: ''}"
				>
					Contacto
				</Enlace>
			</button>
		</aside>
	</article>
</section>
