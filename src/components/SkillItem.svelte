<script>
  export let category;
  export let list;
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
  <div class="col small-right"><strong>{ category }</strong></div>
  <div class="col">{@html list }</div>
</div>
