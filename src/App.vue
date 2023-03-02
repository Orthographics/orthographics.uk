<template>
    <div
        class="fixed top-0 left-0 w-full h-[90px] bg-black border-b-orthopurple border-b-4 z-50"
    >
        <img
            src="./assets/header-text.png"
            class="absolute max-h-[70%] top-1/2 -translate-y-1/2 sm:left-12 left-1/2 sm:-translate-x-0 -translate-x-1/2"
        />
    </div>

    <div
        class="w-full mt-[90px] pb-[120px] relative border-orthopurple border-opacity-40 border-b-[2px]"
    >
        <Background />
        <div class="lg:w-[1000px] w-full mx-auto pt-[150px]">
            <div>
                <h1
                    class="font-display text-center leading-tight font-regular mx-4"
                >
                    <span class="lg:text-[38pt] sm:text-[32pt] text-[24pt]">
                        Complete
                        <span class="text-orthopurple"
                            >real-time graphics
                        </span>
                        solutions</span
                    >
                    <span class="lg:text-[36pt] sm:text-[26pt] text-[20pt]">
                        <br />for live and offline productions
                    </span>
                </h1>

                <h1
                    class="text-center lg:text-3xl text-2xl font-display mt-12 mx-4 font-regular"
                >
                    Streamer Overlays
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
            class="w-full flex flex-wrap justify-between items-stretch mt-[50px] gap-8"
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
                class="font-display text-center w-full text-3xl font-medium my-3"
            >
                Need something even more custom? Get in
                <a href="#contact">contact</a> and we'll see how we can help.
            </h1>
        </div>

        <h1
            class="w-full font-display border-b-2 border-orthopurple text-2xl font-semibold mt-4"
            id="who-are-we"
        >
            WHO WE ARE
        </h1>

        <p class="w-full font-body text-xl my-2">
            We have over 10 years combined experience in software and live
            broadcast. We know what it takes to run a high-quality production
            and what you expect from your tools.
        </p>

        <div class="flex flex-wrap justify-around gap-5">
            <div class="basis-[400px] p-4 grow">
                <div
                    class="rounded-full overflow-hidden m-auto max-w-[250px] border-orthopurple border-opacity-70 border-2"
                >
                    <img class="" src="./assets/dan.jpg" />
                </div>
                <h1 class="font-display text-2xl text-center mt-4">
                    Daniel Shields
                </h1>
                <h2 class="font-display text-lg text-center mb-4">
                    <a href="mailto:daniel@orthographics.uk"
                        >daniel@orthographics.uk</a
                    >
                </h2>
                <p class="font-body text-lg">
                    Daniel started his career broadcasting university esports
                    and steadily grew to providing graphics software to major
                    production companies around the world.
                </p>
                <p class="font-body text-lg"></p>
            </div>
            <div class="basis-[400px] p-4 grow">
                <div
                    class="rounded-full overflow-hidden m-auto max-w-[250px] border-orthopurple border-opacity-70 border-2"
                >
                    <img
                        class="scale-[200%] -translate-x-[20px] grayscale-[15%]"
                        src="./assets/tom.jpg"
                    />
                </div>
                <h1 class="font-display text-2xl text-center mt-4">
                    Tom Mewett
                </h1>
                <h2 class="font-display text-lg text-center mb-4">
                    <a href="mailto:tom@orthographics.uk"
                        >tom@orthographics.uk</a
                    >
                </h2>
                <p class="font-body text-lg">
                    Tom is a software engineer who brings a wide range of
                    experience from working at PlayStation, Bloomberg, and
                    Raspberry Pi - particularly in backend data systems and user
                    experience.
                </p>
            </div>
        </div>

        <h3
            class="text-center text-2xl mt-8 font-display uppercase font-medium"
        >
            Previous Clients
        </h3>
        <div class="flex flex-wrap gap-x-8 justify-center w-full my-4">
            <div class="h-[80px] w-[130px] relative">
                <img
                    src="./assets/clients/dock10.png"
                    alt="dock10"
                    class="absolute top-1/2 -translate-y-1/2 max-h-full max-w-full"
                />
            </div>
            <div class="h-[80px] w-[130px] relative">
                <img
                    src="./assets/clients/esl.svg"
                    alt="ESL"
                    class="absolute top-1/2 -translate-y-1/2 h-full max-w-full"
                />
            </div>
            <div class="h-[80px] w-[130px] relative">
                <img
                    src="./assets/clients/twitch.svg"
                    alt="Twitch"
                    class="absolute top-1/2 -translate-y-1/2 max-h-full w-full"
                />
            </div>

            <div class="h-[80px] w-[130px] relative">
                <img
                    src="./assets/clients/mclaren-shadow.png"
                    alt="McLaren Shadow"
                    class="absolute top-1/2 -translate-y-1/2 max-h-full max-w-full"
                />
            </div>
            <div class="h-[80px] w-[130px] relative">
                <img
                    src="./assets/clients/redbull.png"
                    alt="Red Bull"
                    class="absolute top-1/2 -translate-y-1/2 max-h-full max-w-full"
                />
            </div>
            <div class="h-[80px] w-[130px] relative">
                <img
                    src="./assets/clients/faceit-full.svg"
                    alt="FACEIT"
                    class="absolute top-1/2 -translate-y-1/2 max-h-full w-full"
                />
            </div>
        </div>

        <h1
            class="w-full font-display border-b-2 border-orthopurple text-2xl font-semibold mt-8"
            id="contact"
        >
            GET IN TOUCH
        </h1>

        <p></p>

        <div
            class="flex flex-wrap justify-evenly my-12 gap-y-8 min-[769px]:divide-x-2 divide-x-0 min-[769px]:divide-y-0 divide-y-2 divide-orthopurple divide-opacity-50"
        >
            <div class="group relative w-96 h-80">
                <a href="mailto:hello@orthographics.uk">
                    <img
                        src="./assets/Email-back.svg"
                        class="w-64 m-auto mb-8 absolute left-1/2 -translate-x-1/2 group-hover:translate-x-[calc(-50%+2px)] group-hover:-translate-y-[2px] transition-transform ease-in-out duration-500"
                    />
                    <img
                        src="./assets/Email-front.svg"
                        class="w-64 m-auto mb-8 absolute left-1/2 -translate-x-1/2"
                    />
                    <h1
                        class="font-display underline text-3xl text-center absolute left-1/2 -translate-x-1/2 bottom-0 group-hover:text-[#815FA6]"
                    >
                        hello@orthographics.uk
                    </h1>
                </a>
            </div>

            <form
                class="max-w-xl grid grid-cols-1 space-y-2 px-8 max-[769px]:pt-4 relative"
                ref="form"
            >
                <div
                    class="z-20 absolute px-4 w-full h-full max-[769px]:pt-4 group transition-opacity hidden opacity-0"
                >
                    <div
                        class="w-full h-full bg-orthopurple rounded-md bg-opacity-20 border-orthopurple border-2 backdrop-blur-[4px]"
                    >
                        <div class="">
                            <img
                                src="./assets/Tick-back.svg"
                                class="w-32 m-auto mb-8 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[calc(-50%+2px)] group-hover:translate-y-[calc(-50%-2px)] transition-transform ease-in-out duration-500"
                            />
                            <img
                                src="./assets/Tick-front.svg"
                                class="w-32 m-auto mb-8 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                            <h1
                                class="absolute top-1/2 w-full text-center font-display text-3xl p-2 font-medium"
                            >
                                Thanks!<br />
                                <span class="text-2xl"
                                    >We'll get back to you soon.</span
                                >
                            </h1>
                        </div>
                    </div>
                </div>

                <label for="name" class="block">
                    <span class="font-display">Name</span>
                    <input
                        class="font-body font-thin w-full mt-1 rounded-md border-orthopurple border-opacity-25 focus:ring focus:border-opacity-0 focus:border-orthopurple focus:ring-orthopurple focus:ring-opacity-50 caret-orthopurple"
                        type="text"
                        name="name"
                        id="name"
                        required
                    />
                </label>
                <label for="email" class="block">
                    <span class="font-display">Email</span>
                    <input
                        class="font-body font-thin w-full mt-1 rounded-md border-orthopurple border-opacity-25 focus:ring focus:border-opacity-0 focus:border-orthopurple focus:ring-orthopurple focus:ring-opacity-50 caret-orthopurple"
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                </label>
                <label for="name" class="block">
                    <span class="font-display">Message</span>
                    <textarea
                        class="font-body font-thin w-full mt-1 rounded-md border-orthopurple border-opacity-25 focus:ring focus:border-opacity-0 focus:border-orthopurple focus:ring-orthopurple focus:ring-opacity-50 caret-orthopurple"
                        type="textarea"
                        rows="4"
                        name="message"
                        id="message"
                        required
                    />
                </label>
                <OrthoButton @click="submitContact">SUBMIT</OrthoButton>
            </form>
        </div>
    </div>

    <div class="w-full h-[90px] bg-black border-t-orthopurple border-t-4">
        <h1 class="text-center text-white font-display text-xl pt-8 uppercase">
            Copyright © 2023 Orthographics Ltd
        </h1>
    </div>
