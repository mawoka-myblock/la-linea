<script>
    import '../app.css';
    import Navbar from '$lib/Navbar.svelte';
</script>

<svelte:head><title>La Linea - By Marlon</title></svelte:head>

<Navbar />
<div>
    <slot />
</div>
