<script lang="ts">
	import Button from "$lib/components/web/Button.svelte";
	import Input from "$lib/components/web/Input.svelte";
	import TextArea from "$lib/components/web/TextArea.svelte";
</script>

<section class="flex flex-col justify-center items-center p-5 gap-5">
    <p class="text-white text-2xl text-center">Si quieres mas información, ponte en Contacto conmigo...</p>
    <form action="" method="post">
        <div class="flex   gap-4">
            <Input type="text" placeholder="Nombre"/>
            <Input type="number" placeholder="Telefono"/>
            <Input type="email" placeholder="Email" class="border-1"/>
        </div>
        <div class="flex flex-col gap-4 justify-center items-center mt-4">
            <TextArea class="border-1 border-white"/>
            <Button type="submit" text="Enviar"/>
        </div>
    </form>
</section>
