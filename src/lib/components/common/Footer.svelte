<script lang="ts">
	import Copyright from "../footer/Copyright.svelte";


  type Props = {
       class?: string;
   }

  let { class: addClass="" } : Props = $props();
</script>

<footer class="flex gap-2 justify-center items-center text-center p-10 bg-purple-600"> 
  <Copyright/>
  <p> 2025</p>
  <p>Javier Hernández Pérez</p>
  <p>|</p>
  <p class="font-bold">Redes Sociales:</p>
  <p><a href="https://github.com/JavierHPdev" target="_blank">GitHub <strong>(Poner la imagen)</strong></a></p>
  <p><a href="https://www.linkedin.com/in/javierhpdev/" target="_blank">LinkedIn <strong>(Poner la imagen)</strong></a></p>
</footer>