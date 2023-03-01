<template>
    <div
        class="w-full h-[100px] aspect-square relative p-1 group cursor-pointer"
    >
        <div class="scale-50">
            <img
                class="absolute top-1/2 -translate-y-1/2 z-10"
                src="../assets/Button-front.svg"
            />
            <img
                class="absolute top-1/2 group-hover:translate-x-[2px] group-hover:translate-y-[calc(-50%-2px)] -translate-y-1/2 transition-transform ease-in-out duration-500"
                src="../assets/Button-back.svg"
            />
        </div>
        <h1
            class="z-10 font-display absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center"
        >
            <slot />
        </h1>
    </div>
</template>
