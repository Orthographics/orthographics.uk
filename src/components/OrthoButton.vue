<template>
    <button
        class="w-full h-[100px] relative group cursor-pointer -translate-y-2"
    >
        <div
            class="scale-50 top-1/2 -translate-y-[calc(50%+7px)] translate-x-[4px] absolute h-[100px] w-full"
        >
            <img
                class="absolute top-1/2 -translate-y-1/2 z-10"
                :src="ButtonFront.src"
            />
            <img
                class="absolute top-1/2 group-hover:translate-x-[4px] group-hover:translate-y-[calc(-50%-4px)] -translate-y-1/2 transition-transform ease-in-out duration-500"
                :src="ButtonBack.src"
            />
        </div>
        <h1
            class="z-10 font-display text-xl font-semibold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center"
        >
            <slot />
        </h1>
    </button>
</template>

<script setup lang="ts">
import ButtonFront from '../assets/Button-front.svg'
import ButtonBack from '../assets/Button-back.svg'
</script>
