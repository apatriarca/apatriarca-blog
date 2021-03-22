<script>
  export let dates;
  export let course;
  export let school;
  export let vote;
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
  <div class="col"><strong>{ course }</strong>, <em>{ school }</em> ({vote})</div>
</div>
