<script lang="ts">
	import Button from "$lib/components/web/Button.svelte";
	import Input from "$lib/components/web/Input.svelte";
	import TextArea from "$lib/components/web/TextArea.svelte";

    let nombre = $state('');
    let telefono = $state('');
    let email = $state('');
    let mensaje = $state('');

    async function contacto(){
        try{
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

            if(response.ok && result.success){
                alert("Mensaje enviado correctamente");
            } else{
                console.log(result.message || "Ha ocurrido un error");
            }
        } catch (error){
            console.log("Ha ocurrido un errorsito");
        }
    }


</script>

<section class="flex flex-col justify-center items-center p-5 gap-5">
    <p class="text-white text-2xl text-center">Contacta conmigo sin compromiso...</p>
    <form action="" method="post">
        <div class="flex   gap-4">
            <Input type="text" placeholder="Nombre" bind:value={nombre} required/>
            <Input type="number" placeholder="Telefono" bind:value={telefono}/>
            <Input type="email" placeholder="Email" class="border-1" bind:value={email} required/>
        </div>
        <div class="flex flex-col gap-4 justify-center items-center mt-4">
            <TextArea class="border-1 rounded-xl border-white" bind:value={mensaje} required/>
            <Button type="button" text="Enviar" onclick={contacto}/>
        </div>
    </form>
</section>
