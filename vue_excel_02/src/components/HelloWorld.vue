<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <button @click="fn_exports">excel</button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                anchorTable: [{
                    NAME: '测试',
                    VESSEL_LENGTH: '222',
                    CARGO_NAME: '333'
                }, {
                    NAME: '测试',
                    VESSEL_LENGTH: '222',
                    CARGO_NAME: '333'
                }, {
                    NAME: '测试',
                    VESSEL_LENGTH: '222',
                    CARGO_NAME: '333333333333333333333333333333333333333'
                }]
            }
        },
        methods: {
            // exportExcel() {
            //     import('@/vendor/Export2Excel').then(excel => {
            //         const tHeader = ['船名', '船长', '货种', '载重吨', '净吨', '锚地', '预抵时间', '下锚时间', '预靠泊位'] //表头
            //         const title = ['锚地船舶', '', '', '', '', '', '', '', '']  //标题
            //         //表头对应字段
            //         const filterVal = ['NAME', 'VESSEL_LENGTH', 'CARGO_NAME', 'DEADWEIGHT_TONNAGE', 'NET_TONNAGE', 'ANCHORAGE_ID', 'EXP_ARCHORAGE_TIME', 'AC_ARCHORAGE_TIME', 'RECOMMEND_BERTH']
            //         const list = this.anchorTable
            //         const data = this.formatJson(filterVal, list)
            //         data.map(item => {
            //             // console.log(item)
            //             item.map((i, index) => {
            //                 if (!i) {
            //                     item[index] = ''
            //                 }
            //             })
            //         })
            //         // const merges = ['A1:I1'] //合并单元格
            //         excel.export_json_to_excel({
            //             title: title,
            //             header: tHeader,
            //             data,
            //             // merges,
            //             filename: '锚地船舶',
            //             autoWidth: true,
            //             bookType: 'xlsx'
            //         })
            //     })
            // },
            fn_exports(){
                const sheets =[{
                    sheet:[
                        {
                            name:'船名',
                            prop:'NAME',
                            wpx:200,
                            //value ,cell
                            ft:(value)=>{
                                return value
                            }
                        }, {
                            name:'船长',
                            prop:'VESSEL_LENGTH',
                            wpx:100,
                        }, {
                            name:'货种',
                            prop:'CARGO_NAME'
                        }, {
                            name:'载重吨',
                            prop:'DEADWEIGHT_TONNAGE'
                        }, {
                            name:'净吨',
                            prop:'NET_TONNAGE'
                        }, {
                            name:'锚地',
                            prop:'ANCHORAGE_ID'
                        }, {
                            name:'预抵时间',
                            prop:'EXP_ARCHORAGE_TIME'
                        }, {
                            name:'下锚时间',
                            prop:'AC_ARCHORAGE_TIME'
                        }, {
                            name:'预靠泊位',
                            prop:'RECOMMEND_BERTH'
                        }
                    ],
                    title :'锚地船舶',
                    sheetName :'锚地船舶',
                }]

                const filename ='锚地船舶'
                this.export2Excel(sheets, filename,{autoWidth:false})
            },
            export2Excel(sheets,filename,options={}) {
                import('@/vendor/Export2Excel').then(excel => {

                    const export_sheets = sheets.map(it=>{
                        const _title=[it.title]
                        _title.length = it.sheet.length
                        _title.fill('',1)
                        return {
                            sheetName:it.sheetName,
                            title:_title,
                            header:it.sheet,
                            data:this.anchorTable.map(v=>{
                                return it.sheet.map(j=>{
                                    let a =v[j.prop] ||'';
                                    if(j.ft && typeof j.ft == 'function'){
                                        a = a&&j.ft(a,v)
                                    }
                                    return a
                                })
                            })
                        }
                    })
                    console.log(options)
                    excel.export_json_to_excel(export_sheets, {filename,...options})
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
