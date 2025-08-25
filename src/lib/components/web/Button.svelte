<script lang="ts">
  type Props = {
      class?: string;
      type?: "button" | "submit" | "reset";
      text?: string;
      onclick?: () => void;
  };

  let { class: addClass = "", type , text = "", onclick }: Props = $props();
</script>

<button class="bg-blue-500 cursor-pointer  text-white py-2 px-4 rounded {addClass}" type={type} {onclick}>
  {text}
</button>