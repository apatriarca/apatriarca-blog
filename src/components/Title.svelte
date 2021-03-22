<script>
  import { stores } from '@sapper/app';

  let baseUrl = '';

  const { session } = stores();

  session.subscribe(value => {
    baseUrl = value.BASEURL;
  });
</script>

<style>
  div {
    margin-top: 48px;
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @font-face {
    /* A font by Jos Buivenga (exljbris) -> www.exljbris.com */
    font-family: myFontinBold;
    src: url(/Fontin-Bold.otf);
  }

  h1 {
    font-size: 3rem;
    font-family: myFontinBold;
  }
</style>

<div>
  <a href="{ baseUrl }">
    <h1 class="name">Antonio Patriarca</h1>
  </a>
</div>
