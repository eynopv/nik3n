<script lang="ts">
    import Container from './Container.svelte';
    import ContactUsButton from './ContactUsButton.svelte';
    import Instagram from './icons/Instagram.svelte';
    import Facebook from './icons/Facebook.svelte';
</script>

<footer class="h-[500px] py-16 pb-20 relative overflow-hidden">
    <Container>
        <div class="flex flex-col justify-between h-full">
            <div class="flex flex-wrap gap-y-10 justify-between">
                <article>
                    <h2 class="text-2xl font-bold mb-4">How can I have mine?</h2>
                    <p class="my-4">Lets have a coffee session or simply call/whatsapp us</p>
                    <ContactUsButton />
                </article>
                <article class="min-w-[300px]">
                    <h2 class="text-2xl font-bold mb-4">Follow us on</h2>
                    <a href="https://www.facebook.com/NIK3N-Pro-Fishing-109151867559775">
                        <span class="h-[32px] w-[32px] inline-block">
                            <Facebook />
                        </span>
                    </a>
                </article>
            </div>
            <p class="text-neutral-500">
                &#169; <span class="uppercase">Nik3n Pro Fishing</span>. All rights reserved
            </p>
        </div>
    </Container>

    <div class="absolute top-0 right-0 h-full w-full z-[-1]">
        <div class="w-full h-full bg-[url('footer.jpg')] bg-top bg-no-repeat bg-cover"></div>
        <div
            class="absolute top-0 w-full h-full bg-gradient-to-b from-pureWhite/100 to-pureWhite/0"
        ></div>
    </div>
</footer>
