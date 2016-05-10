/**
 * Created by Administrator on 2016-05-10.
 * 在JavaScript中，对数组的基本操作
 */
//创建数组
var arr=new Array();
//创建之后，数组的长度为0
alert(arr.length);
//赋值
arr[5]=3;
arr[3]=2;
arr[1]=4;
//赋值之后的数组长度
alert(arr.length);
//取值
alert(arr[5]);
//遍历
for(var i=0;i<arr.length;i++){
    alert(arr[i]);
}