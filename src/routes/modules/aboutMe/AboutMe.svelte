<script lang="ts">
 type Props ={
    class?: string;
 }

 let {class: addClass=""} : Props = $props();

</script>
<div class="flex flex-col justify-center items-center p-5 gap-5 {addClass}">
    <div>
        <img src="/ImagenPerfilPorfolio.png" alt="imagenPerfil" class="rounded-xl"/>
        <span>Sobre Mí</span>


    </div>
    

    <p class="text-black"> Soy un desarrollador de software con experiencia en la creación de aplicaciones web utilizando Svelte y TypeScript.</p>
</div>
