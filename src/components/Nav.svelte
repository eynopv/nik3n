<script lang="ts">
    import Container from './Container.svelte';
    import BrowseOurProductsButton from './BrowseOurProductsButton.svelte';
    import Button from './Button.svelte';
    import Whatsapp from './icons/Whatsapp.svelte';
</script>

<Container>
    <nav class="h-[100px] flex items-center justify-between">
        <div>
            <a href="/">
                <img src="logo.png" class="h-[48px]" alt="NIK3N Logo" />
            </a>
        </div>
        <div class="flex gap-x-8 items-center">
            <Button href="https://wa.me/60172442118">
                <div class="flex gap-x-2 items-center">
                    <span class="w-[32px] h-[32px] inline-block fill-green-500">
                        <Whatsapp />
                    </span>
                    <span class="inline-block h-[1em] leading-0">+60 17-244 2118</span>
                </div>
            </Button>
            <div class="hidden md:block">
                <BrowseOurProductsButton />
            </div>
        </div>
    </nav>
</Container>
