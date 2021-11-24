<!-- ************************** TEMPLATE  ************************* -->
<template>
  <div class="cpt-table">
    <!-- TABLE -->
    <a-table
      :columns="columns"
      :pagination="false"
      :data-source="data"
      type="primary"
      @change="handleChange"
    >
      <span slot="delete">
        <a-icon type="delete" theme="filled" class="pointer" />
      </span>
    </a-table>
  </div>
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
const data = [
  {
    key: '1',
    title: '724',
    age: 32,
    value: 'Other unspecified back...'
  },
  {
    key: '2',
    title: '724',
    age: 42,
    value: 'Other unspecified back...'
  },
  {
    key: '3',
    title: '724',
    age: 32,
    value: 'Other unspecified back...'
  }
]

export default {
  data() {
    return {
      data,
      filteredInfo: null,
      sortedInfo: null
    }
  },
  computed: {
    columns() {
      let { sortedInfo } = this
      sortedInfo = sortedInfo || {}

      const columns = [
        {
          title: 'Codes',
          dataIndex: 'title',
          key: 'title',
          sorter: (a, b) => a.age - b.age,
          sortOrder: sortedInfo.columnKey === 'title' && sortedInfo.order
        },

        {
          title: 'Description',
          dataIndex: 'value',
          key: 'value'
        },
        {
          title: '',
          dataIndex: 'del',
          key: 'del',
          scopedSlots: { customRender: 'delete' }
        }
      ]
      return columns
    }
  },
  methods: {
    handleChange(pagination, filters, sorter) {
      // console.log('Various parameters', pagination, filters, sorter)
      this.filteredInfo = filters
      this.sortedInfo = sorter
    },
    clearFilters() {
      this.filteredInfo = null
    },
    clearAll() {
      this.filteredInfo = null
      this.sortedInfo = null
    },
    setAgeSort() {
      this.sortedInfo = {
        order: 'descend',
        columnKey: 'title'
      }
    }
  }
}
</script>
<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>
