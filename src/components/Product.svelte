<script lang="ts">
    import ContactUsButton from './ContactUsButton.svelte';

    export let name;
    export let properties;
    export let media;

    let playerType = media[0].type;
    let playerSrc = media[0].src;

    const show = (type: string, url: string) => {
        playerType = type;
        playerSrc = url;
    };
</script>

<article class="flex flex-wrap gap-x-10 gap-y-4 max-w-full">
    <div class="max-w-full">
        <div class="max-w-full w-[600px] h-[400px] mb-4">
            {#if playerType == 'img'}
                <img src={`${playerSrc}`} class="block max-w-full max-h-full mx-auto" />
            {:else if playerType == 'youtube'}
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${playerSrc}?playlist=${playerSrc}&loop=1&rel=0`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="true"
                ></iframe>
            {/if}
        </div>
        <div class="flex flex-wrap gap-x-4 gap-y-4">
            {#each media as m}
                <button
                    type="button"
                    class="hover:outline outline-pureBlack box-border w-[100px] h-[100px]"
                    on:click={() => show(m.type, m.src)}
                >
                    <img src={m.preview || m.src} />
                </button>
            {/each}
        </div>
    </div>
    <div>
        <h2 class="font-antonio font-bold text-4xl">{name}</h2>
        <ul class="mt-6 mb-8">
            {#each properties as p}
                <li class="my-3">{p}</li>
            {/each}
        </ul>
        <ContactUsButton />
    </div>
</article>
