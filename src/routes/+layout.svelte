<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/common/Header.svelte';
	import Footer from '$lib/components/common/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<Header/>
	{@render children?.()}
	<div class="mt-auto">
		<Footer/>
	</div>
</div>
	