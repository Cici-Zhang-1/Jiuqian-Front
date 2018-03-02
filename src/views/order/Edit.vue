<template>
  <div class="row">
    <form @submit.prevent="addEditSubmit" class="needs-validation col-12" novalidate>
      <div class="form-group">
        <label class="control-label col-md-2" >任务等级:</label>
        <div class="col-md-6">
          <select class="form-control" name="flag"></select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getData, postData } from '@/service/service'

export default {
  name: 'Edit',
  computed: {
    ...mapState([
      'activeLine'
    ])
  }
}
</script>
