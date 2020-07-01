<template>
    <div class="excel-button">
       <button
               class="button"
               @click="fn_exports"
       >导出</button>
    </div>
</template>

<script>
    import  { export_json_to_excel } from '@/vendor/Export2Excel'
    export default {
        name: "excelExportsButton",
        props:{
            sheets:{
                type:Array,
                required:true
            }
        },
        data(){
            return {
                totalList:[
                    {
                        CARNUMBER: "ceshi ",
                        CARTYPE: "渣土车",
                        DEPARTMENT: "测试单位",
                        DRIVER: "张三",
                        ID: "02c37347-fdea-11e8-8c24-00163e32a1d5",
                        INOUTFLAG: "出",
                        INOUTTIME: "2018-12-12 16:43:35",
                        OPERATIONTYPE: "手动操作平台起杆",
                        SQUARE: "111",
                        status: "0",
                    },{
                        CARNUMBER: "123 ",
                        CARTYPE: "测试车",
                        DEPARTMENT: "测试单位",
                        DRIVER: "李四",
                        ID: "02c37347-fdea-11e8-8c24-00163e32a1d5",
                        INOUTFLAG: "出",
                        INOUTTIME: "2018-12-12 16:43:35",
                        OPERATIONTYPE: "手动操作平台起杆",
                        SQUARE: "111",
                        status: "1",
                    }]


            }
        },
        methods:{
            fn_exports(){
               this.trans_data(this.sheets,'进出管理列表');
            },
            async trans_data(sheets,defaultName){

                sheets= await Promise.all( sheets.map(async (it)=>{
                    let  listData =[];
                    let i =0;
                    let totalSize =0;
                    do{
                        const res = await this.fn_get_data();
                        listData.push(...res.data);
                        totalSize = res.pageSize;
                        i++;
                    }while (i<totalSize);

                    return {
                        //初始化表头
                        th:it.table.map((item)=>{
                            return item.name
                        }),
                        //遍历数据listData 找到 对应sheet table中的数据
                        //ft formatter 数据转化 传递参数value row
                        jsonData:listData.map((v)=>{
                            return it.table.map(j=>{
                                let a= v[j.prop]||'';
                                if( typeof j.ft =='function' ){
                                    a = a&&j.ft(a,v) ||''
                                }
                                return a
                            })
                        }),
                        sheetname:it.sheetname ||'sheet1'
                    }
                }));
                this.excel_exports(sheets,defaultName);
            },
            excel_exports(sheets,defaultName){
                export_json_to_excel(sheets, defaultName);// 导出的表格名称，根据需要自己命名
            },
            fn_get_data(){
                //替换具体请求
                return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        const data = [
                            {
                                CARNUMBER: "ceshi ",
                                CARTYPE: "渣土车",
                                DEPARTMENT: "测试单位",
                                DRIVER: "张三",
                                ID: "02c37347-fdea-11e8-8c24-00163e32a1d5",
                                INOUTFLAG: "出",
                                INOUTTIME: "2018-12-12 16:43:35",
                                OPERATIONTYPE: "手动操作平台起杆",
                                SQUARE: "111",
                                status: "0",
                            },{
                                CARNUMBER: "123 ",
                                CARTYPE: "测试车",
                                DEPARTMENT: "测试单位",
                                DRIVER: "李四",
                                ID: "02c37347-fdea-11e8-8c24-00163e32a1d5",
                                INOUTFLAG: "出",
                                INOUTTIME: "2018-12-12 16:43:35",
                                OPERATIONTYPE: "手动操作平台起杆",
                                SQUARE: "111",
                                status: "1",
                            }];
                        resolve({data:data,pageSize:2})
                    },300)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/commen";
.excel-button{
    .button{
        @extend %border1solidred;
    }

}
</style>
