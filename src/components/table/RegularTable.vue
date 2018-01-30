<template>
  <div>
    <table class="table table-striped table-responsive">
      <thead>
        <tr>
          <th>No</th>
          <th>First</th>
          <th>Second</th>
          <th>Third</th>
          <th>Fourth</th>
          <th>Fiveth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sammy</td>
          <td>Fonda</td>
          <td>Sammy</td>
          <td>Fonda</td>
          <td>Sammy</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Lucy</td>
          <td>Jill</td>
          <td>Sammy</td>
          <td>Fonda</td>
          <td>Sammy</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'RegularTable',
  data () {
    return {}
  },
  template: '<regular-table />'
}
</script>
