<script lang="ts">
    import Copyright from "../footer/Copyright.svelte";

  type Props = {
       class?: string;
   }

  let { class: addClass="" } : Props = $props();
</script>

<footer class="flex gap-5 justify-center bottom-0 w-full text-white p-10 bg-[#0e151f] {addClass}"> 
  <div class="flex gap-1">
      <Copyright/> <span>2025</span>
  </div>
  <span>|</span>
  <p>Javier Hernández Pérez</p>
  <span>|</span>
  <p class="font-bold">Redes Sociales:</p>
  <p><a href="https://github.com/JavierHPdev" target="_blank">GitHub <strong>(Poner la imagen)</strong></a></p>
  <p><a href="https://www.linkedin.com/in/javierhpdev/" target="_blank">LinkedIn <strong>(Poner la imagen)</strong></a></p>
</footer>