<template>
    <Header />

    <div
        class="w-full mt-[90px] pb-[120px] relative border-orthopurple border-opacity-40 border-b-[2px]"
    >
        <Background />
        <div class="lg:w-[1000px] w-full mx-auto pt-[150px]">
            <div>
                <h1 class="font-display text-center leading-tight font-regular">
                    <span class="lg:text-[38pt] text-[28pt]">
                        Complete
                        <span class="text-orthopurple"
                            >real-time graphics
                        </span>
                        solutions</span
                    >
                    <span class="lg:text-[36pt] text-[22pt]">
                        <br />for live and offline productions
                    </span>
                </h1>

                <h1
                    class="text-center lg:text-3xl text-2xl font-display mt-12 font-regular"
                >
                    Stream Overlays
                    <span class="text-orthopurple">•</span>
                    Esports Tournaments
                    <span class="text-orthopurple">•</span>
                    Game Shows
                    <span class="text-orthopurple">•</span>
                    Live TV
                </h1>
            </div>
        </div>
    </div>

    <div class="lg:w-[1000px] w-full mx-auto px-4">
        <div
            class="w-full flex flex-wrap justify-between items-stretch mt-[30px] gap-8"
        >
            <div
                v-for="feature in features"
                :key="feature.title"
                class="flex justify-between gap-5 group basis-[450px] grow"
            >
                <div class="shrink-0 w-[100px]">
                    <div class="w-full h-[100px] aspect-square relative p-1">
                        <img
                            class="absolute top-1/2 -translate-y-1/2 z-10"
                            :src="(FeatureImages as any)[`${feature.img}Front`]"
                        />
                        <img
                            class="absolute top-1/2 group-hover:translate-x-[2px] group-hover:translate-y-[calc(-50%-2px)] -translate-y-1/2 transition-transform ease-in-out duration-500"
                            :src="(FeatureImages as any)[`${feature.img}Back`]"
                        />
                    </div>
                </div>
                <div>
                    <h1
                        class="font-display text-2xl uppercase font-semibold mt-2"
                    >
                        {{ feature.title }}
                    </h1>
                    <p class="font-body text-[1.2rem]">{{ feature.desc }}</p>
                </div>
            </div>

            <h1
                class="font-display text-center w-full text-3xl font-medium my-2"
            >
                Need something even more custom? Get in contact and we'll see
                how we can help.
            </h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import Background from './components/Background.vue'
import Header from './components/Header.vue'
import FeatureImages from './assets/features'

const features = [
    {
        img: 'Control',
        title: 'Control',
        desc: 'Customised web control panels allow operators and producers to instantly respond to what’s happening on or off-screen. We can integrate with any API for live real-world data.',
    },
    {
        img: 'Play',
        title: 'Graphics',
        desc: 'With our web-based graphics system, we have flexibility far beyond what you get with off-the-shelf software - anything from simple lower-thirds to complex data visualisations.',
    },
    {
        img: 'Chat',
        title: 'Audience participation',
        desc: 'Display live polls, votes, and reactions from livestream chat or social media. Easily select and highlight specific comments or viewer/hashtag counts.',
    },
    {
        img: 'Control',
        title: 'State Management',
        desc: 'Our data management system handles event state for game shows, tournaments, elections, and more. A makes your production consistent and responsive.',
    },
    {
        img: 'Control',
        title: 'Esports Game Integration',
        desc: 'Track in-game statistics and display engaging summaries, HUDs, and custom minimaps.',
    },
    {
        img: 'Control',
        title: 'Virtual studio and AR',
        desc: 'We develop immersive virtual environments, camera-tracked AR overlays, and studio integrations using Unreal Engine.',
    },
]
</script>
