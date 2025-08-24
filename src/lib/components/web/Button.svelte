<script lang="ts">
  type Props = {
      class?: string;
      type?: "button" | "submit" | "reset";
      text?: string;
  };

  let { class: addClass = "", type , text = ""}: Props = $props();
</script>

<button class="bg-blue-500 cursor-pointer  text-white py-2 px-4 rounded {addClass}" type={type}>
  {text}
</button>