<script lang="ts">
    
    type Props = {
            class?: string;
            divClass?: string;
            iconClass?: string;
            title?: string;
            description?: string;
            company?: string;
            children?: any;
            companyClass?: string;
            colorText?: string;
            href?:string;
            target?:string
        };
    
        let { class: addClass = '', divClass,href, target, iconClass, title, description, company, children, companyClass, colorText }: Props = $props();

</script>


<div
	class="{divClass}"
>
	<div
		class="{iconClass}"
	>
        {@render children?.()}
	</div>
	<h4 class="mb-2 text-lg font-semibold {colorText}"> {title}</h4>
	<p class="text-sm text-slate-400">
		 {description} <a
			href={href}
                        {target}
			class={companyClass}
			>{company}</a
		>
	</p>
</div>
