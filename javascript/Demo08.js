/**
 * Created by Administrator on 2016-05-10.
 * 向对象中添加一个成员函数
 */
var person = new Object();
//添加属性并赋值
person.name = "河洲";
person.age = "22";
person.sex = "男";
//向对象中添加函数
person.text = function () {
    alert("text");
}
//访问对象的属性值
alert(person);
alert(person.age);
alert(person.name);
person.text();