# vue_excel_01
## 概述
vue excel 导出设置样式 xlsx-style基础版

合并表头、宽度自适应。
## Project setup
```
yarn install


```

### install xlsx-style
```


npm install --save file-saver xlsx xlsx-style
//复制 src/cendor/Export2Excel
npm install --save-dev script-loader
```

### 启动后报错
```
not found cptable in node_modules/xlsx-style/dist/cpexcel.js
```
解决方法  

在该js文件里，第807行
```
var cpt = cptable;
```



### 参考

