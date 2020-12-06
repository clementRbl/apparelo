<script>
	import Nav from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>

</style>


<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />