<script lang="ts">

    type Props = {
        type?: "text" | "number" | "email";
        placeholder?: string;
        value?: string;
        class?: string;
    };

    let {type, placeholder = "", value = "", class: addClass = ""}: Props = $props();

</script>


<input type={type} placeholder={placeholder} bind:value={value} 
    class="rounded-xl caret-white text-lg bg-transparent no-spinners text-white border-1 border-white {addClass}"
    />
