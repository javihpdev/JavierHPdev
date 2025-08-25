<script lang="ts">

    type Props = {
        class?: string;
        value?: string;
    };

    let { class: addClass = "", value = $bindable("") }: Props = $props();

</script>

<textarea class="caret-white bg-[#0e151f] text-white {addClass}" bind:value={value} placeholder="Escribe aquí el mensaje..." name="mensaje" cols="90" rows="5"></textarea>