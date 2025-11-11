<script lang="ts">
	import Email from '$lib/components/common/icons/Email.svelte';
	import Location from '$lib/components/common/icons/Location.svelte';
	import GitHub from '$lib/components/common/icons/GitHub.svelte';
	import LinkedIn from '$lib/components/common/icons/LinkedIn.svelte';
	import ContactCards from './ContactCards/ContactCards.svelte';
	import Clock from '$lib/components/common/icons/Clock.svelte';
	import MessageError from './MessageForm/MessageError.svelte';
	import MessageOk from './MessageForm/MessageOk.svelte';
	import Form from './Form/Form.svelte';
	import SocialMedia from '$lib/components/common/SocialMedia/SocialMedia.svelte';

	let nombre = $state('');
	let telefono = $state('');
	let email = $state('');
	let asunto = $state('');
	let mensaje = $state('');
	let enviando = $state(false);
	let mensajeExito = $state(false);
	let mensajeError = $state(false);


	
</script>

<div id="contacto" class="relative min-h-screen w-full bg-gray-900 py-20">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<h1
				class="mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text p-3 text-5xl font-bold text-transparent md:text-6xl"
			>
				Contacta Conmigo
			</h1>
			<div class="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Contact Info Section -->
			<div class="space-y-8">
				<!-- Contact Cards -->
				<div class="space-y-6">
					<!-- Email Card -->
					<ContactCards class="bg-blue-500/20" name="Email" valor="javierhpdev@gmail.com"
						borderColorHover="hover:border-blue-500/50"
						><Email /></ContactCards
					>
					<ContactCards
						class="bg-purple-500/20"
						name="Ubicación"
						valor="Santa Cruz de Tenerife, España"
						borderColorHover="hover:border-purple-500/50"
					>
						<Location /></ContactCards
					>
					<ContactCards class="bg-green-500/20" name="Tiempo de respuesta" valor="Menos de 24 horas"
						borderColorHover="hover:border-green-500/50"
						><Clock /></ContactCards
					>
				</div>
				<!-- Social Media Links -->
				<SocialMedia />
			</div>

			<!-- Contact Form Section -->
			<Form
				bind:nombre
				bind:telefono
				bind:email
				bind:asunto
				bind:mensaje
				bind:enviando
				bind:mensajeExito
				bind:mensajeError
			/>
		</div>

		<!-- Message Feedback -->	
		{#if mensajeExito}
			<MessageOk bind:mensajeExito={mensajeExito} />
		{/if}
		{#if mensajeError}
			<MessageError bind:mensajeError={mensajeError} />
		{/if}
	</div>
</div>
