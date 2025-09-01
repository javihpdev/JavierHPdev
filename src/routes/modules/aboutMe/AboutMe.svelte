<script lang="ts">
 type Props ={
    class?: string;
 }

 let {class: addClass=""} : Props = $props();

</script>
<div class="flex flex-col justify-center items-center p-5 gap-5 {addClass}">
    <div class="flex flex-col justify-center items-center gap-4">
        <img src="/src/lib/images/ImagenPerfilPorfolio.webp" alt="imagenPerfil" class="rounded-xl w-60 h-75 "/>
        <span>Sobre Mí</span>


    </div>
    

    <p class="text-black"> Soy un desarrollador de software con experiencia en la creación de aplicaciones web utilizando Svelte y TypeScript.</p>
</div>
