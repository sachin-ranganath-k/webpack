-- add.js -> Addition functionality + Default export
-- subtract.js -> Subtract functionality + Default export
-- index.js -> Entry file
-- main.js -> Function call with import index.js


-- import and export keywords won't be understood by nodejs compiler. It only understands plain js.
   So we need to use the webpack.config.js. 
-- Create webpack.config.js in the root folder
-- Now initialize it using "npm init -y"
-- Instal dependencies using "npm i --save-dev webpack webpack-cli"
-- Run webpack.config.js. CLI command: "npx webpack --config webpack.config.js --mode development"
   It creates bundle.js file in the dist folder as mentioned in webpack.config.js.
-- Now run the bundle.js file. "node dist/bundle.js
-- The output will be addition (as passed in parameters)

--index.js contains add and subtract (using require)
-- Change them to 
    " import add from './functions/add' "
    " import add from './functions/subtract' "
    "export {add, subtract};"

-- In main.js, just import the named exports " import {add} from "./functions" "
-- If we want to import all the functions to main.js,
   import * as $ (or any text for aliasing) from './functions'  //functions folder contains add.js , subtract.js
   Now use functions as 
    $.additionResult(1,2)
    $.subtractResult(20,10)
