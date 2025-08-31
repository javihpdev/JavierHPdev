<script lang="ts">

    type Props = {
      class?: string;
    }

    let { class: addClass="", } : Props = $props();

</script>

<div class="flex flex-col justify-center items-center p-5 gap-5 {addClass}">
    <div>
        <span>Estudios</span>


    </div>
    

    <p class="text-black"> LinkiaFP</p>
</div>