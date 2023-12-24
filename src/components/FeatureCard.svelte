<section class="w-[300px] h-[300px] border rounded-xl p-8">
    <div>
        <div class="w-[36px] h-[36px] mx-auto">
            <slot name="icon">
                <span>Icon Missing</span>
            </slot>
        </div>
    </div>
    <h3 class="text-2xl mt-6 mb-10">
        <slot name="title"><span>Title Missing</span></slot>
    </h3>
    <slot name="description">
        <p>Description Missing</p>
    </slot>
</section>
