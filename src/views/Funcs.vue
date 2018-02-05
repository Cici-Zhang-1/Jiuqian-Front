<template>
  <div class="container-fluid">
    <main>
      <div class="row">
        <div class="col">
          <funcbars />
        </div>
      </div>
      <div>
        This is Funcs Page
      </div>
    </main>
  </div>
</template>

<script>
import Funcbars from '@/components/bars/Funcbars'

export default {
  name: 'Funcs',
  data () {
    return {}
  },
  components: {
    Funcbars
  }
}
</script>
