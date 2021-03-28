<script context="module">
  export function preload() {
    return this.fetch(`post.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
  import PostItem from '../components/PostItem.svelte';

  export let posts;
</script>

<style>
  h1 {
    text-align: center;
    margin-bottom: 24px;
  }

  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Antonio Patriarca</title>
</svelte:head>

<h1>Recent posts</h1>

<div class="posts">
  {#each posts as post}
    <PostItem {...post} />
  {/each}
</div>
