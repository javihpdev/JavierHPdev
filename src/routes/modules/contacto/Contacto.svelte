<script lang="ts">
	import GitHub from '$lib/components/common/icons/GitHub.svelte';
	import LinkedIn from '$lib/components/common/icons/LinkedIn.svelte';
	import Button from '$lib/components/web/Button.svelte';
	import Input from '$lib/components/web/Input.svelte';
	import TextArea from '$lib/components/web/TextArea.svelte';

	let nombre = $state('');
	let telefono = $state('');
	let email = $state('');
	let asunto = $state('');
	let mensaje = $state('');
	let enviando = $state(false);
	let mensajeExito = $state(false);
	let mensajeError = $state(false);

	//  Efecto reactivo para hacer scroll cuando mensajeExito cambie
	$effect(() => {
		if (mensajeExito) {
			setTimeout(() => {
				const el = document.getElementById('messageExitoso');
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}, 100);
		}
	});
	//  Efecto reactivo para hacer scroll cuando mensajeError cambie
	$effect(() => {
		if (mensajeError) {
			setTimeout(() => {
				const el = document.getElementById('messageError');
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}, 100);
		}
	});

	async function contacto() {
		// Validar campos requeridos
		if (!nombre || !email || !mensaje || !asunto) {
			alert('Por favor completa todos los campos obligatorios');
			return;
		}

		enviando = true;

		try {
			const response = await fetch('/server/contacto', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					nombre,
					telefono,
					email,
					asunto,
					mensaje
				})
			});

			const result = await response.json();

			if (response.ok && result.success) {
				mensajeExito = true;
				// Limpiar formulario
				nombre = '';
				telefono = '';
				email = '';
				asunto = '';
				mensaje = '';
			} else {
				mensajeError = true;
			}
		} catch (error) {
			console.error('Error:', error);
			alert('Error de conexión. Intenta nuevamente.');
		} finally {
			enviando = false;
		}
	}
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
					<div
						class="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50"
					>
						<div class="flex items-center space-x-4">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
								<svg
									class="h-6 w-6 text-blue-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									></path>
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-white">Email</h3>
								<p class="text-slate-400">javierhpdev@gmail.com</p>
							</div>
						</div>
					</div>

					<!-- Location Card -->
					<div
						class="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50"
					>
						<div class="flex items-center space-x-4">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
								<svg
									class="h-6 w-6 text-purple-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									></path>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									></path>
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-white">Ubicación</h3>
								<p class="text-slate-400">Santa Cruz de Tenerife, España</p>
							</div>
						</div>
					</div>

					<!-- Response Time Card -->
					<div
						class="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-500/50"
					>
						<div class="flex items-center space-x-4">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
								<svg
									class="h-6 w-6 text-green-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-white">Tiempo de respuesta</h3>
								<p class="text-slate-400">Menos de 24 horas</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Social Links -->
				<div class="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm">
					<h3 class="mb-6 text-center text-xl font-semibold text-white">Sígueme en</h3>
					<div class="flex justify-center space-x-6">
						<a
							href="https://github.com/javihpdev"
							target="_blank"
							rel="noopener noreferrer"
							class="group rounded-2xl bg-slate-700/50 p-4 transition-all duration-300 hover:scale-110 hover:bg-slate-600/50"
						>
							<GitHub class="h-8 w-8 text-slate-400 transition-colors group-hover:text-white" />
						</a>
						<a
							href="https://www.linkedin.com/in/javihdezperez"
							target="_blank"
							rel="noopener noreferrer"
							class="group rounded-2xl bg-slate-700/50 p-4 transition-all duration-300 hover:scale-110 hover:bg-slate-600/50"
						>
							<LinkedIn
								class="h-8 w-8 text-slate-400 transition-colors group-hover:text-blue-400"
							/>
						</a>
					</div>
				</div>
			</div>

			<!-- Sección Contacto -->
			<div class="relative">
				<!-- Decoracion shadow para el formulario -->
				<div
					class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur"
				></div>

				<div
					class="relative rounded-3xl border border-slate-700/50 bg-slate-800/80 p-8 backdrop-blur-sm"
				>
					<div class="mb-8">
						<h2 class="mb-2 text-2xl font-bold text-white">Envíame un mensaje</h2>
						<p class="text-slate-400">Me pondré en contacto contigo lo más pronto posible.</p>
					</div>

					<form class="space-y-6">
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<!-- Nombre -->
							<div class="space-y-2">
								<label for="nombre" class="block text-sm font-medium text-slate-300">
									Nombre *
								</label>
								<Input
									type="text"
									placeholder="Tu nombre completo"
									bind:value={nombre}
									required
									class="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 transition-colors focus:border-blue-500 focus:ring-0 focus:outline-none"
								/>
							</div>

							<!-- Teléfono -->
							<div class="space-y-2">
								<label for="telefono" class="block text-sm font-medium text-slate-300">
									Teléfono
								</label>
								<Input
									type="number"
									placeholder="+34 123 456 789"
									bind:value={telefono}
									class="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 transition-colors focus:border-purple-500 focus:ring-0 focus:outline-none"
								/>
							</div>
						</div>

						<!-- Email -->
						<div class="space-y-2">
							<label for="email" class="block text-sm font-medium text-slate-300"> Email * </label>
							<Input
								type="email"
								placeholder="tu@email.com"
								bind:value={email}
								required
								class="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 transition-colors focus:border-blue-500 focus:ring-0 focus:outline-none"
							/>
						</div>

						<!-- Asunto -->
						<div class="space-y-2">
							<label for="asunto" class="block text-sm font-medium text-slate-300">
								Asunto *
							</label>
							<Input
								type="text"
								placeholder="Asunto del mensaje"
								bind:value={asunto}
								required
								class="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 transition-colors focus:border-blue-500 focus:ring-0 focus:outline-none"
							/>
						</div>
						<!-- Mensaje -->
						<div class="space-y-2">
							<label for="mensaje" class="block text-sm font-medium text-slate-300">
								Mensaje *
							</label>
							<TextArea
								bind:value={mensaje}
								required
								class="h-32 w-full resize-none rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 transition-colors focus:border-purple-500 focus:ring-0 focus:outline-none"
							/>
						</div>

						<!-- Submit Button -->
						<div class="pt-4">
							<Button
								type="submit"
								text={enviando ? 'Enviando mensaje...' : 'Enviar Mensaje'}
								onclick={contacto}
								disabled={enviando}
								class="w-full transform rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-600 hover:to-purple-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
							/>
						</div>

						<!-- Form Footer -->
						<div class="pt-4 text-center">
							<p class="text-sm text-slate-400">
								* Campos obligatorios. Tus datos están seguros conmigo.
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>

		{#if mensajeExito}
			<div
				id="messageExitoso"
				class="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm"
			>
				<div
					class="flex flex-col items-center justify-center gap-5 rounded-3xl border border-slate-700 bg-gray-900 p-8 md:p-12"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="64"
						height="64"
						fill="none"
						viewBox="0 0 64 64"
					>
						<circle
							cx="32"
							cy="32"
							r="30"
							fill="#22c55e"
							fill-opacity="0.15"
							stroke="#22c55e"
							stroke-width="4"
						/>
						<path
							d="M20 34l8 8 16-16"
							stroke="#22c55e"
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
							fill="none"
						/>
					</svg>
					<p class="text-3xl tracking-wide text-white md:text-4xl">¡Mensaje Enviado!</p>
					<p class="text-center text-slate-400">Gracias por ponerte en contacto conmigo.</p>
					<p class="text-center text-slate-400">
						Te llegará un correo electrónico de confirmación.
					</p>
					<Button
						type="button"
						text="Cerrar"
						onclick={() => (mensajeExito = false)}
						class="mt-6 transform rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
					/>
				</div>
			</div>
		{/if}
		{#if mensajeError}
			 <div
				id="messageError"
				class="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm"
			>
				<div
					class="flex flex-col items-center justify-center gap-5 rounded-3xl border border-slate-700 bg-gray-900 p-8 md:p-12"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="64"
						height="64"
						fill="none"
						viewBox="0 0 64 64"
					>
						<circle
							cx="32"
							cy="32"
							r="30"
							fill="#ef4444"
							fill-opacity="0.15"
							stroke="#ef4444"
							stroke-width="4"
						/>
						<path
							d="M20 20l24 24M44 20L20 44"
							stroke="#ef4444"
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
							fill="none"
						/>
					</svg>
					<p class="text-3xl tracking-wide text-white md:text-4xl">¡No se ha podido Enviar el Mensaje!</p>
					<p class="text-center text-slate-400">Gracias por ponerte en contacto conmigo.</p>
					<p class="text-center text-slate-400">
						Pero ha habido un problema al enviarlo. Inténtalo de nuevo.
					</p>
					<Button
						type="button"
						text="Cerrar"
						onclick={() => (mensajeError = false)}
						class="mt-6 transform rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
					/>
				</div>
			</div>
		{/if}
       
	</div>
</div>
