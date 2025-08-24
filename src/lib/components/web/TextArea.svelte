<script lang="ts">

    type Props = {
        class?: string;
    };

    let { class: addClass = "" }: Props = $props();

</script>

<textarea class="caret-white bg-[#0e151f] text-white" placeholder="Escribe aquí el mensaje..." name="mensaje" cols="30" rows="10"></textarea>