/** 
 * js对象封装
 63          *  使用这种方式虽然可以严格实现封装，但是带来的问题是get和set方法都不能存储在prototype中，都是存储在对象中的 
 64          * 这样无形中就增加了开销 
 65          */

// var Person = 
function Person(no, name, age) {
    68
    var _no, _name, _age;
    69
    var checkNo = function(no) {

        if (!no.constructor == "string" || no.length != 4)

            throw new Error("学号必须为4位");

    };
    this.setNo = function(no) {
        checkNo(no);
        _no = no;

    };
    this.getNo = function() {

        return _no;

    }
    this.setName = function(name) {
        _name = name;

    }

    this.getName = function() {
        return _name;
    }

    this.setAge = function(age) {
        _age = age;

    }
    this.
    getAge = function() {

        return _age;

    }

    this.setNo(no);
    this.setName(name);
    this.setAge(age);

}
// 对象封装。约定私有属性为下划线_开头，并且加入get、set方法设置或者访问。方法存放在原型之中。
Person.prototype = {
    constructor: Person,
    toString: function() {

        return "no = " + this.getNo() + " , name = " + this.getName() + " , age = " + this.getAge();

    }

};