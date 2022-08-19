<script lang="ts">
  import { onMount } from "svelte"
  import Person from "./lib/Person.svelte"
  import ImagePanel from "./lib/ImagePanel.svelte"
  import { getClock, getJoke, getPerson } from "./util"

  let joke = "Loading..."
  let person: any = null
  let countdown = 0
  let clock = getClock()
  const imageUpdateSeconds = 7
  const dataUpdateSeconds = 30

  onMount(() => {
    // NOTE we could simply fetchData() at an interval of
    // dataUpdateSeconds * 1000, but this example also
    // updates a countdown display every second
    const updateInterval = setInterval(() => {
      if (countdown > 1) {
        countdown -= 1
      } else {
        countdown = dataUpdateSeconds
        getPerson()
          .then((r) => (person = r))
          .catch(console.error)
        getJoke()
          .then((r) => (joke = r))
          .catch(console.error)
      }
    }, 1000)
    const clockInterval = setInterval(() => {
      clock = getClock()
    }, 1000)
    return () => {
      // unmount callback
      clearInterval(updateInterval)
      clearInterval(clockInterval)
    }
  })
</script>

<main>
  <section class="display">
    <ImagePanel duration={imageUpdateSeconds} />
  </section>
  <section class="clock">
    <p>{clock.date}</p>
    <h2>{clock.time}</h2>
  </section>
  <section class="other">
    <Person {person} />
  </section>
  <section class="joke">Dad Joke: {joke}</section>
</main>
<footer>Fetch in: {countdown}</footer>
