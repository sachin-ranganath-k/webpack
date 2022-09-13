const path=require('path');

module.exports={
 entry:"./src/index.js",  //Starting entry file
 output:{
    filename:"bundle.js",   //File named bundle.js will be outputted by webpack
    path:path.resolve(__dirname,"dist") //bundle.js file will be created in the directory dist. 
    //dist directory will be created by webpack later
},
module:{
    rules:[
        {
        test: /.css$/,
        use:["style-loader", "css-loader"]
        }
    ]
}
}