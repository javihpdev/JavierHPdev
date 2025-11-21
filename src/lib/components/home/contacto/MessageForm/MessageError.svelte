<script lang="ts">
    import Button from "$lib/components/web/Button.svelte";

    type Props = {
        mensajeError: boolean;
    };
    let { mensajeError = $bindable(false) }: Props = $props();

    $effect(() => {
        if (mensajeError) {
            setTimeout(() => {
                const el = document.getElementById('messageError');
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
        class="flex flex-col items-center justify-center gap-5 rounded-3xl border border-slate-700 bg-gray-900 p-8 md:p-12 max-w-md"
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
        
        <p class="text-3xl tracking-wide text-white text-center md:text-4xl font-bold">
            ¡Error al Enviar!
        </p>
        
        <p class="text-center text-slate-300 text-lg">
            No se ha podido enviar tu mensaje.
        </p>
        
        <p class="text-center text-slate-400">
            Ha ocurrido un problema al procesar tu solicitud.
        </p>
        
        <!-- Caja de instrucciones mejorada -->
        <div class="mt-2 rounded-xl bg-red-500/10 border border-red-500/30 p-4 w-full">
            <div class="flex items-start gap-3">
                <svg 
                    class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <div class="text-sm text-red-200/90">
                    <p class="font-semibold mb-1">Por favor, verifica:</p>
                    <ul class="space-y-1 text-red-200/70">
                        <li>• Todos los campos estén completos</li>
                        <li>• El formato del email sea correcto</li>
                        <li>• Tu conexión a internet</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <Button
            type="button"
            text="Cerrar"
            onclick={() => (mensajeError = false)}
            class="mt-4 w-full transform rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-red-600 hover:to-red-700 hover:shadow-xl"
        />
    </div>
</div>