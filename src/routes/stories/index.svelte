<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/stories/content.json');
    if (res.ok) {
      const { stories } = await res.json();
      return {
        props: { stories }
      };
    }
  };
</script>

<script>
  export let stories;
</script>

<svelte:head>
  <title>Uciel Sola | 📝 Blog</title>
</svelte:head>

{#each stories as { id, rated_18, title, description, pages }}
  <pre>
    ${id}
    ${rated_18}
    ${title}
    ${description}
    ${pages}
    
  </pre>
{/each}
