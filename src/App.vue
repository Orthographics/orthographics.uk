<template>
    <Background />
    <Header />

    <div class="lg:w-[1000px] w-full m-auto mt-[100px]">
        <h1 class="font-display text-center leading-2">
            <span class="lg:text-[40pt] text-[28pt]"
                >Complete real-time graphics solutions</span
            >
            <span class="lg:text-[36pt] text-[22pt]"
                ><br />for live and offline productions</span
            >
        </h1>

        <h1 class="text-center lg:text-2xl text-xl font-display mt-2">
            Stream Overlays
            <span class="text-orthopurple">•</span>
            Esports Tournaments
            <span class="text-orthopurple">•</span>
            Game Shows
            <span class="text-orthopurple">•</span>
            Live TV
        </h1>

        <div class="w-full space-y-6 py-10">
            <div
                class="flex justify-between mx-10 p-4 align-baseline gap-4 group"
            >
                <div class="shrink-0 w-[160px] h-[160px]">
                    <div class="relative m-auto h-[130px] w-[120px]">
                        <img
                            class="absolute z-10"
                            src="./assets/Control-front.svg"
                        />
                        <img
                            class="absolute group-hover:translate-x-[5px] group-hover:-translate-y-[5px] transition-transform ease-in-out duration-500"
                            src="./assets/Control-back.svg"
                        />
                    </div>
                    <h1 class="font-display text-2xl text-center">Control</h1>
                </div>
                <p class="font-body text-2xl shrink">
                    Customised web control panels allow operators and producers
                    to instantly respond to what’s happening on- or off-screen.
                </p>
            </div>
            <div
                class="flex justify-between mx-10 p-4 align-baseline gap-4 group"
            >
                <div class="shrink-0 w-[160px] h-[160px]">
                    <div class="relative m-auto h-[130px] w-[120px]">
                        <img
                            class="absolute z-10"
                            src="./assets/Chat-front.svg"
                        />
                        <img
                            class="absolute group-hover:translate-x-[5px] group-hover:-translate-y-[5px] transition-transform ease-in-out duration-500"
                            src="./assets/Chat-back.svg"
                        />
                    </div>
                    <h1 class="font-display text-2xl text-center">
                        Audience participation
                    </h1>
                </div>
                <p class="font-body text-2xl shrink">
                    Display live polls, votes, and reactions from livestream
                    chat or social media. Easily select and highlight specific
                    comments or viewer/hashtag counts.
                </p>
            </div>
            <div
                class="flex justify-between mx-10 p-4 align-baseline gap-4 group"
            >
                <div class="shrink-0 w-[160px] h-[160px]">
                    <div class="relative m-auto h-[130px] w-[120px]">
                        <img
                            class="absolute z-10"
                            src="./assets/Play-front.svg"
                        />
                        <img
                            class="absolute group-hover:translate-x-[5px] group-hover:-translate-y-[5px] transition-transform ease-in-out duration-500"
                            src="./assets/Play-back.svg"
                        />
                    </div>
                    <h1 class="font-display text-2xl text-center">Graphics</h1>
                </div>
                <p class="font-body text-2xl shrink">
                    We develop complex activations, data visualisations, and
                    animated overlays on our web-based rendering system.
                </p>
            </div>
            <div
                class="flex justify-between mx-10 p-4 align-baseline gap-4 group"
            >
                <div class="shrink-0 w-[160px] h-[160px]">
                    <div class="relative m-auto h-[130px] w-[120px]">
                        <img
                            class="absolute z-10"
                            src="./assets/Control-front.svg"
                        />
                        <img
                            class="absolute group-hover:translate-x-[5px] group-hover:-translate-y-[5px] transition-transform ease-in-out duration-500"
                            src="./assets/Control-back.svg"
                        />
                    </div>
                    <h1 class="font-display text-2xl text-center">
                        State management
                    </h1>
                </div>
                <p class="font-body text-2xl shrink">
                    Our data management system handles event state for game
                    shows, tournaments, elections, and more.
                </p>
            </div>
            <div
                class="flex justify-between mx-10 p-4 align-baseline gap-4 group"
            >
                <div class="shrink-0 w-[160px] h-[160px]">
                    <div class="relative m-auto h-[130px] w-[120px]">
                        <img
                            class="absolute z-10"
                            src="./assets/Control-front.svg"
                        />
                        <img
                            class="absolute group-hover:translate-x-[5px] group-hover:-translate-y-[5px] transition-transform ease-in-out duration-500"
                            src="./assets/Control-back.svg"
                        />
                    </div>
                    <h1 class="font-display text-2xl text-center">
                        Esports game integration
                    </h1>
                </div>
                <p class="font-body text-2xl shrink">
                    Customised web control panels allow operators and producers
                    to instantly respond to what’s happening on- or off-screen.
                </p>
            </div>
            <div
                class="flex justify-between mx-10 p-4 align-baseline gap-4 group"
            >
                <div class="shrink-0 w-[160px] h-[160px]">
                    <div class="relative m-auto h-[130px] w-[120px]">
                        <img
                            class="absolute z-10"
                            src="./assets/Control-front.svg"
                        />
                        <img
                            class="absolute group-hover:translate-x-[5px] group-hover:-translate-y-[5px] transition-transform ease-in-out duration-500"
                            src="./assets/Control-back.svg"
                        />
                    </div>
                    <h1 class="font-display text-2xl text-center">
                        Virtual studio and AR
                    </h1>
                </div>
                <p class="font-body text-2xl shrink">
                    We can develop custom virtual environments, camera-tracked
                    AR overlays, and studio integrations with Unreal Engine.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Background from './components/Background.vue'
import Header from './components/Header.vue'
</script>
