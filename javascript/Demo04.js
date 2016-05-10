/**
 * Created by Administrator on 2016-05-10.
 * javaScript创建对象的两种方式
 */
//第一种方式
var person=new Object();
//添加属性并赋值
person.name="河洲";
person.age="22";
person.sex="男";
//访问对象的属性值
alert(person);
alert(person.age);
alert(person.name);

//第二种方式
var perso={};
//添加属性并赋值
perso.name="河洲";
perso.age="22";
perso.sex="男";
//访问对象的属性值
alert(perso);
alert(perso.age);
alert(perso.name);

