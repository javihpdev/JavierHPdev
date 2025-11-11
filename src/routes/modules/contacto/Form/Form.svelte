<script lang="ts">
    import Button from "$lib/components/web/Button.svelte";
    import Input from "$lib/components/web/Input.svelte";
    import TextArea from "$lib/components/web/TextArea.svelte";

    type Props = {
        nombre: string;
        telefono: string;
        email: string;
        asunto: string;
        mensaje: string;
        enviando: boolean;
        mensajeExito: boolean;
        mensajeError: boolean;
    };
    
    let {
        nombre = $bindable(""),
        telefono = $bindable(""),
        email = $bindable(""),
        asunto = $bindable(""),
        mensaje = $bindable(""),
        enviando = $bindable(false),
        mensajeExito = $bindable(false),
        mensajeError = $bindable(false),
    }: Props = $props();   

	 function validarEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
	
    // Function to handle form 
	async function contacto(e: Event) {
		// Este event evita que se recargue la pagina al enviar el formulario y que salga la URL con los parametros en la barra de direcciones del navegador
		e.preventDefault();
		
		// Validar campos requeridos
		if (!nombre || !email || !mensaje || !asunto) {
			alert('Por favor completa todos los campos obligatorios');
			return;
		}

		if (!validarEmail(email)) {
			alert('Por favor ingresa un correo electrónico válido');
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
				// Clear form fields
				nombre = '';
				telefono = '';
				email = '';
				asunto = '';
				mensaje = '';
			} else {
				mensajeError = true;
				console.error('Error al enviar el mensaje:', result.error);
			}
			
		} catch (error) {
			console.error('Error:', error);
			mensajeError = true;
		} finally {
			enviando = false;
		}
	}

</script>
<!-- Contact Section -->
			<div class="relative">
				<!-- Background decoration to Form, blur -->
				<div
					class="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur"
				></div>

				<div
					class="relative rounded-3xl border border-slate-700/50 bg-slate-800/80 p-8 backdrop-blur-sm"
				>
					<div class="mb-8">
						<h2 class="mb-2 text-2xl font-bold text-white">Envíame un mensaje</h2>
						<p class="text-slate-400">Me pondré en contacto contigo lo más pronto posible.</p>
					</div>

					<form class="space-y-6" onsubmit={contacto}>
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<!--  Name -->
							<div class="space-y-2">
								<label for="nombre" class="block text-sm font-medium text-slate-300">
									Nombre <span class="text-red-500">*</span>
								</label>
								<Input
									type="text"
									placeholder="Nombre completo"
									bind:value={nombre}
									required
									class="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 transition-colors focus:border-blue-500 focus:ring-0 focus:outline-none"
								/>
							</div>

							<!-- Phone -->
							<div class="space-y-2">
								<label for="telefono" class="block text-sm font-medium text-slate-300">
									Teléfono <span class="text-slate-400 italic">(opcional)</span>
								</label>
								<Input
									type="number"
									placeholder="123 456 789"
									bind:value={telefono}
									class="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 transition-colors focus:border-purple-500 focus:ring-0 focus:outline-none"
								/>
							</div>
						</div>

						<!-- Email -->
						<div class="space-y-2">
							<label for="email" class="block text-sm font-medium text-slate-300">
								Email <span class="text-red-500">*</span>
								
							</label>
							<Input
								type="email"
								placeholder="tu@email.com"
								bind:value={email}
								required
								class="w-full rounded-xl border bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 transition-colors focus:border-blue-500 focus:ring-0 focus:outline-none"
							/>
						</div>

						<!-- Subject -->
						<div class="space-y-2">
							<label for="asunto" class="block text-sm font-medium text-slate-300">
								Asunto <span class="text-red-500">*</span>
							</label>
							<Input
								type="text"
								placeholder="Asunto del mensaje"
								bind:value={asunto}
								required
								class="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 transition-colors focus:border-blue-500 focus:ring-0 focus:outline-none"
							/>
						</div>
						<!-- Message -->
						<div class="space-y-2">
							<label for="mensaje" class="block text-sm font-medium text-slate-300">
								Mensaje <span class="text-red-500">*</span>
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