window.onload=function(){
    //
    Vue.component('example', {
        props: {
          // 基础类型检测 （`null` 意思是任何类型都可以）
          propA: Number,
          // 多种类型
          propB: [String, Number],
          // 必传且是字符串
          propC: {
            type: String,
            required: true
          },
          // 数字，有默认值
          propD: {
            type: Number,
            default: 100
          },
          // 数组／对象的默认值应当由一个工厂函数返回
          propE: {
            type: Object,//自定义
            default: function () {
              return { message: 'hello' }
            }
          },
          // 自定义验证函数
          propF: {
            validator: function (value) {
              return value > 10
            }
          }
        },
        template: '<div>{{propA}}，小明。我是传入对象</div>'
      })
    
    //
    Vue.component('my-component', {
        // 选项
        props: ['messaged'],
        template: '<div>{{ messaged }}，小明。我是子组件</div>'
      });

      Vue.component('child', {
        // 声明 props：
        //关于props单
        props: ['message'],
        // 就像 data 一样，prop 可以用在模板内
        // 同样也可以在 vm 实例中像 “this.message” 这样使用
        template: '<my-component messaged="他好"></my-component>'
      })
      var data = { counter: 0 }
      Vue.component('simple-counter', {
        template: '<button v-on:click="counter += 1">{{ counter }}</button>',
        // data 是一个函数，因此 Vue 不会警告，
        // 但是我们为每一个组件返回了同一个对象引用
        data: function () {
        //   return data //同一个数据，会影响三个按钮。
        return {
            counter: 0//不会影响
          }
        }
      })      
      //自定义事件：
      Vue.component('button-counter', {
        //   实质上是点击事件触发increment函数
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
      //increment函数触发increment事件
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})
   var vm = new Vue({
    el: '#on',
    data:{
        propA:123,
        propC:123,
        total: 0,
        currentView: 'home'
    },
    methods: {
        incrementTotal: function () {
          this.total += 1
        }
      },
    // 选项
    components: {
        home: { template:"<input />" },
        posts: { template:"<button>123</button>"  },
        archive: { template:"<p>你好</p>" }
      }
  });
  //组件
  


} 