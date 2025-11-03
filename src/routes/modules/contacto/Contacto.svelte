<script lang="ts">
	import GitHub from '$lib/components/common/icons/GitHub.svelte';
	import LinkedIn from '$lib/components/common/icons/LinkedIn.svelte';
    import Button from '$lib/components/web/Button.svelte';
    import Input from '$lib/components/web/Input.svelte';
    import TextArea from '$lib/components/web/TextArea.svelte';

    let nombre = $state('');
    let telefono = $state('');
    let email = $state('');
    let mensaje = $state('');
    let enviando = $state(false);

    async function contacto() {
        // Validar campos requeridos
        if (!nombre || !email || !mensaje) {
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
<main class="min-h-screen w-full max-w-full flex flex-col md:flex-row justify-center items-center md:gap-10 gap-8">
   <section class="flex flex-col md:flex-row  justify-center gap-5 p-5">
       <aside class="flex flex-col items-center gap-5 p-5">
          
           <div class="flex md:flex-col flex-row pt-5 md:pt-20 text-center md:gap-20 gap-10  text-white">
               <GitHub class="w-15 h-15"/>
               <LinkedIn class="w-15 h-15"/>
           </div>
       </aside>
       
       <aside class="flex flex-col md:w-150 w-100 justify-center gap-5 p-5">
           <p class="text-center text-2xl text-white">CONTACTO</p>
           <form action="" method="post">
               <div class="flex flex-col">
                   <Input type="text" placeholder="Nombre" bind:value={nombre} required
                   class="border-b-0 border-slate-500 rounded-tr-2xl bg-transparent" />
                   <Input type="number" placeholder="Telefono" bind:value={telefono}
                   class="border border-slate-500  bg-transparent" />
                   <Input type="email" placeholder="Email" bind:value={email} required
                   class="border-t-0 border-slate-500 bg-transparent"/>
                   <TextArea class="rounded-br-xl bg-transparent" bind:value={mensaje} required />
               </div>
               
                   <div class="flex justify-center mt-5">
                       <Button type="button" text={enviando ? "Enviando mensaje..." : "Enviar Mensaje"} onclick={contacto} disabled={enviando} 
                       class="bg-transparent border border-slate-500 rounded-xl hover:shadow-2xl hover:shadow-black hover:bg-blue-500 transition-all duration-700"/>
                   </div>
           </form>
        </aside>
   </section>
</main>

