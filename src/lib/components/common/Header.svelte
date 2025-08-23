<script lang="ts">
   type Props = {
       class?: string;
   }

   let { class: addClass="" } : Props = $props();
</script>

<header>
   <h1 class="flex justify-center items-center text-2xl font-bold {addClass}">Header content goes here</h1>
</header>
