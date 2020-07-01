const path = require('path');
function resolve (dir){
    return path.join(__dirname,dir)
}
module.exports ={
    lintOnSave:false,
  devServer:{
      open:true
  },
    chainWebpack:(config)=>{
      config.resolve.alias
          .set('@',resolve('src'))
    }
};