<template>
  <tr :class="{'table-success': trData.checked}" :id="id">
    <td class="d-none"><input type="checkbox" v-model="trData.checked" /> </td>
    <td v-for="(value, key, index) in tableThead" :name="key" :class="[ value.classes ]" :key="index" v-if="value.checked" v-html="trData[key]"></td>
  </tr>
</template>

<script>
import { uuid } from '@/assets/js/custom'
import Hammer from 'hammerjs'

export default {
  name: 'RegularTr',
  props: ['trData', 'tableThead'],
  data () {
    return {
      id: 'tr' + uuid()
    }
  },
  mounted () {
    let myElement = document.getElementById(this.id)

    let mc = new Hammer(myElement)
    let This = this
    mc.on('press', function (ev) {
      This.$store.commit('SET_LINE_ACTIVITY', { tr: This.trData })
    })
    mc.on('click, tap', function (ev) {
      if (!This.trData.checked) {
        This.$emit('inactive', 'hi')
      }
      This.$store.commit('SET_LINE_ACTIVITY', { tr: This.trData })
    })
  },
  methods: {
    activeTr (e) {
      /* if (!this.trData.checked) {
        this.$emit('inactive', 'hi')
      }
      this.$store.commit('SET_LINE_ACTIVITY', { tr: this.trData }) */
      // this.setActiveLine({ tr: this.trData })
      // Vue.set(this.trData, 'checked', !this.trData.checked)
      /* if (!e.currentTarget.classList.contains('table-success')) {
        if (e.currentTarget.parentNode.getElementsByClassName('table-success').length > 0) {
          for (let ele of e.currentTarget.parentNode.getElementsByClassName('table-success')) {
            ele.classList.remove('table-success')
          }
        }
        e.currentTarget.className = 'table-success'
        this.$store.commit('SET_ACTIVE_LINE', { tr: e.currentTarget })
      } */
    }
  }
}
</script>
