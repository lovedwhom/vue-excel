// 非项目配置这里配置一作webstorm识别

module.exports = {
    resolve:{
        alias:{
            '@':require('path').resolve(__dirname,'src')
        }
    }
}