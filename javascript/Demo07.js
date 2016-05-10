/**
 * Created by Administrator on 2016-05-10.
 * 匿名函数的定义与调用
 */
//定义匿名函数及其调用方式
//第一种
(function () {
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

    // 如果需要给调用者返回一个内容，可以直接使用return语句来返回。写法和java一致。
})();

//第二种
var compare = function () {
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

    // 如果需要给调用者返回一个内容，可以直接使用return语句来返回。写法和java一致。
};
compare();
