<script lang="ts">

    type Props = {
        class?: string;
        value?: string;
        required?: boolean;
    };

    let { class: addClass = "", value = $bindable(""), required = false }: Props = $props();

</script>

<textarea class="caret-white bg-[#0e151f] text-white border border-slate-500 focus:outline-none focus:shadow-none focus:ring-0 {addClass}" bind:value={value} placeholder="Escribe aquí el mensaje..." name="mensaje" cols="90" rows="5" {required}></textarea>