<script lang="ts">
	import Footer from "$lib/components/common/Footer.svelte";
	import Header from "$lib/components/common/Header.svelte";
	import Home from "../home/Home.svelte";
	import AboutMe from "./AboutMe.svelte";



  
</script>
<div class="relative">
    <Header />
    <Home />    
    <AboutMe class="absolute top-50 text-white left-100 bg-transparent mt-10" />
    <Footer/>
</div>
    