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
    margin-bottom: 24px;
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
