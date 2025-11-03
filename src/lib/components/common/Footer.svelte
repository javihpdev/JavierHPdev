<script lang="ts">
    import Copyright from "./icons/Copyright.svelte";
	// import GitHub from "./icons/GitHub.svelte";
	// import LinkedIn from "./icons/LinkedIn.svelte";

  type Props = {
       class?: string;
   }

  let { class: addClass="" } : Props = $props();
</script>

<footer class="flex gap-5 justify-center bottom-0 w-full text-white p-10 bg-transparent border-t-1 border-white/30 shadow-black {addClass}"> 
  <div class="flex gap-1">
      <Copyright/> <span>2025</span>
  </div>
  <span>|</span>
  <p>Javier Hernández Pérez</p>
  <span>|</span>
  <p class="font-bold">PORFOLIO PERSONAL</p>
  <span>|</span>
  <p class="font-bold">Redes Sociales:</p>
  <!-- <a href="https://github.com/JavierHPdev" target="_blank"><GitHub class="hover:scale-110 transition-all duration-700 " /></a> -->
  <!-- <a href="https://www.linkedin.com/in/javierhpdev/" target="_blank"><LinkedIn class="hover:scale-110 transition-all duration-700" /></a> -->
</footer>