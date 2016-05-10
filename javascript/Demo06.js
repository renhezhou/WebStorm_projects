/**
 * Created by Administrator on 2016-05-10.
 * 函数的定义
 * 在JavaScript中，函数的定义格式为：
 * function  函数名 （参数列表）{
 *    //函数体
 * }
 */
//定义函数
function compare() {
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
}

//调用函数
compare();