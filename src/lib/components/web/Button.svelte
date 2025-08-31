<script lang="ts">
  type Props = {
      class?: string;
      type?: "button" | "submit" | "reset";
      text?: string;
      onclick?: () => void;
      disabled?: boolean;
  };

  let { class: addClass = "", type , text = "", onclick, disabled = false }: Props = $props();
</script>

<button class="cursor-pointer text-white py-2 px-4 rounded {addClass}" type={type} {onclick}>
  {text}
</button>