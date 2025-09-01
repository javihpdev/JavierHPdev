<script lang="ts">

    type Props = {
      class?: string;
    }

    let { class: addClass="", } : Props = $props();

</script>

<div class="flex flex-col justify-center max-h-screen items-center p-5 text-white gap-5 {addClass}">
    <div
      id="estudios"
      class="flex flex-col w-full justify-center md:text-center items-center gap-3"
    >
      <article class="flex flex-col w-full max-w-[95%] justify-center rounded-2xl items-center gap-10 p-10 md:p-20">
        <h1 class="text-5xl font-bold">Estudios</h1>
        <div class="flex w-full flex-col gap-2 ">
          <p class="font-bold text-center" >Desarrollo de Aplicaciones Web (Grado Superior)</p>
          <p class="text-2xl font-bold text-center">LinkiaFP</p>
          <ul class="flex flex-col gap-2"><span class="text-center">Conocimientos en lenguajes de programación web:</span>
          <span class="h-0.5 md:hidden w-full"></span>
          <li><span class="font-bold">JavaScript:</span> Desarrollo de lógica interactiva en el lado del cliente.</li> 
          <li><span class="font-bold">HTML:</span> Estructuración de contenido web.</li>
          <li><span class="font-bold">CSS:</span> Estilos y diseño visual de páginas web.</li>
          <li><span class="font-bold">PHP:</span> Desarrollo de lógica del lado del servidor. </li>
          </ul>
        </div>
        <a href="https://goo.su/b9F3U4" target="_blank">
          <img src="/src/lib/images/nlogo-linkia.webp" alt="logo linkiafp" class="w-50" />
        </a>
      </article>
    </div>
</div>