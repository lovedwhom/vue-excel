export function export2excel() {
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
       
        excel.export_json_to_excel({
            title: title,
            header: tHeader,
            data,
            filename: '锚地船舶',
            autoWidth: true,
            bookType: 'xlsx'
        })
    })
}
