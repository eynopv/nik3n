<script lang="ts">
    import Container from '../components/Container.svelte';
    import Nav from '../components/Nav.svelte';
    import FeatureCard from '../components/FeatureCard.svelte';
    import BrowseOurProductsButton from '../components/BrowseOurProductsButton.svelte';
    import ContactUsButton from '../components/ContactUsButton.svelte';
    import Bolt from '../components/icons/Bolt.svelte';
    import MagnifyingGlass from '../components/icons/MagnifyingGlass.svelte';
    import XMark from '../components/icons/XMark.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<Container>
    <main>
        <article class="h-[600px] flex flex-col justify-center">
            <div class="w-[600px] max-w-full">
                <h1
                    class="font-antonio text-7xl font-thin text-neutral-800 leading-tight
                           overflow-hidden"
                >
                    <div class="animate-reveal-500 translate-y-full">
                        Specifically <span class="font-bold text-neutral-950">Crafted</span> for
                        Professional
                        <span class="font-bold text-neutral-950">Anglers</span>
                    </div>
                </h1>
                <div class="overflow-hidden">
                    <p
                        class="text-neutral-900 text-2xl mt-3 mb-9 animate-reveal-600 opacity-0
                    translate-y-full"
                    >
                        Performance lightweight rods
                    </p>
                </div>
                <div class="flex flex-wrap gap-x-8 gap-y-4 overflow-hidden">
                    <div class="animate-reveal-700 translate-y-full opacity-0">
                        <BrowseOurProductsButton />
                    </div>
                    <div class="animate-reveal-700 translate-y-full opacity-0">
                        <ContactUsButton />
                    </div>
                </div>
            </div>
        </article>

        <article class="text-center my-20 overflow-hidden">
            <div class="translate-y-full animate-reveal-800 opacity-0">
                <h2 class="text-4xl font-medium">Customize with high quality materials</h2>
                <p class="text-neutral-600 text-2xl my-3">Design, Research and Build</p>
                <p class="max-w-[600px] mx-auto">
                    With high grade of compress carbon, the blank used is a factory custom with our
                    own secret ingredients. Say NO to OEM blank. We customize our own blank!
                </p>

                <div class="flex flex-wrap gap-y-4 gap-x-6 justify-center mt-10">
                    <FeatureCard>
                        <span slot="icon">
                            <Bolt />
                        </span>
                        <span slot="title">Light Weight 40T Carbon</span>
                        <p slot="description">
                            8 layers high quality AAA+ carbon makes it powerful
                        </p>
                    </FeatureCard>

                    <FeatureCard>
                        <span slot="icon">
                            <MagnifyingGlass />
                        </span>
                        <span slot="title">Ceramic Micro Guides</span>
                        <p slot="description">
                            10 ceramic micro guides for lightweight and sensitivity
                        </p>
                    </FeatureCard>

                    <FeatureCard>
                        <span slot="icon">
                            <XMark />
                        </span>
                        <p slot="title">X-Wrap<br />Technology</p>
                        <p slot="description">
                            Make the blank more powerful and more durable with X-Wrap technology
                        </p>
                    </FeatureCard>
                </div>
            </div>
        </article>
    </main>
</Container>

<div class="absolute top-0 right-0 h-[700px] w-1/2 z-[-1] animate-fadein-500 opacity-0">
    <div class="w-full h-full bg-[url('/header.jpg')] bg-left-bottom bg-no-repeat bg-cover"></div>
    <div
        class="absolute top-0 w-full h-full bg-gradient-to-r from-pureWhite/100 to-pureWhite/0"
    ></div>
</div>
