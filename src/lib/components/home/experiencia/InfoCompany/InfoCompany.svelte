<script lang="ts">
    type Props = {
        class?: string;
    }
    let { class: addClass = '' }: Props = $props();
</script>
 
				<div class="mb-8 flex flex-col items-center justify-between md:flex-row">
					<div class="mb-6 text-center md:mb-0 md:text-left">
						<h2 class="mb-2 text-3xl font-bold text-white">TipoMedia</h2>
						<p class="text-xl font-medium text-blue-400">Full Stack Developer</p>
						<p class="mt-2 text-slate-400">Ene 2025 - Nov 2025</p>
					</div>

					<!-- Company Logo -->
					<div
						class="rounded-2xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105"
					>
						<a href="https://tipomedia.com/" target="_blank" rel="noopener noreferrer">
							<img src="/images/tipomedia_logo.png" alt="TipoMedia Logo" class="h-16 w-auto" />
						</a>
					</div>
				</div>

				<!-- Description -->
				<div class="mb-10">
					<p class="mb-6 text-lg leading-relaxed text-slate-300">
						Participación activa en el desarrollo y mantenimiento del proyecto Historiatelo.
						Experiencia en la gestión integral de sitios web, desde el diseño inicial hasta la
						implementación y el mantenimiento continuo.
					</p>

					<!-- Highlight Project -->
					<div
						class="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6"
					>
						<h3 class="mb-3 flex items-center text-xl font-semibold text-white">
							<span class="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
							Proyecto Destacado: Historiatelo
						</h3>
						<p class="text-slate-300">
							Plataforma web donde usuarios con perfil crean, editan y suben "historias" (Paquetes)
							a la plataforma para que otros usuarios las vean. Funcionalidad principal: gestión de
							paquetes (Crear/Editar/Subir) y visualización compartida entre usuarios.
						</p>
					</div>
				</div>