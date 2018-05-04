<template>
  <div class="col-12 my-2">
    <div class="card" v-if="!error">
      <div class="card-header bg-primary d-flex flex-row">
        <div>
          {{ card.name }}
        </div>
      </div>
      <div class="card-body p-0 card-body-h">
        <check-lists class="p-1" :checkLists="card.elements"/>
      </div>
    </div>
    <div class="col-12 mt-2" v-if="error">No Setting Available</div>
  </div>
</template>

<script type="module">
import CheckLists from '@/components/forms/CheckLists'

export default {
  name: 'SettingCard',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    card: {
      get () {
        return this.$store.getters.getCard({ id: this.id })
      },
      set () {}
    },
    error () {
      return JSON.stringify(this.card.elements) === '{}' || (this.card.elements instanceof Array && this.card.elements.length === 0)
    }
  },
  components: {
    CheckLists
  }
}
</script>
