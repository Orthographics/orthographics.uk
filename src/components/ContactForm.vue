<template>
    <form
        class="max-w-xl grid grid-cols-1 space-y-2 px-8 max-[769px]:pt-4 relative"
        ref="form"
    >
        <div
            class="absolute px-4 w-full h-full max-[769px]:pt-4 group transition-[-webkit-filter,filter,opacity] ease-in-out duration-1000"
            :class="{
                '-z-[100]': !formSubmitted,
                'z-20': formSubmitted,
                'opacity-0': !formSubmitted,
                'backdrop-blur-[4px]': formSubmitted,
            }"
        >
            <div
                class="w-full h-full bg-orthopurple rounded-md bg-opacity-20 border-orthopurple border-2"
            >
                <img
                    src="../assets/Tick-back.svg"
                    class="w-32 m-auto mb-8 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[calc(-50%+2px)] group-hover:translate-y-[calc(-50%-2px)] transition-transform ease-in-out duration-500"
                />
                <img
                    src="../assets/Tick-front.svg"
                    class="w-32 m-auto mb-8 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <h1
                    class="absolute top-1/2 w-[90%] text-center font-display text-3xl p-2 font-medium"
                >
                    Thanks!<br />
                    <span class="text-2xl">We'll get back to you soon.</span>
                </h1>
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
        <OrthoButton type="submit">SUBMIT</OrthoButton>
    </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import OrthoButton from '../components/OrthoButton.vue'

const form = ref<HTMLFormElement>()

const formUrl = 'https://submit-form.com/yRU60pgo'

const formSubmitted = ref(false)

onMounted(() => {
    if (!form.value) return

    form.value.onsubmit = (e) => {
        if (!form.value) return

        e.preventDefault()

        submitContact()
    }
})

function submitContact() {
    console.log('contact submit')

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
        .then((res) => {
            if (res.status !== 200) {
                throw Error(res.status.toString())
            }

            return res.json()
        })
        .then((data) => {
            console.log(data)
            formSubmitted.value = true
        })
        .catch((e) => {
            console.log(`Go response ${e} when trying to POST form`)
        })
}
</script>
