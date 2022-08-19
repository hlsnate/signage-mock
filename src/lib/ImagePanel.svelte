<script lang="ts">
  import { onMount } from "svelte"
  import { getRandomColor } from "../util"
  export let duration: number = 10

  let progress: number
  let percent = 0
  let color = getRandomColor()
  const interval = 10
  const nextImage = () => (color = getRandomColor()) // Mock an image change
  const startProgress = () => {
    if (progress) clearInterval(progress)
    progress = setInterval(() => (percent += incrementAmount), interval)
  }

  // Svelte reactive declaration syntax
  $: durationMs = duration * 1000
  $: incrementAmount = (interval / durationMs) * 100
  $: if (percent >= 100) {
    percent = 0
    nextImage()
    clearInterval(progress)
    startProgress()
  }

  onMount(() => {
    startProgress()
    return () => clearInterval(progress)
  })
</script>

<div class="panel-wrap">
  <div style={`background-color: ${color}`} />
  <div class="bar">
    <div class="progress" style={`width: ${percent}%`} />
  </div>
</div>
