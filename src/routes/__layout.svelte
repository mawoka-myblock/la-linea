<script>
    import '../app.css';
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<svelte:head><title>La Linea - By Marlon</title></svelte:head>

<Navbar />
<div>
    <slot />
</div>

<Footer />
