<script>
  export let dates;
  export let title;
  export let company;
  export let location;
  export let description;
  export let tools;
</script>

<style>
  .row {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 10px;
  }

  .col {
    display: table-cell;
  }

  .small-right {
    width: 30%;
    text-align: right;
  }
</style>

<div class="row">
  <div class="col small-right">{ dates }</div>
  <div class="col"><strong>{ title }</strong>, <em>{ company }</em>, {location}.</div>
</div>
<div class="row">
  <div class="col small-right"></div>
  <div class="col">{ description }</div>
</div>
<div class="row">
  <div class="col small-right"></div>
  <div class="col">Tools: <em>{ tools }</em></div>
</div>
