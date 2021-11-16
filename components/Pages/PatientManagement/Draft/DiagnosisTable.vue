<!-- ************************** TEMPLATE  ************************* -->
<template>
  <div class="diagnosis-table">
    <!--TABLE -->
    <a-table
      :columns="columns"
      :pagination="false"
      :data-source="data"
      type="primary"
      @change="handleChange"
    >
      <span slot="delete">
        <a-icon type="delete" theme="filled" />
      </span>
    </a-table>
  </div>
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
const data = [
  {
    key: '1',
    title: 'Patient Responsibility',
    age: 32,
    value: 'Patient Responsibility1'
  },
  {
    key: '2',
    title: 'Insurance Bal',
    age: 42,
    value: '$0'
  },
  {
    key: '3',
    title: 'Alloc Payment',
    age: 32,
    value: '$240'
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
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          sorter: (a, b) => a.age - b.age,
          sortOrder: sortedInfo.columnKey === 'title' && sortedInfo.order
        },

        {
          title: 'Value',
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
