<script lang="ts">
  export let person: any = null // Don't type any in real code
</script>

<div class="person">
  {#if !person}
    <em>Loading...</em>
  {:else}
    <img src={person.picture?.large} alt={person?.name} />
    <h2>{person?.name?.first} {person?.name?.last}</h2>
    <div>{person.email}</div>
    <div>cell: {person.cell}</div>
  {/if}
</div>
