<script lang="ts">
	import SocialMedia from "$lib/components/common/SocialMedia/SocialMedia.svelte";

</script>
<div class="flex flex-col w-full mt-40 justify-center items-center">
        <!-- Contenido del Hero -->
        <div class="flex flex-col w-full justify-center items-center">
            <!-- Nombre con gradiente animado -->
            <h1 class="gradient-text text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-center leading-tight">
                Javier Hernández Pérez
            </h1>
            
            <!-- Subtítulo -->
            <p class="text-slate-300 text-xl md:text-2xl font-light mb-8 text-center tracking-wide">
                Full Stack Developer
            </p>
            
            <!-- Descripción -->
            <p class="text-slate-400 text-base md:text-lg leading-relaxed mb-10 text-center max-w-md mx-auto">
                Empezando a crear experiencias web con tecnologías modernas como Svelte, TypeScript... y diseño centrado en el usuario con TailwindCSS.
            </p>
            
            <!-- Redes Sociales -->
            <SocialMedia class="w-100" />
        </div>
 </div>
<style>
    .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
</style>