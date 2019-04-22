var vm=new Vue({
    el:"#ddd",
    data:{
        a:1,
        seen:true,
        url:"www.baidu.com",
        doSomething:function(){
            alert("123456");
        },
        message: 'Hello',
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
        isActive: false,
        hasError:true,
        activeClass:"",
        errorClass:"",
        activeColor:"red",
        fontSize:200,
        styleObject: {
            color: 'red',
            fontSize: '13px'
          },
          ok:false,

          

    },
    //计算属性（基于缓存）
    computed:{
        // a computed getter
        reversedMessage: function () {
          // `this` points to the vm instance
          return this.message.split('').reverse().join('')
            } 
      },
      //方法：（相比计算属性，浪费性能内存。）
      methods: {
        reverseMessage: function () {
          return this.message.split('').reverse().join('')
        }
        },
        //监察属性
        watch: {
            firstName: function (val) {
              this.fullName = val + ' ' + this.lastName
            },
            lastName: function (val) {
              this.fullName = this.firstName + ' ' + val
            }
          }


});