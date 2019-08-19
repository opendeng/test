/** 
130          *  使用这种方式虽然可以严格实现封装，但是带来的问题是get和set方法都不能存储在prototype中，都是存储在对象中的 
131          * 这样无形中就增加了开销 
132          */
//对象为立即执行函数。
var Person = (function() {

    //检测函数
    var checkNo = function(no) {

        if (!no.constructor == "string" || no.length != 4)

            throw new Error("学号必须为4位");

    };

    //共享变量  

    var times = 0;

    //返回一个函数。
    return function(no, name, age) {
        console.log(times++); // 0 ,1 , 2  

        var no, name, age;
        this.setNo = function(no) {
            checkNo(no);
            this._no = no;

        };
        this.getNo = function() {

            return this._no;

        }
        this.setName = function(name) {
            this._name = name;

        }

        this.getName = function() {

            return this._name;

        }

        this.setAge = function(age) {
            this._age = age;

        }
        this.
        getAge = function() {
            return this._age;

        }
        this.setNo(no);
        this.setName(name);
        this.setAge(age);
    }
})();
Person.prototype = {
    constructor: Person,
    toString: function() {
        return "no = " + this._no + " , name = " + this._name + " , age = " + this._age;
    }
};