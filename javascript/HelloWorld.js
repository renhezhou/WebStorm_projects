/**
 * Created by Administrator on 2017-07-01.
 * 1 什么是javaScript?
 *   javaScript是一种描述式语言，它与html结合起来使用，用于增强功能，并提高最终用户之间的交互性能。它与java是完全不同的一种语言，虽然在结构和语法上与java类似，
 *   它只是函数式的，动态的语言。客户端的JavaScript必须要浏览器的支持。
 *   JavaScript主要包括:基础语法，DOM(文档对象模型),BOM（浏览器对象模型）
 *
 * 2 在网页中加入JavaScript:
 *   第一种方式：通过在网页中加入<script>......</script>标记JavaScript的开始和结束，将JavaScript代码放到<script>......</script>标记之中。
 *   第二种方式：引入一个以.js作为扩展名的外部JavaScript文件，将JavaScript放到该文件中，然后在html文件中通过JavaScript建立关联。
 * 3 基础语法:
 *   JavaScript对大小写敏感。
 *   JavaScript语句之间用分号分割。（不是必须）
 *   JavaScript的注释和java一样。
 *   合法的JavaScript变量应该满足如下两个条件：
 *       变量必须以字母，￥和_符合开头。
 *       变量名称对大小写敏感。
 *   JavaScript是一种弱类型的编程语言
 *   变量声明；var 关键字
 *       只声明变量：var x；
 *       声明并赋值：var x=1；
 *       一条语句声明多个变量：var x=1，y=3，z=0；
 *   JavaScript数据类型：
 *       JavaScript的数据类型有：字符串，数字，布尔，数组，对象，null，undefined
 *       字符串：是存储字符的变量。
 *       数字：JavaScript只有一种数字类型。数字可以带小数点也可以不带。
 *       布尔：布尔只能有两个值：true或false。常用在条件测试中。
 *       数组：数组对象用来在单独的变量名中存储一系列的值。使用关键字new来创建数组。new array（）；通过指定数组名以及索引来访问某个特定的元素。如需修改已有数组中的值，只要向指定下标号添加一个新值即可。
 *             JavaScript中数组长度可以动态改变。
 *             创建方式：第一种:var arr=new array（）；第二种：var arr=【】；
 *             数组的基本操作：详见Demo03.js
 *       对象：JavaScript中所有事物都是对象：字符串，数值，数组，函数等。
 *             JavaScript是面向对象的语言，但JavaScript不使用类。
 *             在JavaScript中，不会创建类，也不会通过类来创建对象。
 *             JavaScript对象又花括号分隔。在括号内部，对象的属性以名称和值对的形式（name：value）来定义。属性由逗号分隔。
 *             创建对象的两种方式：
 *                 第一种方式：使用new object（）创建对象。
 *                 第二种方式：使用一对花括号来创建。
 *                 详见Demo04.js
 *        Undefined：表示变量不含有值。var x；
 *        Null：表示定义了空值，没有分配空间。var x=null；
 *        ==和===的比较：详见Dmeo05.js
 *  4 函数：
 *        函数的定义：详见Dmeo06.js
 *        匿名函数的定义与调用：详见Demo07.js
 *        如何向对象中添加一个成员函数呢？采用匿名函数来实现向对象添加匿名函数。详见Demo08.js
 *  5 如何将自己写好的函数和html代码进行关联。
 *        详见Dmeo01.html
 *  6 DOM的操作：
 *    查找元素：通过id查找，返回单个对象。
 *         var name=document.getElementById("name");
 *              通过name和标签名查找，返回对象数组。
 *         var mydiv=document.getElementById("mydiv");
 *         mydiv.innerTHML=<b>我</b>是div的内容
 *    访问和修改输入框的值使用value属性
 *         获取用户名和密码的值
 *         alert(name.value);
 *         alert(password.value);
 *    访问和修改元素的样式，使用style样式名
 *         var mydiv=document.getElementById("mydiv");
 *         mydiv.style.color="red";
 *
 */

