<script lang="ts">
    type Props = {
        class?: string;
        name?: string;
        textColor?: string;
        children?: any;
        divClass?: string;
        iconClass?: string;
    };

    let { class: addClass = '', name = '',  textColor = '', children, divClass, iconClass }: Props = $props();
</script>


                        <div
							class="{divClass}"
						>
							<div class="flex flex-col items-center text-center">
								<div
									class="{iconClass}"
								>
									{@render children?.()}
								</div>
								<h4 class="mb-2 text-lg font-semibold {textColor}">{name}</h4>
							</div>
						</div>