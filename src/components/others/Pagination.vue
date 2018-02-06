<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center m-0">
      <li class="page-item" :class="{disabled: previous}">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item active"><a class="page-link" href="#">{{ page }}/{{ maxPage }}<span class="sr-only">(current)</span></a></li>
      <li class="page-item" :class="{disabled: next}">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    page: {
      type: Number,
      required: true
    },
    maxPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    previous () {
      return this.page === 1
    },
    next () {
      return this.page === this.maxPage
    }
  }
}
</script>
