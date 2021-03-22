<script>
  import { stores } from '@sapper/app';

  let baseUrl = '';

  const { session } = stores();

  session.subscribe(value => {
    baseUrl = value.BASEURL;
  });

  export let segment;

  $: menuItems = [
    { "name": "Home", "segment": undefined, "link": baseUrl + "/" },
    { "name": "About", "segment": "about", "link": baseUrl + "/about" },
    { "name": "CV", "segment": "cv", "link": baseUrl + "/cv" },
    { "name": "Github", "segment": "__NO_SEGMENT__", "link": "https://github.com/apatriarca" },
    { "name": "Twitter", "segment": "__NO_SEGMENT__", "link": "https://twitter.com/AntoPatriarca"}
  ];
</script>

<style>

  nav {
    border-top-style: solid;
    border-top-width: 2px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    position: relative;
    max-width: 56em;
    padding: 0.5em;
    margin: 0 auto;
    box-sizing: border-box;
    margin-bottom: 24px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  li {
    margin-right: 12px;
    margin-left: 12px;
    display: inline-block;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a.current {
    text-decoration-color: darkred;
    text-decoration: underline;
  }

</style>

<nav>
  <ul>
    {#each menuItems as item}
      <li><a class="{segment === item.segment ? 'current' : ''}" href="{ item.link }">{ item.name }</a></li>
    {/each}
  </ul>
</nav>
