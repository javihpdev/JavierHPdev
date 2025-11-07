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
                alert('Mensaje enviado correctamente');
                // Limpiar formulario
                nombre = '';
                telefono = '';
                email = '';
                asunto = '';
                mensaje = '';
            } else {
                alert(result.error || 'Ha ocurrido un error');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error de conexión. Intenta nuevamente.');
        } finally {
            enviando = false;
        }
    }
</script>

<div 
    id="contacto"
    class="min-h-screen w-full bg-gray-900 py-20"
>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center mb-16">
            <h1 class="text-5xl md:text-6xl p-3 font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                Contacta Conmigo
            </h1>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p class="text-xl text-slate-400 mt-6 max-w-3xl mx-auto">
                ¿Tienes un proyecto en mente? ¡Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad!
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Info Section -->
            <div class="space-y-8">
                <!-- Contact Cards -->
                <div class="space-y-6">
                    <!-- Email Card -->
                    <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-white">Email</h3>
                                <p class="text-slate-400">javierhpdev@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <!-- Location Card -->
                    <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-white">Ubicación</h3>
                                <p class="text-slate-400">Santa Cruz de Tenerife, España</p>
                            </div>
                        </div>
                    </div>

                    <!-- Response Time Card -->
                    <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
                <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                    <h3 class="text-xl font-semibold text-white mb-6 text-center">Sígueme en</h3>
                    <div class="flex justify-center space-x-6">
                        <a 
                            href="https://github.com/javihpdev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="group p-4 bg-slate-700/50 rounded-2xl hover:bg-slate-600/50 transition-all duration-300 hover:scale-110"
                        >
                            <GitHub class="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/javihdezperez" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="group p-4 bg-slate-700/50 rounded-2xl hover:bg-slate-600/50 transition-all duration-300 hover:scale-110"
                        >
                            <LinkedIn class="w-8 h-8 text-slate-400 group-hover:text-blue-400 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Contact Form Section -->
            <div class="relative">
                <!-- Background Decoration -->
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20"></div>
                
                <div class="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                    <div class="mb-8">
                        <h2 class="text-2xl font-bold text-white mb-2">Envíame un mensaje</h2>
                        <p class="text-slate-400">Me pondré en contacto contigo pronto.</p>
                    </div>

                    <form class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-0 focus:outline-none transition-colors"
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
                                    class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-500 focus:ring-0 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="space-y-2">
                            <label for="email" class="block text-sm font-medium text-slate-300">
                                Email *
                            </label>
                            <Input 
                                type="email" 
                                placeholder="tu@email.com" 
                                bind:value={email} 
                                required
                                class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-0 focus:outline-none transition-colors"
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
                                class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-0 focus:outline-none transition-colors"
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
                                class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-500 focus:ring-0 focus:outline-none transition-colors h-32 resize-none"
                            />
                        </div>

                        <!-- Submit Button -->
                        <div class="pt-4">
                            <Button 
                                type="submit" 
                                text={enviando ? "Enviando mensaje..." : "Enviar Mensaje"} 
                                onclick={contacto} 
                                disabled={enviando}
                                class="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                            />
                        </div>

                        <!-- Form Footer -->
                        <div class="text-center pt-4">
                            <p class="text-sm text-slate-400">
                                * Campos obligatorios. Tus datos están seguros conmigo.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

       
    </div>
</div>