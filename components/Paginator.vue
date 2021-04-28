<template>
  <ul v-if="totalPages > 1" class="pagination">
    <li v-if="hasPrevPage" class="pagination-list-item">
      <nuxt-link :to="{ query: { ...$route.query, page: page - 1 } }">
        <i class="fa fa-angle-left"></i>
      </nuxt-link>
    </li>
    <li v-for="p in pages" :key="p" class="pagination-list-item">
      <nuxt-link
        v-if="typeof p === 'number'"
        :to="{ query: { ...$route.query, page: p } }"
        :class="p === page && 'active'"
      >
        {{ p }}
      </nuxt-link>
      <div v-else style="width: 1rem"></div>
    </li>
    <li v-if="hasNextPage" class="pagination-list-item">
      <nuxt-link :to="{ query: { ...$route.query, page: page + 1 } }">
        <i class="fa fa-angle-right"></i>
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    page: {
      type: Number,
      default: 0,
    },
    totalPages: {
      type: Number,
      default: 0,
    },
    hasPrevPage: Boolean,
    hasNextPage: Boolean,
  },
  computed: {
    pages() {
      const pages = [];
      if (this.totalPages < 10) return new Array(this.totalPages).fill().map((v, i) => i + 1);
      pages.push(1, 2);
      if (this.page > 5 && this.page < this.totalPages - 4) {
        pages.push('sep1');
        pages.push(this.page - 1, this.page, this.page + 1);
        pages.push('sep2');
      } else if (this.page <= 5) {
        pages.push(3, 4, 5, 6, 'sep');
      } else {
        pages.push(
          'sep',
          this.totalPages - 5,
          this.totalPages - 4,
          this.totalPages - 3,
          this.totalPages - 2
        );
      }
      pages.push(this.totalPages - 1, this.totalPages);
      return pages;
    },
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  justify-content: center;
  .pagination-list-item {
    margin-right: 0.25rem;
    a {
      color: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 30px;
      height: 30px;
      color: #183239;
      box-shadow: inset 0 0 0 1px #e6e9ea;
      border-radius: 8px;
      transition: all 0.15s ease;
      &:hover {
        background-color: rgba(0, 128, 163, 0.2);
      }
      &.active {
        background-color: #0080a3;
        color: #fff;
        box-shadow: none;
        cursor: default;
      }
      i {
        margin: 0 18px;
      }
    }
  }
}
</style>
