/*
* 1.本app.js文件，不要局限的理解成模块化中，“汇总”的那个文件。
* 2.本app.js文件，是webpack的入口文件
* 3.该文件里，不仅仅只是引入js文件，还可以引入：图片、媒体文件、样式、甚至是json文件
*
* */
import {sum} from './module1'
import {sub} from './module2'
//引入外部的json文件
import data from '../json/data.json'

setTimeout(()=>{
   console.log(1)
},1000)
console.log(data)

console.log(sum(1,2))
console.log(sub(3,2))