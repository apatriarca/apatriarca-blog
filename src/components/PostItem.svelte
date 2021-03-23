<script>
export let title;
export let slug;
export let author;
export let date;
export let image;
</script>

<style>
  .row {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    border-spacing: 10px;
  }

  .small-right {
    width: 30%;
    text-align: right;
  }

  .big-left {
    width: 60%;
    text-align: left;
  }

  .big-margin {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .title {
    font-size-adjust: .8;
  }

  .author {
    font-style: italic;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<div class="row">
  <div class="col small-right">
    <a rel="prefetch" href="post/{slug}">
      <img class="big-margin" src="{image}" alt="{title}" width="100%">
    </a>
  </div>
  <div class="col big-left">
    <a rel="prefetch" href="post/{slug}">
    <div class="title">{title}</div>
    <div class="author">{author} - {date}</div>
    </a>
  </div>
</div>
