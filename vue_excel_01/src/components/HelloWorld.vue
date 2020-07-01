<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="exportExcel">excel</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      anchorTable:[{
        NAME:'测试',
        VESSEL_LENGTH:'222',
        CARGO_NAME:'333'
      },{
        NAME:'测试',
        VESSEL_LENGTH:'222',
        CARGO_NAME:'333'
      },{
        NAME:'测试',
        VESSEL_LENGTH:'222',
        CARGO_NAME:'333333333333333333333333333333333333333'
      }]
    }
  },
  methods:{
    exportExcel() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['船名', '船长', '货种', '载重吨', '净吨', '锚地', '预抵时间', '下锚时间', '预靠泊位'] //表头
        const title = ['锚地船舶', '', '', '', '', '', '', '', '']  //标题
        //表头对应字段
        const filterVal = ['NAME', 'VESSEL_LENGTH', 'CARGO_NAME', 'DEADWEIGHT_TONNAGE', 'NET_TONNAGE', 'ANCHORAGE_ID', 'EXP_ARCHORAGE_TIME', 'AC_ARCHORAGE_TIME', 'RECOMMEND_BERTH']
        const list = this.anchorTable
        const data = this.formatJson(filterVal, list)
        data.map(item => {
          // console.log(item)
          item.map((i, index) => {
            if (!i) {
              item[index] = ''
            }
          })
        })
        const merges = ['A1:I1'] //合并单元格
        excel.export_json_to_excel({
          title: title,
          header: tHeader,
          data,
          merges,
          filename: '锚地船舶',
          autoWidth: true,
          bookType: 'xlsx'
        })
      })
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
