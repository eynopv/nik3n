<script>
    export let href = '';
    export let variant = 'default';

    const styles = {
        default: `relative font-bold after:content-[""] after:absolute after:w-full after:h-[2px]
    after:bg-pureBlack after:bottom-[-6px] after:left-0 after:scale-x-0 after:transition 
    hover:after:scale-x-100`,
        solid: `border-0 rounded-xl px-6 py-3 text-neutral-50 bg-rose-600 font-bold
        hover:bg-rose-500 transition-colors transition-200 ease-out`,
        outline: `border border-neutral-800 rounded-xl px-6 py-3 font-bold hover:bg-neutral-200
            transition-colors transition-200 ease-out`
    };
</script>

<a {href} class="inline-block {styles[variant]}">
    <slot />
</a>
