//vue实例：
var vm = new Vue({
    el: '#example',
    data: {a:1,
    b:"相加",
    c:3,
    d:"<div style='color:red'>1</div>",//插入的内容
    e:"idd",
    someDynamicCondition:true,
    message:"abcdefghijk"
    },
    
    created() {
        console.log("我是生命的开始。");
    },
    destroyed() {
        console.log("我是生命的结束。")
    },
    //过滤器:
    filters: {
        capitalizee: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        }
      }
  });

  //组件：
var MyComponent = Vue.extend({
    // 扩展选项
  })
  // 所有的 `MyComponent` 实例都将以预定义的扩展选项被创建
  var myComponentInstance = new MyComponent()
  