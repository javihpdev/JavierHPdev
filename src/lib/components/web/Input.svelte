<script lang="ts">

    type Props = {
        type?: "text" | "number" | "email";
        placeholder?: string;
        value?: string;
        class?: string;
        required?: boolean;
    };
    let {type, placeholder = "", value = $bindable(""), class: addClass = "", required = false}: Props = $props();

</script>




<input type={type} placeholder={placeholder} bind:value={value} 
    class="caret-white no-spinners text-white focus:outline-none focus:shadow-none focus:ring-0 {addClass}"
    {required}
    />  
