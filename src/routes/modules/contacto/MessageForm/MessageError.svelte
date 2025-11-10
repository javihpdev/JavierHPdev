<script lang="ts">
	import Button from "$lib/components/web/Button.svelte";

type Props = {
		mensajeError: boolean;
	};
	let { mensajeError = $bindable(false) }: Props = $props();

    $effect(() => {
        if (mensajeError) {
            setTimeout(() => {
                const el =
                    document.getElementById('messageError');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    });

</script>


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
					<p class="text-3xl tracking-wide text-white md:text-4xl">
						¡No se ha podido Enviar el Mensaje!
					</p>
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