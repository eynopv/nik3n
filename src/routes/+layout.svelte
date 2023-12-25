<script lang="ts">
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    import '../app.css';
    import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
    <title>NIK3N Pro Fishing</title>
</svelte:head>

<div class="animate-fadein-500 opacity-0">
    <Nav />
</div>
<slot />
<Footer />
