# vue_excel_00

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

# vue excel 导出功能

## 安装
~~~
npm install -S file-saver xlsx
npm install -D script-loader
~~~

## 使用
1 在具体页面引入抽离组件excelExportsButton   
2 传值 sheets 传递对象数组   
3  sheet 格式
```
{
    table : excel中表格 type 数组对象 name 表头 prop对应字段 ft formatter方法 参数：value当前值、row：当前行原始值
    url ： 对应请求url
    query： 请求参数
    sheetname：excel中 sheet名
}
```