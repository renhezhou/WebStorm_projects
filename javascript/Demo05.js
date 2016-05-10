/**
 * Created by Administrator on 2016-05-10.
 * ==和===的比较
 */
var a = 5;
var b = 5;
var c = "5";
//== 比较两个变量的内容是否相等。
alert("a==b:" + (a == b));
alert("a==c:" + (a == c));
alert("b==c:" + (b == c));
//===比较两个变量的内容和类型是否完全一致。
alert("a===b:" + (a === b));
alert("a===c:" + (a === c));//false
alert("b===c:" + (b === c));//false