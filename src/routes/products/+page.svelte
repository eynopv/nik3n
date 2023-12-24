<script lang="ts">
    import Container from '../../components/Container.svelte';
    import Button from '../../components/Button.svelte';
    import ContactUsButton from '../../components/ContactUsButton.svelte';
    import Product from '../../components/Product.svelte';
</script>

<div class="mb-20 mt-4">
    <Container>
        <div class="flex justify-between">
            <Button href="#ultra-base">Ultra-Base</Button>
            <Button href="#beat-base">Beat-Base</Button>
            <Button href="#sakura">Sakura</Button>
            <Button href="#akira">Akira</Button>
        </div>

        <div id="ultra-base" class="pt-32 animate-fadein-500 opacity-0">
            <Product
                name="Ultra-Base"
                properties={[
                    'Baitcasting / Spinning',
                    'Moderate fast action',
                    '2-8lb line',
                    '2-10gm lure weight',
                    'RM388'
                ]}
                media={[
                    {
                        type: 'youtube',
                        src: 'F__g8OidCeA',
                        preview: 'https://img.youtube.com/vi/F__g8OidCeA/default.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/ultrabase/ultra-base-1.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/ultrabase/ultra-base-2.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/ultrabase/ultra-base-3.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/ultrabase/ultra-base-4.jpg'
                    }
                ]}
            />
        </div>

        <div id="beat-base" class="pt-32 animate-fadein-500 opacity-0">
            <Product
                name="Beat-Base"
                properties={[
                    'Baitcasting / Spinning',
                    'Moderate fast action',
                    '4-10lb',
                    '4-15gm',
                    'RM488'
                ]}
                media={[
                    {
                        type: 'youtube',
                        src: 'p-p7zmYT88A',
                        preview: 'https://img.youtube.com/vi/p-p7zmYT88A/default.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/beatbase/beat-base-1.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/beatbase/beat-base-2.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/beatbase/beat-base-3.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/beatbase/beat-base-4.jpg'
                    }
                ]}
            />
        </div>

        <div id="sakura" class="pt-32 animate-fadein-500 opacity-0">
            <Product
                name="Sakura"
                properties={['Baitcasting', 'Moderate fast action', '6-12lb', '6-20gm', 'RM488']}
                media={[
                    {
                        type: 'youtube',
                        src: 'l6bvPbYsjV8',
                        preview: 'https://img.youtube.com/vi/l6bvPbYsjV8/default.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/sakura/sakura-1.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/sakura/sakura-2.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/sakura/sakura-3.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/sakura/sakura-4.jpg'
                    }
                ]}
            />
        </div>

        <div id="akira" class="pt-32 animate-fadein-500 opacity-0">
            <Product
                name="Akira"
                properties={['Baitcasting', 'Moderate fast action', '6-18lb', '6-30gm', 'RM588']}
                media={[
                    {
                        type: 'youtube',
                        src: 'qstG3s_J2Nk',
                        preview: 'https://img.youtube.com/vi/qstG3s_J2Nk/default.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/akira/akira-1.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/akira/akira-2.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/akira/akira-3.jpg'
                    },
                    {
                        type: 'img',
                        src: 'products/akira/akira-4.jpg'
                    }
                ]}
            />
        </div>
    </Container>
</div>
