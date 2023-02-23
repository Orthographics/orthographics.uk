<template>
    <canvas ref="canvas" class="fixed top-0 left-0 -z-50"></canvas>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMouse, useWindowSize, useScroll } from '@vueuse/core'

const canvas = ref<HTMLCanvasElement>()
let ctx: CanvasRenderingContext2D | null

const { width, height } = useWindowSize()
const { x: mouseX, y: mouseY } = useMouse({ type: 'client' })
const { y: scrollY } = useScroll(window)

const GAP = 50
const RAD = 3
const MOUSE_WEIGHT = 2
const MOUSE_RANGE = 400

function smoothstep(k: number) {
    const kk = Math.min(Math.max(k, 0), 1)
    return 3 * kk ** 2 - 2 * kk ** 3
}

function draw() {
    if (!canvas.value) return

    canvas.value.width = width.value
    canvas.value.height = height.value

    ctx = canvas.value.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#6a469222'

    for (let i = 0; i < height.value / GAP; i++) {
        const cY = (i + 0.5) * GAP // - (scrollY.value % GAP)

        for (let j = 0; j < width.value / GAP; j++) {
            const cX = (j + 0.5) * GAP

            const mouseDist = Math.sqrt(
                (cX - mouseX.value) ** 2 + (cY - mouseY.value) ** 2
            )

            const size =
                RAD *
                (1 +
                    (MOUSE_WEIGHT - 1) *
                        (1 - smoothstep(mouseDist / MOUSE_RANGE)))

            ctx.beginPath()
            ctx.ellipse(cX, cY, size, size, 0, 0, 2 * Math.PI)
            ctx.fill()
        }
    }

    window.requestAnimationFrame(draw)
}

window.requestAnimationFrame(draw)
</script>
