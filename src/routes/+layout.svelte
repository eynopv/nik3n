<script lang="ts">
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    import { inject } from '@vercel/analytics';
    import { dev } from '$app/environment';
    import '../app.css';
    import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';

    injectSpeedInsights();
    inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
    <title>NIK3N Pro Fishing</title>
</svelte:head>

<div class="animate-fadein-500 opacity-0">
    <Nav />
</div>
<slot />
<Footer />
