<script lang="ts">
	import Button from "$lib/components/web/Button.svelte";


	type Props = {
		mensajeExito: boolean;
	};
	let { mensajeExito = $bindable(false) }: Props = $props();

    $effect(() => {
		if (mensajeExito) {
			setTimeout(() => {
				const el =
					document.getElementById('messageExitoso');
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}, 100);
		}
	});

</script>
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
					<div class="mt-2 rounded-xl bg-yellow-500/10 border border-yellow-500/30 p-4 w-full">
            <div class="flex items-start gap-3">
				<!-- Imagen de advertencia -->
                <svg 
                    class="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                </svg>
				<!-- Cuadro de advertencia -->
                <div class="text-sm text-yellow-200/90">
                    <p class="font-semibold mb-1">Si no recibes el correo:</p>
                    <ul class="space-y-1 text-yellow-200/70">
                        <li>• Revisa la carpeta de <span class="font-semibold text-yellow-200">spam</span></li>
                        <li>• Comprueba que el <span class="font-semibold text-yellow-200">email</span> escrito sea el correcto</li>
                    </ul>
                </div>
            </div>
        </div>
					<Button
						type="button"
						text="Cerrar"
						onclick={() => (mensajeExito = false)}
						class="mt-6 transform rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
					/>
				</div>
			</div>