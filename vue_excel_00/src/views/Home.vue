<template>
  <div class="home">
    <excel-exports-button :sheets="[sheet,{...sheet,sheetname:'进出管理列表2'}]"></excel-exports-button>
  </div>
</template>

<script>
// @ is an alias to /src
import excelExportsButton from "./components/excelExportsButton";

export default {
  name: 'home',
  components: {
    excelExportsButton
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
        }],
        sheet :{
          table:[
            {name:'车牌号',prop:'CARNUMBER'},
            {name:'司机',prop:'DRIVER'},
            {name:'运载类型',prop:'CARTYPE'},
            {name:'方量',prop:'SQUARE'},
            {name:'进出',prop:'SQUARE'},
            {name:'单位',prop:'INOUTFLAG'},
            {name:'时间',prop:'INOUTTIME'},
            {name:'状态',prop:'status',ft:(value,row)=>{
                // console.log(!!+value)
                return !!+value ? '管理员':'员工';
              }},
          ],
          url:'',
          query:{},
          sheetname:'进出管理列表'

        }



    }
  },
}
</script>