</template>

<script setup lang="ts">
import Background from './components/Background.vue'
import FeatureImages from './assets/features'
import { ref } from 'vue'
import OrthoButton from './components/OrthoButton.vue'

const features = [
    {
        img: 'Control',
        title: 'Control',
        desc: "Customised web control panels allow operators and producers to instantly respond to what's happening on or off-screen. Automatically react to live real-world data via integration with any API.",
    },
    {
        img: 'Play',
        title: 'Graphics',
        desc: 'With our web-based graphics system, we have flexibility far beyond what you get with off-the-shelf software - anything from simple lower-thirds to complex data visualisations.',
    },
    {
        img: 'Chat',
        title: 'Audience Engagement',
        desc: 'Display live polls, votes, and reactions from livestream chat or social media. Easily select and highlight specific comments or viewer/hashtag counts.',
    },
    {
        img: 'State',
        title: 'State Management',
        desc: 'Our data system manages your event state and keeps your production consistent and responsive. It handles game shows, tournaments, elections, and more.',
    },
    {
        img: 'Esports',
        title: 'Esports Game Integration',
        desc: 'Track in-game stats and display engaging pop-ups, HUDs, and custom minimaps.',
    },
    {
        img: 'Unreal',
        title: 'Virtual studio and AR',
        desc: 'We develop immersive virtual environments, camera-tracked AR overlays, and studio integrations using Unreal Engine.',
    },
]

const form = ref<HTMLFormElement>()

const formUrl = 'https://submit-form.com/yRU60pgo'

function submitContact() {
    console.log('submit!')

    fetch(formUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: (
                form.value?.elements?.['name' as any] as HTMLFormElement | null
            )?.value,
            email: (
                form.value?.elements?.['email' as any] as HTMLFormElement | null
            )?.value,
            message: (
                form.value?.elements?.[
                    'message' as any
                ] as HTMLFormElement | null
            )?.value,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
}
</script>
